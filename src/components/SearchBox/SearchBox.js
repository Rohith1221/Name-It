import React from 'react';
import './SearchBox.css'
const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-box">
            <input onChange={(event) => onInputChange(event.target.value)} type="text" placeholder="Type keywords" className="search-input"></input>
        </div>
    );
};

export default SearchBox;

//onChange={(aaa)=> ...} this is callback child -> parent communication 