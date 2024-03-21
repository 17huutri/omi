import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from 'zmp-ui';
import HomePage from '../pages';
import Navigation from '../components/navigation';
import CartPage from '../pages/cart/index';
import UserProfile from '../pages/user-profile';
import DetailCategory from './detailCategory';
import CouponCode from './couponv2';
import Notification from './nofication';
import DetailProductInStore from './detailProductInStore';
import ListProductStore from '../pages/store/listProductStore';
import Login from '../pages/login';
import Signup from '../pages/signup';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(userLoggedIn === 'true');
    }, []);

    useEffect(() => {
        console.log("isLoggedIn:", isLoggedIn);
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Route {...rest} element={<Element />} />; // Sử dụng element như là một child của Route
};

const Layout = () => {
    return (
        <Box flex flexDirection="column" className="h-screen">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
                <Route path="/notification" element={<ProtectedRoute element={<Notification />} />} />
                <Route path="/coupon" element={<ProtectedRoute element={<CouponCode />} />} />
                <Route path="/cart" element={<ProtectedRoute element={<CartPage />} />} />
                <Route path="/product/:id" element={<ProtectedRoute element={<DetailProductInStore />} />} />
                <Route path="/user-profile" element={<ProtectedRoute element={<UserProfile />} />} />
                <Route path="/detail-category/:id" element={<ProtectedRoute element={<DetailCategory />} />} />
                <Route path="/listproductstore/:storeId" element={<ProtectedRoute element={<ListProductStore />} />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/notification" element={<Notification />} />
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
};

export default Layout;
