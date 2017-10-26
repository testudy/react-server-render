import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import router from '../router';
import App from '../component/App';

class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
				<Router>
                    <App>
                        {router}
                    </App>
				</Router>
            </Provider>
        );
    };
};

function mapStateToProps(state) {
    return {
        data: state.data,
    };
}

export default connect(mapStateToProps)(Root);
