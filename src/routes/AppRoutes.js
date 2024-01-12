import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "../pages/Acceuil";
import Produits from "../pages/Produits";
import About from "../pages/About";
import NousContacter from "../pages/NousContacter";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<NousContacter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
