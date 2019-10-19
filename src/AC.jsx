import React from 'react';
import App from './App.css';

export const AC = (props) => (
    <div className = "buttonAC" onClick={props.handleClear}>
        {props.children}
    </div>
);