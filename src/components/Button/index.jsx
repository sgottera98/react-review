import React from 'react';
import './style.scss';

const Button = (props) => {
    return (
        <div className="wrap-button">
            <button className="button" onClick={props.buttonCustomEvent}>
                {props.children}
            </button>
        </div>
    );
};

export default Button;
