import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navContainer">
        <div className="logo">
          <span>Boulangerie MOH</span>
        </div>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/produits"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Produits</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>À Propos de Nous</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Nous Contacter</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
