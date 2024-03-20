import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import productInStoreApi from "./../api/productInStoreApi";
import "../css/product.css"
import { Link } from "react-router-dom";

const SearchProduct = () => {
    const [value, setValue] = useState();
    const [data, setData] = useState([]);
    const onChange = async (e) => {
        setValue(e.target.value)
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json()
        setData(data)


    }

    return (
        <div className="App">
            <div className="search">
                <div>
                    <input type="text" onChange={onChange} value={value}/>
                    <button>search</button>
                </div>
                <div className="dropdown-content">
                    {
                        data.filter(item => item.title.startsWith(value) && item.title !== value)
                        .slice(0, 5)
                        .map(item => <div key={item.id} onClick={(e) => setValue(item.title)}>
                            {item.title} <hr/>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )

}

export default SearchProduct;