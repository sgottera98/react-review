import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>            
            <Link
                to="/login"
                className="text-white font-bold text-center text-4xl"
            >
                ir para Login
            </Link>
        </>
    );
};

export default Home;
