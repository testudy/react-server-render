import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'init',
        };

        fetch('/api/desc').then((resp) => {
            return resp.text();
        }).then((body) => {
            console.log(body);
            this.state = {
                data: body,
            };
        });
    }

    componentWillMount() {
        console.log('will mount');
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
                <p className="App-intro">
                    { this.state.data}
                </p>
            </div>
        );
    }
}

export default App;
