// Accueil.js
import React from 'react';

import "./accueil.scss";
import CardTitle from '../assets/cardTitle';
import CardLocation from '../assets/cardLocation';

import backgroundCard from '../../assets/cardTitleAccueil.png';
import locationsData from '../../assets/annonces.json';

const Accueil = () => {
  const titleText = 'Chez vous, partout et ailleurs';

  return (
    <section className="accueil">
      <CardTitle backgroundCard={backgroundCard} title={titleText} />
      <div className='locations'>
        {locationsData.map(location => (
          <CardLocation
            srcImg={location.cover}
            title={location.title}
            id={location.id}
            key={location.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Accueil;
