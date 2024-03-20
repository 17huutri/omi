import React from 'react';
import "../css/search.css";
const SearchBar = () => {
  const handleSearch = (event) => {
    // Handle search logic here
    console.log('Searching for:', event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Tìm kiếm sản phẩm..." onChange={handleSearch} />
      <button type="submit">Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;
