import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Text } from 'zmp-ui';
import { Link, useNavigate } from 'react-router-dom';
import customerApi from '../api/customerApi';
import store from '../store';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const params = {
                PhoneNumber: phoneNumber,
                Password: password,
            };

            const response = await customerApi.loginCustomer(params);
            setIsLoggedIn(true);
            store.dispatch('setUser', response.data);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');

        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
        }
    };

    useEffect(() => {
        console.log("Giá trị mới của isLoggedIn:", isLoggedIn);
    }, [isLoggedIn]);

    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box width="80%" >
                <Text style={{ textAlign: 'center' }} mb={4}>
                    Đăng nhập
                </Text>
                <Input
                    placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    mb={2}
                />
                <Input
                    placeholder="Mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mb={4}
                />
                <Button onClick={handleLogin} fullWidth>
                    Đăng nhập
                </Button>
                <Text mt={2} >
                    Bạn chưa có tài khoản?{' '}
                    <Link to="/signup">Vui lòng Đăng ký</Link>
                </Text>
            </Box>
        </Box>
    );
};

export default Login;
