import React from 'react';
import './NameCard.css';
const NameCard = ({ suggestedname }) => {
    const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

    return (
        <a target="_blank" className="card-link" href={`${nameCheapUrl}${suggestedname}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedname}</p>
            </div>
        </a>
    );
};

export default NameCard;