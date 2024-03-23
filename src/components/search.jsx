import React from 'react';
import "../css/search.css";
import { Button, useNavigate } from 'zmp-ui';


const SearchBar = () => {

  const navigate = useNavigate();


  return (
    <div className="search-bar">
      <input type="text" placeholder="Tìm kiếm sản phẩm..." onClick={() => { navigate("/searchPage") }} />
      <button type="submit">Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;
