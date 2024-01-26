// notFound.js
import React from "react";
import { Link } from "react-router-dom";

import "./notFound.scss";

import Footer from "../../components/footer/footer.js";
import Header from "../../components/header/header.js";

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="notfound">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
