import { useNavigate } from "react-router-dom";

function OrderedItem({ name, price, image, rating, id }) {
  const navigate = useNavigate();

  function handleClick() {
    const url = `http://localhost:4000/products/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((product) => {
        // Toggle the isAddedToCart value
        const updatedIsPurchasedValue = !product.purchased;

        // Send a PATCH request to update the value
        return fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            purchased: updatedIsPurchasedValue,
          }),
        });
      })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => console.error("Error during toggle:", error));

    navigate("/reviews");
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
      <button onClick={handleClick}>Return Item</button>
    </div>
  );
}

export default OrderedItem;
