import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button } from "zmp-ui";
import { useParams } from "react-router-dom";

import '../../css/productStore.scss'

const ListProductStore = () => {
    const [products, setProducts] = useState([]);
    const { storeId } = useParams();
    // console.log("id", storeId);
    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }

    useEffect(() => {
        const apiProductsInStore = async () => {
            try {
                const pageNumber = 1;
                const pageSize = 100;
                const response = await axios.get(`https://onlinemarket-api.nguyenminhhai.us/api/v1/products-in-store/${storeId}?page_number=${pageNumber}&page_size=${pageSize}`);
                setProducts(response.data.data)
            } catch (error) {
                console.error("Error fetching products in store:", error);
            }
        }
        apiProductsInStore();
    }, [storeId]);

    return (
        <div className="list-products">
            <Box className="products-box">
                <div className="text">
                    <h1>Danh sách sản phẩm trong cửa hàng</h1>
                </div>

                <div className="products-list">
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map(product => (
                            <div className="card">
                                <div className="product-info" key={product.ProductId}>
                                    <img className="product-image" src={product.Image} alt={product.Name} />
                                    <p>{product.Name}</p>
                                    <p className="price">{formatPrice(product.Price)}</p>
                                </div>
                                <button> <img src="https://cdn-icons-png.freepik.com/512/5163/5163709.png" alt="+" /> </button>

                            </div>
                        ))
                    ) : (
                        <p>Không có sản phẩm nào có sẵn trong cửa hàng này!</p>
                    )}

                </div>
            </Box>
        </div>
    );
};

export default ListProductStore;
