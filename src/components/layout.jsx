import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "zmp-ui";
import HomePage from "../pages";
import Navigation from "../components/navigation";
import CartPage from "../pages/cart/index";
import UserProfile from "../pages/user-profile";
import DetailCategory from "./detailCategory";
import CouponCode from './couponv2';
import Nofication from './nofication';
import DetailProductInStore from './detailProductInStore';
import ListProductStore from '../pages/store/listProductStore';

const Layout = () => {
    return (
        <Box flex flexDirection="column" className="h-screen">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nofication" element={<Nofication />} />
                <Route path="/coupon" element={<CouponCode />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<DetailProductInStore />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/detail-category/:id" element={<DetailCategory />} />
                <Route path="/listproductstore/:storeId" element={<ListProductStore />} />
            </Routes>
            <Navigation />
        </Box>

    );
}


export default Layout;
