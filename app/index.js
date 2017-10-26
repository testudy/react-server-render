import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/index';
import Root from './container/Root';
import { fetchData } from './action/';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(<Root
    store={store}
/>, document.getElementById('root'));
