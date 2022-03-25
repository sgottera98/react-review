import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';
import ThemeContext from './utility/context/ThemeContext';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeContext>
                <App />
            </ThemeContext>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
