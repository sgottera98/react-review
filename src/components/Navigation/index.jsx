import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const handleWidthScreen = () => (window.innerWidth <= 768 ? true : false);

const Navigation = (props) => {
    const [isMobile, setIsMobile] = useState(handleWidthScreen());
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        handleWidthScreen();
        window.addEventListener('resize', () => setIsMobile(handleWidthScreen));
    }, [isActive]);

    console.log(isActive);
    const WrapNavigation = () => {
        return (
            <nav className="navigation">
                <ul>
                    <li>
                        <Link
                            to="/slip"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Slip
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/currencies"
                            className="text-white font-bold text-center text-xl"
                            onClick={() => setIsActive(false)}
                        >
                            Currency Cotation
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };

    return (
        <>
            {isMobile ? (
                <div className="wrap-navigation">
                    <div
                        className={`slide-menu ${
                            isActive && 'slide-menu-open'
                        }`}
                    >
                        <WrapNavigation />
                    </div>
                    <div
                        className="hamburguer"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span className="hamburguer-line" />
                        <span className="hamburguer-line" />
                        <span className="hamburguer-line" />
                    </div>
                </div>
            ) : (
                <WrapNavigation />
            )}
        </>
    );
};

export default Navigation;
