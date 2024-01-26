// footer.js
import React from "react";

import "./footer.scss";

import logo from "../../../assets/logoWhite.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <br></br>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
