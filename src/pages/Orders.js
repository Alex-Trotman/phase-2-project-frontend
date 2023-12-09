import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OrderedItem from "../components/OrderedItem";
import "./Orders.css";
import React, { useState, useEffect } from "react";
function Orders() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(items);

  const purchasedProducts = items.filter((item) => item.purchased === true);

  console.log("Purchased products:", purchasedProducts);
  return (
    <div className="orders-container">
      <NavBar />
      <h1 className="orders-header">My Orders</h1>
      <ul className="ordered-item-list">
        {purchasedProducts.map((product) => (
          <OrderedItem
            key={product.name}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
            prime={product.prime}
            rating={product.rating}
            id={product.id}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );

  // <li key={product.id}>{product.name}</li>;
}

export default Orders;
