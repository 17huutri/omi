import React from 'react';
import { Page, Header } from 'zmp-ui';
import { CartItems } from './cart-item';


const CartPage = () => {
    return (
        <Page className="flex flex-col">
            <Header title="Giỏ hàng" />
            <CartItems />
        </Page>
    );
}

export default CartPage;