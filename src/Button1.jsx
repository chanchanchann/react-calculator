import React from 'react';
import App from './App.css';

export const Button1 = props => (
    <div className = "button"
    onClick={ () => props.handleClick(props.children)}>
        {props.children}
    </div>
);

<Button1>
    <div>a</div>
</Button1>