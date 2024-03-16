import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import productInStoreApi from "./../api/productInStoreApi";
import orderDetailApi from "./../api/orderDetailApi";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState({});
    const [customerId, setCustomerId] = useState(31);
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productInStoreApi.getProductInStore();
                setProducts(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products: ", error);
                setLoading(false);
            }
        };

        const getOrderDetails = async () => {
            try {
                const response = await orderDetailApi.getAllOrderDetailsByCustomer(customerId);
                setOrderDetails(response.data);
            } catch (error) {
                console.error("Error fetching order details: ", error);
            }
        };

        fetchProducts();
        getOrderDetails();
    }, []);

    const handleAddToCart = async (product) => {
        try {
            const existingOrderDetail = orderDetails.find(detail => detail.ProductInStoreId === product.ProductInStoreId);
            if (existingOrderDetail) {
                const updatedCart = { ...cart };
                updatedCart[product.ProductInStoreId] = (updatedCart[product.ProductInStoreId] || 0) + 1;
                setCart(updatedCart);
                await orderDetailApi.updateProductQuantity(existingOrderDetail.OrderDetailId, updatedCart[product.ProductInStoreId]);
            } else {
                const response = await orderDetailApi.createOrderDetail({
                    ProductQuantity: 1,
                    ProductInStoreId: product.ProductInStoreId,
                    CustomerId: customerId
                });
                const updatedCart = { ...cart };
                updatedCart[product.ProductInStoreId] = (updatedCart[product.ProductInStoreId] || 0) + 1;
                setCart(updatedCart);
                setOrderDetails([...orderDetails, response.data]);
            }
        } catch (error) {
            console.error("Error adding product to cart: ", error);
        }
    };

    const handleIncreaseOrDecrease = async (product, action) => {
        try {
            const updatedCart = { ...cart };
            const existingOrderDetail = orderDetails.find(detail => detail.ProductInStoreId === product.ProductInStoreId);
            let orderDetailIdToUpdate;

            if (existingOrderDetail) {
                orderDetailIdToUpdate = existingOrderDetail.OrderDetailId;
            } else {
                console.error("Order detail not found for product:", product.Name);
                return;
            }

            if (action === "increase") {
                updatedCart[product.ProductInStoreId]++;
            } else if (action === "decrease") {
                if (updatedCart[product.ProductInStoreId] > 0) {
                    updatedCart[product.ProductInStoreId]--;
                }
                if (updatedCart[product.ProductInStoreId] === 0) {
                    await orderDetailApi.deleteOrderDetail(orderDetailIdToUpdate);
                    setOrderDetails(orderDetails.filter(detail => detail.OrderDetailId !== orderDetailIdToUpdate));
                    delete updatedCart[product.ProductInStoreId];
                    setCart(updatedCart);
                    return;
                }
            }

            setCart(updatedCart);
            await orderDetailApi.updateProductQuantity(orderDetailIdToUpdate, updatedCart[product.ProductInStoreId]);
        } catch (error) {
            console.error("Error updating product quantity: ", error);
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mx-auto">
            <div className="flex flex-col py-4">
                <Text.Title size="normal">Sản phẩm ưu đãi:</Text.Title>

                {products.map((product) => (
                    <div key={product.Name} className="flex-shrink-0 mb-4">
                        <div className="w-64 flex flex-col">
                            <div className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton shadow-md" style={{ backgroundImage: `url(${product.Image})` }}>
                                {product.Price && (
                                    <Text.Title size="small" className="absolute right-2 top-2 uppercase bg-yellow-400 px-2 text-white h-6 rounded-full">
                                        Giảm {product.Discount}%  </Text.Title>
                                )}
                            </div>
                            <div className="px-2 py-2 bg-white">
                                <Text bold size="small">{product.Name}</Text>
                                <Text size="xxSmall" className="line-through text-gray">
                                    {product.Price}
                                </Text>
                                <Text size="large" className="!font-bold text-primary text-green-800">
                                    {product.Discount ?
                                        (product.Price - (product.Price * product.Discount / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                        :
                                        product.Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                    }

                                    {!cart[product.ProductInStoreId] ? (
                                        <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-green-600 focus:ring-green-800 ml-14" onClick={() => handleAddToCart(product)}>
                                            <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                            Mua
                                        </button>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 inline-flex items-center bg-gray-400" onClick={() => handleIncreaseOrDecrease(product, "decrease")}>
                                                -
                                            </button>
                                            <span>{cart[product.ProductInStoreId]}</span>
                                            <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 inline-flex items-center bg-gray-400" onClick={() => handleIncreaseOrDecrease(product, "increase")}>
                                                +
                                            </button>
                                        </div>
                                    )}
                                </Text>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
