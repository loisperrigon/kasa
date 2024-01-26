// aPropos.js
import React from "react";

import Footer from "../module/footer/footer.js";
import Header from "../module/header/header.js";

import CardDescription from "../module/cardDescription/cardDescription";
import CardTitle from "../module/cardTitle/cardTitle";
import "./aPropos.scss";

import backgroundCard from "../../assets/cardTitleAPropos.png";

const APropos = () => {
  const textFiabilite =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const textRespect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const textService =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const textSecurite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <>
      <Header />
      <section className="aPropos">
        <CardTitle backgroundCard={backgroundCard} />
        <div className="descriptions">
          <CardDescription title={"Fiabilité"} texts={textFiabilite} />
          <CardDescription title={"Respect"} texts={textRespect} />
          <CardDescription title={"Service"} texts={textService} />
          <CardDescription title={"Sécurité"} texts={textSecurite} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default APropos;
