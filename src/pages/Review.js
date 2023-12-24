import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ReviewComponent from "../components/ReviewComponent";
import "./Review.css";
import { useEffect, useState } from "react";

function Review() {
  const [formData, setFormData] = useState({
    id: "",
    user: "user1",
    product: "",
    rating: "",
    review: "",
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  function getReviews() {
    const url = `http://localhost:4000/reviews`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Reviews", data);
        setReviews(data);
      })
      .catch((error) => console.error("Error during toggle:", error));
  }

  const reviewComponents = reviews.map((review) => {
    return (
      <ReviewComponent
        key={review.id}
        user={review.user}
        product={review.product}
        rating={review.rating}
        review={review.review}
      />
    );
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
          setFormData({
            id: "",
            user: "user1",
            product: "",
            rating: "",
            review: "",
          });
          // getReviews();
          setReviews([...reviews, data]);
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
    <div className="review-container">
      {/* <NavBar /> */}
      <h1>Write a review</h1>
      <form className="review-form" onSubmit={handleSubmit}>
        <label>Select product:</label>
        <select name="product" value={formData.product} onChange={handleChange}>
          <option>Select product</option>
          <option>Google Pixel 7a</option>
          <option>HP Victus 15 Gaming Laptop</option>
          <option>Raspberry Pi 4 Computer Model B 8GBs</option>
          <option>Sovol SV01 Pro 3D Printer</option>
          <option>eSUN PLA+ Filament 1.75mm</option>
          <option>
            !False - Programmer Coding Code Coder Software T-Shirt
          </option>
        </select>
        <br />
        <label>Overall rating</label>
        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option>Choose rating</option>
          <option>⭐⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐</option>
          <option>⭐</option>
        </select>
        <br />
        <label>Add a written review</label>
        <input
          type="text"
          name="review"
          value={formData.review}
          onChange={handleChange}
        ></input>
        <br />
        <button>Submit</button>
      </form>
      <div className="reviews-wrapper">{reviewComponents}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Review;
