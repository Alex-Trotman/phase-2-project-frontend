function CartItem({ name, price, image, rating, id }){

    function handleRemoveFromCart(){
        
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
      <button onClick={null}>Remove from cart</button>
    </div>
    )
}

export default CartItem;