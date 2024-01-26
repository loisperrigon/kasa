// Accueil.js
import React from "react";

import Footer from "../module/footer/footer.js";
import Header from "../module/header/header.js";

import CardLocation from "../module/cardLocation/cardLocation";
import CardTitle from "../module/cardTitle/cardTitle";
import "./accueil.scss";

import locationsData from "../../assets/annonces.json";
import backgroundCard from "../../assets/cardTitleAccueil.png";

const Accueil = () => {
  const titleText = "Chez vous, partout et ailleurs";

  return (
    <>
      <Header />
      <section className="accueil">
        <CardTitle backgroundCard={backgroundCard} title={titleText} />
        <div className="locations">
          {locationsData.map((location) => (
            <CardLocation
              srcImg={location.cover}
              title={location.title}
              id={location.id}
              key={location.id}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accueil;
