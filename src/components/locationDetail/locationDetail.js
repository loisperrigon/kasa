// locationDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./locationDetail.scss";

import Footer from "../module/footer/footer.js";
import Header from "../module/header/header.js";

import CardDescription from "../module/cardDescription/cardDescription";
import Gallery from "../module/gallery/gallery.js";

import Notfound from "../notFound/notFound.js";

import locationsData from "../../assets/annonces.json"; // Ajoutez l'importation de votre fichier JSON

import etoileGrise from "../../assets/etoileGrise.png";
import etoilePleine from "../../assets/etoilePleine.png";
import Tags from "../tags/tags.js";

const LocationDetail = () => {
  function ratting(rating) {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
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

  const { id } = useParams(); //On recupere l'id depuis le lien
  const [locationDetails, setLocationDetails] = useState(undefined);

  useEffect(() => {
    const foundLocation = locationsData.find((location) => location.id === id);
    setLocationDetails(foundLocation);
  }, [id]);

  return (
    <>
      {locationDetails === undefined ? (
        <Notfound />
      ) : (
        <>
          {/* Render location details */}
          <div className="conteneur">
            <Header />
            <section className="locationDetail">
              {/* Gallery component */}
              <Gallery pictures={locationDetails.pictures} />

              {/* Title, location, tags, host information, rating, description, and equipments */}
              <div className="titleLocationTagsRatingNamePicture">
                <div className="titleLocationTags">
                  <div className="titleLocation">
                    <h2>{locationDetails.title}</h2>
                    <h3>{locationDetails.location}</h3>
                  </div>
                  <Tags tags={locationDetails.tags} />
                </div>
                <div className="ratingNamePicture">
                  <div className="namePicture">
                    <h4>{locationDetails.host.name}</h4>
                    <img
                      src={locationDetails.host.picture}
                      alt={locationDetails.host.name}
                    />
                  </div>
                  <div className="rating">
                    {ratting(locationDetails.rating)}
                  </div>
                </div>
              </div>
              <div className="descriptionEquipements">
                {/* CardDescription components */}
                <CardDescription
                  title={"Description"}
                  texts={locationDetails.description}
                />
                <CardDescription
                  title={"Equipements"}
                  texts={locationDetails.equipments}
                />
              </div>
            </section>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default LocationDetail;
