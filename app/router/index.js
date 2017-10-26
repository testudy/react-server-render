import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Home from '../container/Home';
import Detail from '../container/Detail';

const config = [
    { exact: true, path: '/', component: Home },
    { exact: true, path: '/:title', component: Detail },
];

const routes = (
    <Switch>
        {
            config.map((item, index) => (<Route key={index} {...item} />))
        }
        <Redirect from='*' to='/'/>
    </Switch>
);

export {
    config,
    routes as default,
};

