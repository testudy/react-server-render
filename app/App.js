import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    { this.props.data }
                </p>
            </div>
        );
    }
}

export default App;
