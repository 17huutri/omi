import React from 'react';
import "../css/search.css";
const SearchBar = () => {
  const handleSearch = (event) => {
    // Handle search logic here
    console.log('Searching for:', event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
