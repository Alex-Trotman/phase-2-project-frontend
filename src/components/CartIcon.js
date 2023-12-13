import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartIcon.css";
import { MyConsumer } from "../MyContext";

function CartIcon() {

  return (
    <MyConsumer>
      {data =>
        <div className="cart-wrapper">
          <ShoppingCartIcon />
          {data.cartCount}
        </div>
      }
    </MyConsumer>
    
  );
}

export default CartIcon;
