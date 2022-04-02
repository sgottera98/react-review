import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button'

const Home = () => {
    return (
        <>            
            <Link
                to="/login"
                className="text-white font-bold text-center text-4xl"
            >
                <Button>Ir para login</Button>
            </Link>
        </>
    );
};

export default Home;
