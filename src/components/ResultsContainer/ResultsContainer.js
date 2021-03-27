import { getSuggestedQuery } from '@testing-library/dom';
import React from 'react'
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css'
const ResultsContainer = ({ suggestednames }) => {
    const suggestedNameJSX = suggestednames.map(suggestedname => {
        return (
            // <p key={suggestedname}>{suggestedname}</p>
            <NameCard key={suggestedname} suggestedname={suggestedname} />
        );
    })
    return (
        <div className="resultscontainer">
            {/* <p>{suggestednames.length > 0 ? suggestednames[0] : null}  </p> */}
            {/* <p>{suggestednames.length > 0 && suggestednames[0]}</p> */}
            {suggestedNameJSX}

        </div>
    );
};

export default ResultsContainer;