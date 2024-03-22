import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import orderDetailApi from "../../api/orderDetailApi";
import orderApi from "../../api/orderApi";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const Cart = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [customerId, setCustomerId] = useState(31);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await orderDetailApi.getAllOrderDetailsByCustomer(customerId);
                setOrderDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching order details: ", error);
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [customerId]);

    const handleDeleteOrderDetail = async (orderDetailId) => {
        try {
            await orderDetailApi.deleteOrderDetail(orderDetailId);
            setOrderDetails(orderDetails.filter(detail => detail.OrderDetailId !== orderDetailId));
        } catch (error) {
            console.error("Error deleting order detail: ", error);
        }
    };

    const handleIncreaseOrDecrease = async (orderDetail, action) => {
        try {
            const updatedOrderDetails = [...orderDetails];
            const index = updatedOrderDetails.findIndex(detail => detail.OrderDetailId === orderDetail.OrderDetailId);

            if (index !== -1) {
                if (action === "increase") {
                    updatedOrderDetails[index].ProductQuantity++;
                } else if (action === "decrease") {
                    if (updatedOrderDetails[index].ProductQuantity > 1) {
                        updatedOrderDetails[index].ProductQuantity--;
                    } else {
                        await handleDeleteOrderDetail(orderDetail.OrderDetailId);
                        return;
                    }
                }

                setOrderDetails(updatedOrderDetails);

                await orderDetailApi.updateProductQuantity(orderDetail.OrderDetailId, updatedOrderDetails[index].ProductQuantity);
            }
        } catch (error) {
            console.error("Error updating product quantity: ", error);
        }
    };

    const calculateTotalPrice = () => {
        return orderDetails.reduce((total, orderDetail) => {
            const price = orderDetail.Discount ? orderDetail.Price - (orderDetail.Price * orderDetail.Discount / 100) : orderDetail.Price;
            return total + (price * orderDetail.ProductQuantity);
        }, 0);
    };

    const handlePlaceOrder = async () => {
        try {
            const orderDetailIds = orderDetails.map(orderDetail => orderDetail.OrderDetailId);
            const buildingId = 5;
            await orderApi.mergeOrder(orderDetailIds, buildingId);

            console.log("Order placed successfully!");
        } catch (error) {
            console.error("Error placing order: ", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <div className="flex flex-col py-4">
                {orderDetails.length === 0 ? (
                    <div className="flex justify-center mt-4"><span>Bạn chưa thêm sản phẩm vào giỏ hàng!</span>
                        <Link to="/" className="text-blue-500 underline">Tiếp tục mua sắm</Link>
                    </div>
                ) : (
                    orderDetails.map((orderDetail) => (
                        <div key={orderDetail.OrderDetailId} className="flex-shrink-0 mb-4">
                            <div className="w-64 flex flex-col">
                                <div className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton shadow-md" style={{ backgroundImage: `url(${orderDetail.Image})` }}></div>
                                <div className="px-2 py-2 bg-white">
                                    <Text bold size="small">{orderDetail.Product_Name}</Text>
                                    <Text size="large" className="!font-bold text-primary text-green-800">
                                        <Text size="large" className="!font-bold text-primary text-green-800">
                                            {((orderDetail.Discount ? (orderDetail.Price - (orderDetail.Price * orderDetail.Discount / 100)) : orderDetail.Price) * orderDetail.ProductQuantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </Text>
                                    </Text>
                                    <div className="flex items-center space-x-2 justify-center">
                                        <span>Số lượng: </span>
                                        <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 inline-flex items-center bg-green-500" onClick={() => handleIncreaseOrDecrease(orderDetail, "decrease")}>-</button>
                                        <span>{orderDetail.ProductQuantity}</span>
                                        <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 inline-flex items-center bg-green-500" onClick={() => handleIncreaseOrDecrease(orderDetail, "increase")}>+</button>
                                        <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 inline-flex items-center bg-red-700" onClick={() => handleDeleteOrderDetail(orderDetail.OrderDetailId)}>Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {orderDetails.length > 0 && (
                    <div className="flex justify-center mt-4">
                        <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-500" onClick={handlePlaceOrder}>Đặt hàng - Tổng tiền: {calculateTotalPrice().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
