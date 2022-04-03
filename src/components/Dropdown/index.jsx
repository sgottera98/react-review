import React from 'react';
import './style.scss';

const Dropdown = (props) => {

    return (
        <div className="wrap-select">
            <select className="select" name="" id="" onChange={props.selectCustomEvent}>
                {props.children}
            </select>
        </div>
    );
};

export default Dropdown;
