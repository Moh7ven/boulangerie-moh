import React from "react";
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import TextAttract from "../components/TextAttract";
import CardPres from "../components/CardPres";

const Acceuil = () => {
  return (
    <div>
      <Navigation />
      <Presentation />
      <TextAttract />
      <CardPres />
    </div>
  );
};

export default Acceuil;
