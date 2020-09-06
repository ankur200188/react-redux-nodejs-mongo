import { compose, path, nth, split } from 'lodash/fp';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';


import ConsumerReducer from '../../components/Consumers/reducers/consumer';

const getBasePath = compose(
    nth(1),
    split('/')
);

const getCurrentPage = (state = {}) => {
    const { router } = state;
    if (router) {
        const route = path('location.pathname')(router);
        if (route) {
            const routeName = getBasePath(route);
            return routeName;
        }
    }

    return '';
};

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ConsumerReducer,
    getCurrentPage
});

export default rootReducer;

