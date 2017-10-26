import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Home from '../container/Home';
import Detail from '../container/Detail';

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:title" component={Detail} />
        <Redirect from='*' to='/'/>
    </Switch>
);

export default routes;

