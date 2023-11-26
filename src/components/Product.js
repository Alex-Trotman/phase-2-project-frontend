import { useState } from "react";
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
  //   const [inCart, setInCart] = useState(false);

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
      .then((data) => console.log("Toggle successful:", data.isAddedToCart))
      .catch((error) => console.error("Error during toggle:", error));
  }

  return (
    <div className="product">
      <div className="product-info">
        <p>{name}</p>
        <img src={image}></img>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">Rating: {rating}</div>
      </div>
      <button onClick={() => handleAddToCart(id)}>
        {isAddedToCart ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
}

export default Product;
