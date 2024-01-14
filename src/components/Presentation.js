import React from "react";
import BlurredSphere from "./BlurredSphere";

const Presentation = () => {
  return (
    <div>
      <BlurredSphere />
      <div className="presentation">
        <div className="textContainer">
          <div className="welcomeText">
            <p>Bienvenue chez</p>
            <p className="bakeryName">Boulangerie MOH</p>
          </div>
          <p className="accrocheText">
            Le Goût Authentique de la Boulangerie !
          </p>
        </div>
        <img src="../assets/img/Chocolate-Cake.png" alt=""/>
      </div>
    </div>
  );
};

export default Presentation;
