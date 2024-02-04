import React, { useState } from "react";

import "./galleryVector.scss";

import vectorLeft from "../../../../assets/vectorLeft.png";
import vectorRight from "../../../../assets/vectorRight.png";

const GalleryVector = ({ pictures }) => {
  const [nbrpicture, setNbrPicture] = useState(0);

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

  return (
    <>
      <img
        className="vectorLeft"
        src={vectorLeft}
        alt="Flèche gauche"
        onClick={() => move(-1)}
      />
      <img
        className="vectorRight"
        src={vectorRight}
        alt="Flèche droite"
        onClick={() => move(1)}
      />
      <p className="nbrPicture">
        {nbrpicture + 1}/{pictures.length}
      </p>
      <img className="picture" src={pictures[nbrpicture]} alt="Galerie" />
    </>
  );
};

export default GalleryVector;
