import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <Link to="/" className="navbar-brand">Employee Management App</Link>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
