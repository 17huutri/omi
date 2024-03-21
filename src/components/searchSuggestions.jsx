import React, { useEffect, useState } from 'react';
import { Box } from 'zmp-ui';

import '../css/searchSugges.scss'

const mockSuggestions = [
    {
        "id": "1",
        "name": "Sữa chua",

    },
    {
        "id": "2",
        "name": "Bánh",

    },
    {
        "id": "3",
        "name": "Sữa",

    },
    {
        "id": "4",
        "name": "Nước giặt",

    },
    {
        "id": "5",
        "name": "Cà phê",

    },
    {
        "id": "6",
        "name": "Gạo",

    },
    {
        "id": "7",
        "name": "Tương ớt",

    },
    {
        "id": "8",
        "name": "Milo",

    },
];

const SearchSuggestions = () => {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        setSuggestions(mockSuggestions);
    }, [])
    const handleSearch = (event) => {

        console.log('Searching for:', event.target.value);
    };


    return (
        <Box>
            <div className="search-bar">
                <input type="text" placeholder="Search..." onChange={handleSearch} />
                <button type="submit">Search</button>
            </div>
            <h4>Tìm kiếm phổ biến</h4>

            <div className="container">
                {suggestions.map(sugg => (
                    <div>
                        <div className='item' key={sugg.id}>
                            <p>{sugg.name}</p>

                        </div>
                    </div>

                ))}
            </div>

            <h4>Ưu đãi đặc biệt</h4>
            <img src="https://www.bigc.vn/files/blog-hyper-18-08-2023-14-03-54/clearance-sale-18-08-2023-14-04-22/u-i-c-bi-t-banner-web-bigc.jpg" alt="" />


        </Box>
    );
}

export default SearchSuggestions;
