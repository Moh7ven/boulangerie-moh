import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { gsap } from "gsap";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.staggerTo(
      ".logo span",
      0.7,
      {
        x: "-40",
        ease: "power2.inOut",
      },
      0.08
    );
  }, []);

  return (
    <div className="navigation">
      <div className="navContainer">
        <div className="logo">
          <span>Boulangerie MOH</span>
        </div>
        <ul className={nav ? ["menu"] : ["menu", "active"].join(" ")}>
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
        <div onClick={() => setNav(!nav)} className="mobileBtn">
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
