import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartIcon.css";

function CartIcon() {
  return (
    <div className="cart-wrapper">
      <ShoppingCartIcon />
      <span className="basket-count">0</span>
    </div>
  );
}

export default CartIcon;
