import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartIcon.css";

function CartIcon() {
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const cartCount = data.reduce(
          (count, product) => (product.isAddedToCart ? count + 1 : count),
          0
        );
        setItemsInCart(cartCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="cart-wrapper">
      <ShoppingCartIcon />
      <span className="basket-count">{itemsInCart}</span>
    </div>
  );
}

export default CartIcon;
