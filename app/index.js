import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const props = window.__INITIAL_STATE__;

ReactDOM.render(<App
    {...props}
/>, document.getElementById('root'));
