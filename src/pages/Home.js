// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import "./Home.css";
import { MyConsumer } from "../MyContext";

function Home() {
  // const [products, setProducts] = useState([]);
  // const [itemsInCart, setItemsInCart] = useState(0);
  // const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:4000/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  // function updateCart(buttonValue) {
  //   console.log(buttonValue);
  //   if (buttonValue === "Add to cart") {
  //     setItemsInCart(itemsInCart + 1);
  //   } else if (buttonValue === "Remove from cart") {
  //     setItemsInCart(itemsInCart - 1);
  //   }
  // }

  return (
    <MyConsumer>
      {(data) => (
        <div>
          <div className="products-gallery">
            {data.filteredProducts.map((product) => {
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
                  cartCount={data.cartCount}
                  setCartCount={data.setCartCount}
                />
              );
            })}
          </div>
        </div>
      )}
    </MyConsumer>
  );
}

export default Home;
