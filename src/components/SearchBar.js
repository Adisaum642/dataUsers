import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ handleSearch }) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search by employee name"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
