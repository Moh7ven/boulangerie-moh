import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/produits">
          <li>Produits</li>
        </NavLink>
        <NavLink to="/about">
          <li>À Propos de Nous</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Nous Contacter</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
