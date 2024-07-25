import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/path/to/logo.png" alt="Google Chrome Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#download">Download</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
