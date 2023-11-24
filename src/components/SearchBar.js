import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="form">
      <input className="search-input" type="text"></input>
      <button className="search-icon" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
