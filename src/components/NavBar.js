import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";

/* define the NavBar component */
function NavBar({ setSearchQuery, searchQuery }) {
  return (
    <nav className="navbar-wrapper">
      <NavLink to="/" className="nav-link">
        <img
          className="header-logo"
          src="./Amazon_logo.svg.webp"
          alt="Amazon logo"
        ></img>
      </NavLink>
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
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
  );
}

export default NavBar;
