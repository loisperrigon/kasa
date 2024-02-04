// locationDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./locationDetail.scss";

import Footer from "../module/footer/footer.js";
import Header from "../module/header/header.js";

import CardDescription from "../module/cardDescription/cardDescription";
import Gallery from "../module/gallery/gallery.js";

import locationsData from "../../assets/annonces.json"; // Ajoutez l'importation de votre fichier JSON

import etoileGrise from "../../assets/etoileGrise.png";
import etoilePleine from "../../assets/etoilePleine.png";

const LocationDetail = () => {
  function tags(tags) {
    return tags.map((tag) => (
      <div key={tag}>
        <p>{tag}</p>
      </div>
    ));
  }

  function ratting(rating) {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <img
        key={index} // Ajoutez cette ligne pour attribuer une clé unique à chaque img
        src={index < rating ? etoilePleine : etoileGrise}
        alt={
          index < rating
            ? `Étoile pleine ${index + 1}`
            : `Étoile grise ${index + 1}`
        }
      />
    ));

    return stars;
  }

  const { id } = useParams();
  const [locationDetails, setLocationDetails] = useState(undefined);

  useEffect(() => {
    const foundLocation = locationsData.find((location) => location.id === id);
    setLocationDetails(foundLocation);
  }, [id]);

  // Affichez les détails de la location
  return (
    <>
      <Header />
      <section className="locationDetail">
        {locationDetails === undefined ? (
          <p>La location avec l'ID {id} n'existe pas.</p>
        ) : (
          <>
            <Gallery pictures={locationDetails.pictures} />
            <div className="titleLocationTagsRatingNamePicture">
              <div className="titleLocationTags">
                <div className="titleLocation">
                  <h2>{locationDetails.title}</h2>
                  <h3>{locationDetails.location}</h3>
                </div>
                <div className="tags">{tags(locationDetails.tags)}</div>
              </div>
              <div className="ratingNamePicture">
                <div className="namePicture">
                  <h4>{locationDetails.host.name}</h4>
                  <img
                    src={locationDetails.host.picture}
                    alt={locationDetails.host.name}
                  />
                </div>
                <div className="rating">{ratting(locationDetails.rating)}</div>
              </div>
            </div>
            <div className="descriptionEquipements">
              <CardDescription
                title={"Description"}
                texts={locationDetails.description}
              />
              <CardDescription
                title={"Equipements"}
                texts={locationDetails.equipments}
              />
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default LocationDetail;
