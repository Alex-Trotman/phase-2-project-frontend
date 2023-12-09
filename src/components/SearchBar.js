import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ setSearchQuery, searchQuery }) {
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Navigate to Home.js before conducting the search
    navigate("/home");

    // Optionally, you can pass the search query as a URL parameter
    setSearchQuery(searchQuery);
  };

  const handleInputClick = () => {
    // Navigate to Home.js when the input is clicked
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        onChange={handleInputChange}
        onClick={handleInputClick}
      />
      <button className="search-icon" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
