import React from 'react';
import "../css/search.css";
import { Button, useNavigate } from 'zmp-ui';


const SearchBar = () => {

  const navigate = useNavigate();
 

  return (
    <div className="search-bar">
      {/* <input type="text" placeholder="Search..." onChange={handleSearch} /> */}
      <input type="text" placeholder="Search..." onClick={() => {navigate("/searchPage")}} />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
