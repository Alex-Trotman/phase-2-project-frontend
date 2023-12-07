import NavBar from "../components/NavBar";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("INSIDE CART.js", data);

        const cartItems = data.filter((item) => item.isAddedToCart === true);
        setProducts(cartItems);
      });
  }, []);

  const updatedTotal = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

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

  function handleOrder() {
    console.log("ORDERED!!!!");
  }

  return (
    <div>
      <NavBar />
      <div>
        <h1>{itemsInCartToString()}</h1>
        <div>
          {products.map((product) => {
            return (
              <CartItem
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
      <div>
        <button onClick={handleOrder}>Order</button>
        <p>Total: ${updatedTotal}</p>
      </div>
    </div>
  );
}

export default Cart;
