function ReviewForm({ formData, handleChange, handleSubmit }) {
  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label>Select product:</label>
      <select name="product" value={formData.product} onChange={handleChange}>
        <option>Select product</option>
        <option>Google Pixel 7a</option>
        <option>HP Victus 15 Gaming Laptop</option>
        <option>Raspberry Pi 4 Computer Model B 8GBs</option>
        <option>Sovol SV01 Pro 3D Printer</option>
        <option>eSUN PLA+ Filament 1.75mm</option>
        <option>!False - Programmer Coding Code Coder Software T-Shirt</option>
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
  );
}

export default ReviewForm;
