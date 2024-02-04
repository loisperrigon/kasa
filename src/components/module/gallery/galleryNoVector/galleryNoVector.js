import React from "react";

import "./galleryNoVector.scss";

const Gallery = ({ pictures }) => {
  return <img className="picture" src={pictures} alt="Appartement" />;
};

export default Gallery;
