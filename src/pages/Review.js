import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Review() {
  const [formData, setFormData] = useState({
    id: "",
    product: "",
    rating: "",
    review: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.product && formData.rating && formData.review) {
      alert("Thank you!");

      fetch("http://localhost:4000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Handle the response data
          console.log("Response data:", data);
        })
        .catch((error) => {
          // Log the entire response object
          console.error("Error:", error);
          console.log("Response object:", error.response);
        });
    } else alert("Please fill out all fields");

    console.log(formData);
  }

  return (
    <div>
      <NavBar />
      <h1>You're item has been returned, please leave a review</h1>
      <form onSubmit={handleSubmit}>
        <label>Select Item:</label>
        <select name="product" value={formData.product} onChange={handleChange}>
          <option>Select product</option>
          <option>Smartphone</option>
          <option>Laptop</option>
          <option>Headphones</option>
        </select>
        <br />
        <label>Rating:</label>
        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option>Choose rating</option>
          <option>⭐⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐</option>
          <option>⭐</option>
        </select>
        <br />
        <label>Type a review:</label>
        <input
          type="text"
          name="review"
          value={formData.review}
          onChange={handleChange}
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Review;
