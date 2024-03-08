import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box } from "zmp-ui";
import '../css/store.scss'

const Store = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const apiStore = async () => {
            try {
                const respone = await axios.get(`https://onlinemarket-api.nguyenminhhai.us/api/v1/store`);
                setStores(respone.data)
            } catch (error) {
                console.error("Error fetching stores:", error);
            }
        }
        apiStore();
    }, []);

    return (
        <div className="store">
            <Box className="store-box">
                <h1>Danh sách cửa hàng</h1>
                <div className="store-list">
                    {stores.map(store => (
                        <div className="store-info" key={store.StoreId}>
                            <img className="store-logo" src={store.Image} alt={store.StoreName} />
                            <p>{store.StoreName}</p>
                        </div>
                    ))}
                </div>
            </Box>
        </div>

    );

}


export default Store;