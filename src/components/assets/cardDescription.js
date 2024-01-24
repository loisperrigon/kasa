// cardsLocation.js
import React, { useState } from 'react';

import "./cardDescription.scss";

import vectorUp from '../../assets/vectorUp.png';

import vectorDown from '../../assets/vectorDown.png';


const CardDescription = ({ texts, title }) => {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <div className="cardDescription">
            <div className={`titleContainer ${isDescriptionVisible ? 'rounded' : ''}`} onClick={toggleDescription}>
                <p>{title}</p>
                {isDescriptionVisible ? <img src={vectorDown} /> : <img src={vectorUp} />}
            </div>
            {isDescriptionVisible && (
                <ul className={`ulContainer ${isDescriptionVisible ? 'rounded' : ''}`}>
                    {Array.isArray(texts) ? (
                        texts.map((text, index) => <li key={index}>{text}</li>)
                    ) : (
                        <li>{texts}</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default CardDescription;


