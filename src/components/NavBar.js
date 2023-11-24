import { NavLink } from "react-router-dom";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        <img src="./favicon.ico"></img>
      </NavLink>
      <div>Search Bar</div>
      <NavLink to="/orders" className="nav-link">
        Returns & Orders
      </NavLink>
      <NavLink to="/cart" className="nav-link">
        Cart
      </NavLink>
    </nav>
  );
}

export default NavBar;
