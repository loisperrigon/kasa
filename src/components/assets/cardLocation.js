// cardsLocation.js
import React from 'react';

import { Link } from 'react-router-dom'; // Importez le composant Link

import "./cardLocation.scss";


const CardLocation = ({ title, srcImg, id }) => {
    return (

        <div className='cardLocation'>
            <Link to={`/location/${id}`}>
                <div>
                    <img src={srcImg}></img>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    );
};

export default CardLocation;
