import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import orderDetailApi from "../api/orderDetailApi";
import { useParams } from "react-router-dom";

const InforOrder = () => {
    const [orderInfos, setOrderInfos] = useState([]);
    const { orderId } = useParams();

    useEffect(() => {
        const fetchOrderInfo = async () => {
            try {
                const response = await orderDetailApi.getAllInforOfOrder(orderId);
                setOrderInfos(response.data.data);
            } catch (error) {
                console.error("Error fetching order information: ", error);
            }
        };

        if (orderId) {
            fetchOrderInfo();
        }
    }, [orderId]);

    if (!Array.isArray(orderInfos) || orderInfos.length === 0) {
        return <div>Đang tải.</div>;
    }

    return (
        <div>
            <Text.Title size="normal">Thông tin đơn hàng</Text.Title>
            {orderInfos.map((orderInfo, index) => (
                <div key={index} className="border rounded-md p-4 mb-4">
                    <div className="font-bold">Mã chi tiết đơn hàng: {orderInfo.OrderDetailId}</div>
                    <div>Tên khách hàng: {orderInfo.Customer_Name}</div>
                    <div>Tên sản phẩm: {orderInfo.Product_Name}</div>
                    <div>Giảm giá: {orderInfo.Discount}%</div>
                    <div>Số lượng: {orderInfo.ProductQuantity}</div>
                    <div>Giá: {orderInfo.Price}%</div>
                    <div>Thành tiền: {orderInfo.Total}</div>
                </div>
            ))}
        </div>
    );
};

export default InforOrder;
