import React from 'react';
import './Button.css'

function Button(props) {
    return <>
        <button className={props.color} onClick={props.handleClick()} >
            {props.children}
        </button>
    </>;
}

export default Button;
