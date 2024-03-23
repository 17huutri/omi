import React, { useState, useEffect } from "react";
import { Text, List, Button } from "zmp-ui";
import customerOrderApi from "../api/customerOrderApi";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const CustomerOrder = () => {
    const user = useRecoilValue(userState);
    const customerId = user.data.CustomerId;

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await customerOrderApi.getAllCustomerOrderByCustomer(customerId);
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching customer orders: ", error);
                setLoading(false);
            }
        };

        if (customerId) {
            fetchOrders();
        }
    }, [customerId]);

    const handlePayOrder = async (customerOrderId) => {
        try {
            const confirmation = window.confirm("Bạn có muốn thực hiện thanh toán?");
            if (confirmation) {
                await customerOrderApi.payOrder(customerId, customerOrderId);
                const updatedOrders = orders.filter(order => order.CustomerOrderId !== customerOrderId);
                setOrders(updatedOrders);
                toast.success("Thanh toán thành công!");
            }
        } catch (error) {
            toast.error(`Lỗi: ${error.message}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Text.Title className="text-lg font-bold mb-4">Đơn hàng của khách hàng</Text.Title>
            <List>
                {orders.map(order => (
                    <List.Item key={order.id} className="border rounded-md p-4 mb-4">
                        <div>
                            <Link to={`/order-detail/order/${order.CustomerOrderId}`} className="text-blue-500">Mã đơn hàng: {order.CustomerOrderId}</Link>
                        </div>
                        <div className="mb-2">Tên Tòa Nhận: {order.BuildingName}</div>
                        <div className="mb-2">Thời gian đặt hàng: {order.OrderDate}</div>
                        <div className="mb-2">Phí ship: {order.ShippingPrice} đ</div>
                        <div className="mb-2">Tổng tiền hàng: {order.Total} đ</div>
                        <div className="mb-2">Thành tiền: {parseFloat(order.Total) + parseFloat(order.ShippingPrice)} đ</div>


                        <Button onClick={() => handlePayOrder(order.CustomerOrderId)} className="ml-4">Thanh toán ngay</Button>

                    </List.Item>
                ))}
            </List>
        </div>
    );
};

export default CustomerOrder;
