import React from 'react';

const DetailsComponent = ({ title, expirationDate, highlights, termsAndConditions }) => {
    return (
        <div className="details">
            <h2>{title}</h2>
            <p>Available until {expirationDate}</p>

            <h3>Highlights</h3>
            <p>{highlights}</p>

            <h3>Terms & Conditions</h3>
            <ul>
                {termsAndConditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                ))}
            </ul>
        </div>
    );
}

export default DetailsComponent;
