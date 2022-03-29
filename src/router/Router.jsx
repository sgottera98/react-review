import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Currencies from '../pages/Currencies';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Slip from '../pages/Slip';

const Router = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="slip" element={<Slip />}></Route>
            <Route path="currencies" element={<Currencies />}></Route>
        </Routes>
    );
};

export default Router;
