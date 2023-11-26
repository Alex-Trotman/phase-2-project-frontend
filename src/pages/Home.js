import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Product from "../components/Product";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
