import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function App(props) {
    return (
        <div className="app">
            <div className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h2>唐诗三百首</h2>
            </div>
            <section className="app-intro">
                { props.children }
            </section>
        </div>
    );
}
