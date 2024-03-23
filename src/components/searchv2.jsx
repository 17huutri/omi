import React, { useState, useEffect } from "react";

const SearchInStore = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Search term for product name

    useEffect(() => {
        fetch("https://onlinemarket-api.nguyenminhhai.us/api/v1/products-in-store?page_size=5&page_number=1")
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    // Function to filter products based on the search term
    const filteredItems = items.filter((item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <ul>
                    {filteredItems.map((item) => (
                        <li key={item.ProductInStoreId}>
                            <div>
                                <img src={item.Image} alt={item.Name} />
                            </div>
                            <div>
                                <h2>{item.Name}</h2>
                                <p>Price: ${item.Price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default SearchInStore;
