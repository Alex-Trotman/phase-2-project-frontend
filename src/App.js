import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reviews" element={<Review />} />
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");

  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) => {
    // Ensure product and product.name are defined before accessing toLowerCase
    return (
      product &&
      product.name &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <NavBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Outlet />
      <Footer />
    </div>
  );
}
