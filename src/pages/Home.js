import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Product from "../components/Product";

function Home() {
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);

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

  return (
    <div>
      <NavBar itemsInCart={itemsInCart} />
      <div className="products-gallery">
        {products.map((product) => {
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
    </div>
  );
}

export default Home;
