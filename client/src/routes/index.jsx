import React from "react";
import { Routes, Route } from "react-router-dom";
import AddSolutions from "../pages/add-page";
import DetailsPage from "../pages/details-page";
import HomePage from "../pages/home-page";
import WishlistPage from "../pages/wishlist";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/add-solution" element={<AddSolutions />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
};

export default Routing;
