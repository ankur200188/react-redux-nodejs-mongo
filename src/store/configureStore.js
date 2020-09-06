import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import api from './middleware/api';
import rootReducer from './root-reducer';

export default function configureStore(initialState, history) {
    const store = createStore(
        rootReducer(history), // new root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk,
                api
            )
        )
    );

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    /* eslint-disable global-require */
        module.hot.accept('./root-reducer', () => {
            const nextRootReducer = require('./root-reducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
