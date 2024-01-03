import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ReviewComponent from "../components/ReviewComponent";
import ReviewForm from "../components/ReviewForm";
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
      <h1>Write a review</h1>
      <ReviewForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="reviews-wrapper">{reviewComponents}</div>
    </div>
  );
}

export default Review;
