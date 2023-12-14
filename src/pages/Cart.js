import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import "./Cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyConsumer } from "../MyContext";

function Cart() {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  function getInCartItems() {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("INSIDE CART.js", data);

        const cartItems = data.filter((item) => item.isAddedToCart === true);
        setProducts(cartItems);
      });
  }

  useEffect(() => {
    getInCartItems();
  }, []);

  const updatedTotal = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  function getCountOnInCartItems() {
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
  }

  useEffect(() => {
    getCountOnInCartItems();
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
    console.log("INSIDE handleOrder:", products);

    if (products.length === 0) {
      alert("Cart is empty, please add items to place an order.");
      return;
    }

    const newOrder = {
      id: "",
      products: [],
      total: updatedTotal,
    };

    const updatePromises = products.map((product) => {
      const url = `http://localhost:4000/products/${product.id}`;

      newOrder.products.push({
        name: product.name,
        productId: product.id,
        quantity: "example",
        price: product.price,
      });

      return fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          purchased: true,
          isAddedToCart: false,
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error during toggle:", error));
    });

    Promise.all(updatePromises)
      .then(() => {
        console.log("newOrder:", newOrder);
        getInCartItems();
        getCountOnInCartItems();
        alert("Order placed"); // Add this line to show the alert
        navigate("/orders"); // Use navigate to go to the orders page
      })
      .catch((error) => console.error("Error during order update:", error));
  }

  function handleRemoveFromCart(id) {
    const url = `http://localhost:4000/products/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((product) => {
        return fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isAddedToCart: false,
          }),
        });
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Cart.js - Line 83:", data.isAddedToCart);
        getInCartItems();
        getCountOnInCartItems();
      })
      .catch((error) => console.error("Error during toggle:", error));
  }

  return (
    <MyConsumer>
      {(data) => (
        <div className="cart-container">
          <div>
            <h1 className="cart-header">{itemsInCartToString()}</h1>
            <div className="cart-items">
              {products.map((product) => (
                <div key={product.id}>
                  <CartItem
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    prime={product.prime}
                    rating={product.rating}
                    id={product.id}
                    isAddedToCart={product.isAddedToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    setCartCount={data.setCartCount}
                    cartCount={data.cartCount}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="cart-actions">
            <button
              onClick={() => {
                handleOrder();
                data.setCartCount(0);
              }}
            >
              Order
            </button>
            <p className="cart-total">Total: ${updatedTotal}</p>
          </div>
          {/* <Footer /> */}
        </div>
      )}
    </MyConsumer>
  );
}

export default Cart;
