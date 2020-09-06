/**
 * A Middleware that generalizes the async redux actions pattern for the app.
 * It automatically dispatches an action_REQUEST action before the async call is made
 *  and dispatches either action_SUCCESS or
 *  action_FAILURE depending upon the result of the async call.
 * The action types to be dispatched are sent as an array.
 * Returns a promise object.
 * Refer to http://redux.js.org/docs/recipes/ReducingBoilerplate.html for more info.
 */
//TODO: Make the api endpoint configurable.
import _assign from 'lodash/assign';
import { normalize } from 'normalizr';

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('CallAPI');

// eslint-disable-next-line arrow-body-style
export default ({ getState }) => {
    return (next) => (action) => {
        const apiAction = action[CALL_API];
        if (typeof apiAction === 'undefined') {
            return next(action);
        }

        const {
            types,
            callApi,
            shouldCallApi = () => true,
            schema,
            payload = {}
        } = apiAction;

        if (!Array.isArray(types) ||
      types.length !== 3 ||
      !types.every((type) => typeof type === 'string')) {
            throw new Error('Expected an array of three string types.');
        }

        if (typeof callApi !== 'function') {
            throw new Error('Expected fetch to be a function.');
        }

        // get the app state
        const state = getState();
        if (!shouldCallApi(state, payload)) {
            return Promise.resolve();
        }

        //include any payload sent as part of the action.
        // eslint-disable-next-line func-style
        function actionWith(data) {
            return _assign({}, payload, data);
        }

        const [requestType, successType, failureType] = types;

        next(actionWith({ type: requestType }));

        return callApi(state)
            .then((response) => {
                if (schema && response) {
                    // eslint-disable-next-line no-param-reassign
                    response = normalize(response, schema);
                }

                next(actionWith({
                    response,
                    type: successType
                }));

                return response;
            })
            .catch((error) => {
                next(actionWith({
                    error,
                    type: failureType
                }));

                throw error;
            });
    };
};
