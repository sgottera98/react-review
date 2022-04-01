import React from 'react';
import './style.scss';

const Option = (props) => {
    return (
        <option className="option" value="">
            {props.children}
        </option>
    );
};

export default Option;
