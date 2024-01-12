import React from "react";
import BlurredSphere from "./BlurredSphere";

const Presentation = () => {
  return (
    <div>
      <BlurredSphere />
      <div className="presentation">
        <div className="welcomeText">
          <p>Bienvenue chez</p>
          <p className="bakeryName">Boulangerie MOH</p>
        </div>
        <span className="accrocheText">
          Le Goût Authentique de la Boulangerie !
        </span>
      </div>
    </div>
  );
};

export default Presentation;
