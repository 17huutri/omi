import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ZMPRouter, Box } from "zmp-ui";
import HomePage from "../pages";
import Navigation from "../components/navigation";
import CartPage from "../pages/cart/index";
import UserProfile from "../pages/user-profile";
import DetailCategory from "./detailCategory";
import ProductList from './product';
import CouponCode from './couponv2';
import Nofication from './nofication';
import DetailStore from './productInStore';
import WalletTransaction from "./addMoney";
import DetailProductInStore from "./detailProductInStore";
import ListProductStore from "../pages/store/listProductStore";
import Login from "../pages/login";
import Signup from "../pages/signup";



const Layout = () => {
    return (
        <Box flex flexDirection="column" className="h-screen">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/home" element={<HomePage />} />

                <Route path="/notification" element={<Notification />} />
                <Route path="/coupon" element={<CouponCode />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<DetailProductInStore />} />
                <Route path="/detail-store/:id" element={<DetailStore />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/detail-category/:id" element={<DetailCategory />} />
                <Route path="/customer/:id" element={<WalletTransaction />} />
                <Route
                    path="/listproductstore/:storeId"
                    element={<ListProductStore />}
                />
            </Routes>
            <Navigation />
        </Box>
    );
};

export default Layout;
