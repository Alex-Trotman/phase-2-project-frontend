import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Cart() {
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <div>
      <NavBar />
      <div>
        <h1>You have X items in your cart</h1>
      </div>
    </div>
  );
}

export default Cart;
