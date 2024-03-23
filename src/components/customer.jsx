import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import customerInfoApi from "../api/customerInfor";
//import "../css/product.css"
import { Link } from "react-router-dom";
const CustomerInfo = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await customerInfoApi.getCustomerInfo();
                setCustomers(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
      <div className="uudai">
            <h2 className="text">Thông tin khách hàng</h2>
            <div className="product-container">
                {customers.map(customer => (
                    <Link key={customer.CustomerId} to={`/customer/${customer.CustomerId}`} className="product-link">
                        <div className="prodcustomeruct">
                           
                            <div className="product-details">
                                <h3 className="product-name">{customer.Name}</h3>
                                <h3 className="product-name">{customer.Balance}</h3>
                                
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CustomerInfo;