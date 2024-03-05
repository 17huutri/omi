
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from "zmp-ui";
import HomePage from '../pages';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Coupon from './coupon';
import Detail1Component from './Detail1Component';
const Layout = () => {
    return (
        <Box flex flexDirection="column" className="h-screen">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/coupon" element={<Detail1Component />} />
                {/* <Route path="/detail1" component={Detail1Component} /> */}
            </Routes>
        </Box>

    );
}

export default Layout;

