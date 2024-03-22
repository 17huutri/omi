import React from 'react';
import { Page, Header } from 'zmp-ui';
import Cart from './cart';


const CartPage = () => {
    return (
        <Page className="flex flex-col">
            <Header title="Giỏ hàng của bạn" />
            <Cart />
        </Page>
    );
}

export default CartPage;