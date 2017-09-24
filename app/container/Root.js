import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import App from '../component/App';

class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <App
                    {...this.props}
                />
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
