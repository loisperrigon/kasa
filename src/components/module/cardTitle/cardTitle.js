// cardTitle.js
import React from "react";

import "./cardTitle.scss";

const CardTiltle = ({ backgroundCard, title = "" }) => {
  return (
    <div className="cardTitle">
      <img src={backgroundCard} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};

export default CardTiltle;
