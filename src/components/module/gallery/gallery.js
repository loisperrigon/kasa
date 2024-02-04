import React, { useEffect, useState } from "react";

import "./gallery.scss";

import GalleryNoVector from "./galleryNoVector/galleryNoVector";
import GalleryVector from "./galleryVector/galleryVector";

const Gallery = ({ pictures }) => {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  // Préchargement des images pour éviter d'attendre
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

    Promise.all(imagePromises).catch((error) =>
      console.error("Erreur lors du chargement des images :", error)
    );

    // Fonction de nettoyage
    return () => {
      setFirstImageLoaded(false);
    };
  }, [pictures]);

  return (
    <div className="gallery">
      {firstImageLoaded === undefined ? (
        <p>Chargement des images...</p>
      ) : pictures.length > 1 ? (
        <GalleryVector pictures={pictures} />
      ) : (
        <GalleryNoVector pictures={pictures} />
      )}
    </div>
  );
};

export default Gallery;
