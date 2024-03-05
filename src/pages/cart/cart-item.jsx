import React, { useState } from "react";
import { Box, Text } from "zmp-ui";

export const CartItems = () => {
    const [cart, setCart] = useState([]);
    const [editingItem, setEditingItem] = useState(undefined);

    return (
        <Box style={{ marginTop: '20px' }}>
            {cart.length > 0 ? (
                <div>
                    {/* Placeholder for ProductPicker */}
                    <div>
                        {/* Placeholder for ListRenderer */}
                        {cart.map((item, index) => (
                            <div className="cart-item" key={index} onClick={() => {
                                setEditingItem(item);
                                // Placeholder for opening ProductPicker
                                console.log("Opening ProductPicker for item: ", item);
                            }}>
                                <img
                                    className="w-10 h-10 rounded-lg"
                                    src={item.product.image}
                                    alt={item.product.name}
                                />
                                <Box flex className="space-x-1">
                                    <Box className="space-y-1 flex-1">
                                        <Text size="small">{item.product.name}</Text>
                                        <Text className="text-gray" size="xSmall">
                                            {/* Placeholder for FinalPrice */}
                                            {item.product.price}
                                        </Text>
                                        <Text className="text-gray" size="xxxSmall">
                                            {/* Placeholder for DisplaySelectedOptions */}
                                            {item.options}
                                        </Text>
                                    </Box>
                                    <Text className="text-primary font-medium" size="small">
                                        x{item.quantity}
                                    </Text>
                                </Box>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Text
                    className="bg-background rounded-xl py-8 px-4 text-center text-gray"
                    size="xxSmall"
                >
                    Không có sản phẩm trong giỏ hàng
                </Text>
            )}
        </Box >
    );
};
