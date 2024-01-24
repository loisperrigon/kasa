// gallery.js
import React, { useState } from 'react';

import "./gallery.scss";

import vectorLeft from '../../assets/vectorLeft.png';
import vectorRight from '../../assets/vectorRight.png';

const Gallery = ({ pictures }) => {


    const [nbrpicture, setNbrPicture] = useState(0);

    const move = (direction) => {
        const totalPictures = pictures.length;

        // Calculer la nouvelle position de l'image
        let newPosition = nbrpicture + direction;

        // Faire boucler la position si elle dépasse les limites
        if (newPosition < 0) {
            newPosition = totalPictures - 1; // Aller à la dernière image si on dépasse à gauche
        } else if (newPosition >= totalPictures) {
            newPosition = 0; // Revenir à la première image si on dépasse à droite
        }

        // Mettre à jour l'état avec la nouvelle position
        setNbrPicture(newPosition);
    };


    return (
        <div className='gallery'>
            {pictures.length > 1 && (
                <img className="vectorLeft" src={vectorLeft} alt="Left Arrow" onClick={() => move(-1)} />
            )}
            <img className="picture" src={pictures[nbrpicture]} alt="Gallery" />
            {pictures.length > 1 && (
                <img className="vectorRight" src={vectorRight} alt="Right Arrow" onClick={() => move(1)} />
            )}
        </div>
    );
};

export default Gallery;
