import React from 'react';
import Navigation from '../../../components/Navigation';
import './style.scss';

const ThemeContext = (props) => {
    return (
        <div className="theme-context">
            {props.children}
        </div>
    );
};

export default ThemeContext;
