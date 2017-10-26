import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/index';
import Root from './container/Root';
import { fetchData } from './action/';

const store = configureStore(window.__INITIAL_STATE__);

if (Object.keys(window.__INITIAL_STATE__).length === 0) {
    ReactDOM.render(<Root
        store={store}
        isClient
    />, document.getElementById('root'));
} else {
    ReactDOM.hydrate(<Root
        store={store}
        isClient
    />, document.getElementById('root'));
}

