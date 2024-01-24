// notFound.js
import React from 'react';
import { Link } from 'react-router-dom';


import "./notFound.scss"

const NotFound = () => {
  return (
    <section className='notfound'>
      <h1>Erreur 404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
};

export default NotFound;
