function ReviewComponent({ user, product, rating, review }) {
  return (
    <div className="review-component">
      <h1>{user}</h1>
      <p>Product: {product}</p>
      <p>{rating}</p>
      <p>{review}</p>
    </div>
  );
}

export default ReviewComponent;
