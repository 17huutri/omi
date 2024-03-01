
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from "zmp-ui";

import HomePage from '../pages';

const Layout = () => {
    return (
        <Box flex flexDirection="column" className="h-screen">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Box>

    );
}

export default Layout;

