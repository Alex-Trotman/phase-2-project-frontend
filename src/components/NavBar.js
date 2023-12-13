import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { MyConsumer } from "../MyContext";
/* define the NavBar component */
function NavBar() {
  return (
    <MyConsumer>
      {data =>
        <nav className="navbar-wrapper">
          <NavLink to="/" className="nav-link">
            <img
              className="header-logo"
              src="./Amazon_logo.svg.webp"
              alt="Amazon logo"
            ></img>
          </NavLink>
          <SearchBar searchQuery={data.searchQuery} setSearchQuery={data.setSearchQuery}/>
          <NavLink to="/reviews" className="nav-link">
            Write a review
          </NavLink>
          <NavLink to="/orders" className="nav-link">
            Returns & Orders
          </NavLink>

          <NavLink to="/cart" className="nav-link">
            <CartIcon />
          </NavLink>
        </nav>
      }
    </MyConsumer>
    
  );
}

export default NavBar;
