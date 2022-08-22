import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import LandingPage from "../LandingPage/LandingPage";
import Cart from "../Cart/Cart";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/" element={<LandingPage />} />

        {/* <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/products/:productid/details" element={<ProductDetail />} /> */}
        <Route exact path="/cart" element={<Cart />} />
        {/* <Route exact path="/checkout" element={<Checkout/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;