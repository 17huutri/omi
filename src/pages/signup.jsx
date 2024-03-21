import React, { useState } from 'react';
import { Box, Button, Input, Text } from 'zmp-ui';
import customerApi from '../api/customerApi';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('Male');
    const [buildingId, setBuildingId] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const params = {
                Name: name,
                Email: email,
                Phone: phone,
                Password: password,
                Birthday: birthday,
                Gender: gender,
                Status: 'A',
                BuildingId: buildingId
            };

            await customerApi.signupCustomer(params);

            navigate('/login');

        } catch (error) {
            console.error('Đăng ký thất bại:', error);
        }
    };

    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box width="80%" maxWidth={300}>
                <Text variant="h6" textAlign="center" mb={4}>
                    Đăng ký tài khoản
                </Text>
                <Input
                    placeholder="Họ và tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    mb={2}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    mb={2}
                />
                <Input
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    mb={2}
                />
                <Input
                    placeholder="Mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mb={2}
                />
                <Input
                    placeholder="Ngày sinh"
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    mb={2}
                />
                <label>Giới tính:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="Male">Nam</option>
                    <option value="Female">Nữ</option>
                </select>
                <Input
                    placeholder="Mã tòa nhà"
                    value={buildingId}
                    onChange={(e) => setBuildingId(e.target.value)}
                    mb={4}
                />
                <Button onClick={handleSignup} fullWidth>
                    Đăng ký
                </Button>
                <Box mt={2} textAlign="center">
                    Bạn đã có tài khoản?<Link to="/login"> Đăng nhập ngay</Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Signup;
