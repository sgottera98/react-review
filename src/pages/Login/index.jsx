import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button'

const Login = (props) => {
    return (
        <>
            <Link to="/" className="text-white font-bold text-center text-4xl">
                <Button>Voltar à home</Button>
            </Link>
        </>
    );
};

export default Login;
