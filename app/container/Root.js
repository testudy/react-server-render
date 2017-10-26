import React from 'react';
import { Provider, connect } from 'react-redux';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import router from '../router';
import App from '../component/App';

function Root(props) {
    return (
        <Provider store={props.store}>
			<Router>
                <App>
                    {router}
                </App>
			</Router>
        </Provider>
    );
};

function mapStateToProps(state) {
    return {
        data: state.data,
    };
}

export default connect(mapStateToProps)(Root);
