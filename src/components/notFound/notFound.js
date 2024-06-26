// notFound.js
import React from "react";
import { Link } from "react-router-dom";

import "./notFound.scss";

import Footer from "../module/footer/footer.js";
import Header from "../module/header/header.js";

const NotFound = () => {
  return (
    <>
      <div className="conteneur">
        <Header />
        <section className="notfound">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
