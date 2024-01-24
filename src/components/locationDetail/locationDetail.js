// locationDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./locationDetail.scss"

import Gallery from '../../components/assets/gallery';
import CardDescription from '../../components/assets/cardDescription';

import locationsData from '../../assets/annonces.json'; // Ajoutez l'importation de votre fichier JSON

import etoileGrise from '../../assets/etoileGrise.png';
import etoilePleine from '../../assets/etoilePleine.png';

const LocationDetail = () => {

    function tags(tags) {
        return tags.map((tag, index) => (
            <div key={index}><p>{tag}</p></div>
        ));
    }


    function ratting(rating) {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <img
                src={index < rating ? etoilePleine : etoileGrise}
                alt={index < rating ? `Étoile pleine ${index + 1}` : `Étoile grise ${index + 1}`}
            />
        ));

        return stars;
    }



    const { id } = useParams();
    const [locationDetails, setLocationDetails] = useState(null);



    useEffect(() => {
        const foundLocation = locationsData.find(location => location.id === id);
        setLocationDetails(foundLocation);
    }, [id]);

    // Si les détails du logement n'ont pas encore été trouvés, affichez un message de chargement
    if (locationDetails === null) {
        return <p>Chargement en cours...</p>;
    }

    // Si la location n'existe pas, affichez un message approprié
    if (!locationDetails) {
        return <p>La location avec l'ID {id} n'existe pas.</p>;
    }

    // Affichez les détails de la location
    return (
        <section className='locationDetail'>
            <Gallery pictures={locationDetails.pictures} />
            <div className='titleLocationNamePicture'>
                <div className='titleLocation'>
                    <h2>{locationDetails.title}</h2>
                    <h3>{locationDetails.location}</h3>
                </div>
                <div className='namePicture'>
                    <h4>{locationDetails.host.name}</h4>
                    <img src={locationDetails.host.picture} />
                </div>
            </div>
            <div className='tagsRating'>
                <div className='tags'>
                    {tags(locationDetails.tags)}
                </div>
                <div className='rating'>
                    {ratting(locationDetails.rating)}
                </div>
            </div>
            <div className='descriptionEquipements'>
                <CardDescription title={"Description"} texts={locationDetails.description} />
                <CardDescription title={"Equipements"} texts={locationDetails.equipments} />
            </div>
        </section>
    );
};

export default LocationDetail;
