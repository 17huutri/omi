
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from "zmp-ui";
import HomePage from '../pages';
import Detail1Component from './detailComponent';
import Navigation from '../components/navigation';
import CartPage from '../pages/cart/index';
import UserProfile from "../pages/user-profile";
import ProductList from './product';
import CouponCode from './couponv2';
import Nofication from './nofication';
const Layout = () => {
    return (
        <Box flex flexDirection="column" className="h-screen">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product-list" element={<ProductList />} />
                
                <Route path="/nofication" element={<Nofication />} />
                <Route path="/coupon" element={<CouponCode />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
            <Navigation />
        </Box>

    );
}

export default Layout;

