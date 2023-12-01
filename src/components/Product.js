import { useState, useEffect } from "react";
import "./Product.css";

function Product({
  name,
  id,
  isAddedToCart,
  price,
  description,
  prime,
  image,
  rating,
}) {
  const [buttonValue, setButtonValue] = useState("Add to cart");

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("GET:", data.isAddedToCart);
        let cartValue = data.isAddedToCart;

        if (cartValue === true) {
          setButtonValue("Remove from cart");
        } else if (cartValue === false) {
          setButtonValue("Add to cart");
        }
      });
  });

  function handleAddToCart(productId) {
    console.log(productId);
    const url = `http://localhost:4000/products/${productId}`;

    fetch(url)
      .then((response) => response.json())
      .then((product) => {
        // Toggle the isAddedToCart value
        const updatedIsAddedToCartValue = !product.isAddedToCart;

        // Send a PATCH request to update the value
        return fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isAddedToCart: updatedIsAddedToCartValue,
          }),
        });
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Toggle successful:", data.isAddedToCart);
        setButtonValue(
          buttonValue === "Remove from cart"
            ? "Add to cart"
            : "Remove from cart"
        );
      })
      .catch((error) => console.error("Error during toggle:", error));
  }

  return (
    <div className="product">
      <div className="product-info">
        <p>{name}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">Rating: {rating}</div>
      </div>
      <img src={image}></img>
      <button onClick={() => handleAddToCart(id)}>{buttonValue}</button>
    </div>
  );
}

export default Product;
