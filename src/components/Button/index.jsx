import React from 'react';
import "./style.scss"

const Button = (props) => {
    return (
        <div className="wrap-button">
            <button className="button">{props.children}</button>
        </div>
    );
};

export default Button;
