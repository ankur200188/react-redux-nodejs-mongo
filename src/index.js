import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';

// eslint-disable-next-line no-undefined
const INITIAL_STATE = {};
const history = createBrowserHistory();
const store = configureStore(INITIAL_STATE, history);

ReactDOM.render(<App history={history}
    store={store}/>, document.getElementById('root'));
