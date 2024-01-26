import React, { useState, useEffect } from 'react';

import "./gallery.scss";

import vectorLeft from '../../../assets/vectorLeft.png';
import vectorRight from '../../../assets/vectorRight.png';

const Gallery = ({ pictures }) => {
    const [firstImageLoaded, setFirstImageLoaded] = useState(false);
    const [nbrpicture, setNbrPicture] = useState(0);

    // Prechargement des images pour eviter d'attendre
    useEffect(() => {
        const firstImage = new Image();
        firstImage.onload = () => setFirstImageLoaded(true);
        firstImage.src = pictures[0];

        const imagePromises = pictures.slice(1).map((picture) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = (error) => reject(error);
                img.src = picture;
            });
        });

        Promise.all(imagePromises)
            .catch((error) => console.error("Error loading images:", error));

        // Cleanup function
        return () => {
            setFirstImageLoaded(false);
        };
    }, [pictures]);

    const move = (direction) => {
        const totalPictures = pictures.length;

        let newPosition = nbrpicture + direction;

        if (newPosition < 0) {
            newPosition = totalPictures - 1;
        } else if (newPosition >= totalPictures) {
            newPosition = 0;
        }

        setNbrPicture(newPosition);
    };

    if (!firstImageLoaded) {
        return <p>Loading images...</p>;
    }

    return (
        <div className='gallery'>
            {pictures.length > 1 && (
                <img className="vectorLeft" src={vectorLeft} alt="Left Arrow" onClick={() => move(-1)} />
            )}
            <img className="picture" src={pictures[nbrpicture]} alt="Gallery" />
            {pictures.length > 1 && (
                <p className='nbrPicture'>{nbrpicture + 1}/{pictures.length}</p>
            )}
            {pictures.length > 1 && (
                <img className="vectorRight" src={vectorRight} alt="Right Arrow" onClick={() => move(1)} />
            )}
        </div>
    );
};

export default Gallery;
