// header.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Utilisez Link de react-router-dom

import "./header.scss";

import logo from '../../assets/logo.png';


const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <div>
        <NavLink to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Acceuil
        </NavLink>
        <NavLink to="/a_propos"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>

          A propos
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
