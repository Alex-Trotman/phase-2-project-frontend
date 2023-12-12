import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  function updateCart(buttonValue) {
    console.log(buttonValue);
    if (buttonValue === "Add to cart") {
      setItemsInCart(itemsInCart + 1);
    } else if (buttonValue === "Remove from cart") {
      setItemsInCart(itemsInCart - 1);
    }
  }

  console.log("SearchQuery", searchQuery);
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
      {/* <NavBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} /> */}
      <div className="products-gallery">
        {filteredProducts.map((product) => {
          return (
            <Product
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              prime={product.prime}
              rating={product.rating}
              id={product.id}
              isAddedToCart={product.isAddedToCart}
              updateCart={updateCart}
            />
          );
        })}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
