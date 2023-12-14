import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

const MyProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    getCartCount();
  }, []);

  function getCartCount() {
    fetch("http://localhost:4000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const total = data.reduce(
          (count, product) => (product.isAddedToCart ? count + 1 : count),
          0
        );
        setCartCount(total);
        console.log(total);
        console.log("Line 44:", cartCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <MyContext.Provider
      value={{
        filteredProducts: filteredProducts,
        products: products,
        setProducts: setProducts,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        cartCount: cartCount,
        setCartCount: setCartCount,
        getCartCount: getCartCount,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
