import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box } from "zmp-ui";
import '../css/store.scss'
import { Link } from "react-router-dom";

const Store = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const apiStore = async () => {
            try {
                const pageNumber = 1;
                const pageSize = 100;
                const respone = await axios.get(`https://onlinemarket-api.nguyenminhhai.us/api/v1/store?page_number=${pageNumber}&page_size=${pageSize}`);
                setStores(respone.data.data)
                // console.log("Response:", respone.data.data);

            } catch (error) {
                console.error("Error fetching stores:", error);
            }
        }
        apiStore();
    }, []);

    return (
        <div className="store">
            <Box className="store-box">
                <div className="text">
                    <h1>Danh sách cửa hàng</h1>
                </div>
                <div className="store-list">
                    {Array.isArray(stores) ? (
                        stores.map(store => (
                            <div className="store-info">
                                <Link to={`/listproductstore/${store.StoreId}` }  key={store.StoreId}>
                                    <img className="store-logo" src={store.Image} alt={store.StoreName} />
                                    <p>{store.StoreName}</p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Không có cửa hàng nào có sẵn!</p>
                    )}
                </div>
            </Box>
        </div>

    );

}


export default Store;