import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Cart() {
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

  function itemsInCartToString() {
    if (itemsInCart === 1) {
      return `You have ${itemsInCart} item in cart`;
    } else if (itemsInCart > 1) {
      return `You have ${itemsInCart} items in cart`;
    } else if (itemsInCart === 0) {
      return "Cart is empty";
    }
  }

  return (
    <div>
      <NavBar />
      <div>
        <h1>{itemsInCartToString()}</h1>
      </div>
    </div>
  );
}

export default Cart;
