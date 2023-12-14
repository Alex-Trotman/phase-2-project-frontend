import "./App.css";
import { Routes, Route, Outlet} from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

export default function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reviews" element={<Review />} />
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet />
      <Footer />
    </div>
  );
}
