import React from 'react'

const Toast = (props) => {

    const { color, isDisplayed } = props;

    return (
        <div className="toast" style={{display: isDisplayed ? 'block' : 'none'}}>
            <header>You Matched <span style={{color: color}}>{color}</span> !!!</header>
        </div>
    );

};

export default Toast;