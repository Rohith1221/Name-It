import React from 'react'
import './Header.css'
import logo from './abs.png';
const Header = () => {
    return (
        <div className="head-container">
            <img src={logo} className="head-image" alt="head-image" />
            <h1 className="head-text">Name it</h1>
        </div>
    );
};


export default Header;