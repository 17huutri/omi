import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "zmp-ui";
import HomePage from "../pages";
import Detail1Component from "./detailComponent";
import Navigation from "../components/navigation";
import CartPage from "../pages/cart/index";
import UserProfile from "../pages/user-profile";
import DetailCategory from "./detailCategory";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coupon" element={<Detail1Component />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/detail-category/:id" element={<DetailCategory />} />
      </Routes>
      <Navigation />
    </Box>
  );
};

export default Layout;
