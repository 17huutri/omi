// import React, { useState, useEffect } from "react";
// import { Text } from "zmp-ui";
// import productInStoreApi from "./../api/productInStoreApi";
// import "../css/product.css"
// import { Link } from "react-router-dom";
// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await productInStoreApi.getProductInStore();
//                 setProducts(response.data.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }


//     return (
//       <div className="uudai">
//             <h2 className="text">Ưu đãi đơn hàng</h2>
//             <div className="product-container">
//                 {products.map(product => (
//                     <Link key={product.ProductInStoreId} to={`/product/${product.ProductInStoreId}`} className="product-link">
//                         <div className="product">
//                             <div className="product-image">
//                                 <img src={product.Image} alt={product.name} />               
//                             </div>

//                             <div className="product-details">
//                                 <h3 className="product-name">{product.Name}</h3>
//                                 <p className="product-price">Price: ${product.Price}</p>
//                                 <i className="fa fa-plus-circle" aria-hidden="true"></i>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Product;


import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import productInStoreApi from "./../api/productInStoreApi";
import "../css/product.css"
import { Link } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search query

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productInStoreApi.getProductInStore();
                setProducts(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Function to filter products based on the search query
    const filteredProducts = products.filter(product =>
        product.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Event handler for updating the search term state
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="uudai">
            <h2 className="text">Ưu đãi đơn hàng</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="product-container">
                {filteredProducts.map(product => (
                    <Link key={product.ProductInStoreId} to={`/product/${product.ProductInStoreId}`} className="product-link">
                        <div className="product">
                            <div className="product-image">
                                <img src={product.Image} alt={product.name} />               
                            </div>
                            <div className="product-details">
                                <h3 className="product-name">{product.Name}</h3>
                                <p className="product-price">Price: ${product.Price}</p>
                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Product;
