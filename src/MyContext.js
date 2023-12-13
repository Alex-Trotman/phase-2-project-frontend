import React, { useState, useEffect } from 'react'

const MyContext = React.createContext()

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

    return ( 
        <MyContext.Provider value={{
            filteredProducts: filteredProducts,
            products: products,
            setProducts: setProducts,
            searchQuery: searchQuery,
            setSearchQuery: setSearchQuery,
            cartCount: cartCount,
            setCartCount: setCartCount

        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }