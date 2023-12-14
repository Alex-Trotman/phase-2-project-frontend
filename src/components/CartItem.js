// CartItem.js

import React from "react";
import "./CartItem.css";

function CartItem({
  name,
  price,
  image,
  rating,
  id,
  handleRemoveFromCart,
  setCartCount,
  cartCount,
}) {
  return (
    <div className="cart-item">
      <div className="product-container">
        <div className="product-info">
          <p>{name}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">Rating: {rating}</div>
        </div>
        <img src={image} alt={name} className="cart-item-image" />
      </div>
      <button
        className="remove-from-cart-button"
        onClick={() => {
          handleRemoveFromCart(id);
          setCartCount(cartCount - 1);
        }}
      >
        Remove from cart
      </button>
    </div>
  );
}

export default CartItem;
