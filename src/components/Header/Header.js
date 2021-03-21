import React from 'react'
import './Header.css'
import logo from './abs.png';
const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img src={logo} className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`} alt="head-image" />
            <h1 className={`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}>{headTitle}</h1>
        </div>
    );
};


export default Header;

//parent -> child commun.. =props
//child -> parent communication = callback