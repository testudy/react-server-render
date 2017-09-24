import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';

fetch('/api/desc').then((resp) => {
    return resp.text();
}).then((body) => {
    console.log(body);
    const props = {data: body};
    ReactDOM.render(<App
        {...props}
    />, document.getElementById('root'));
});

