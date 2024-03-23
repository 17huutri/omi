import React, { useEffect, useState } from 'react';
import { Box } from "zmp-ui";
import { Link } from 'react-router-dom';

import '../css/navigation.scss';

const mockNavigations = [
    {
        "id": "products",
        "name": "Danh mục",
        "icon": "https://cdn-icons-png.flaticon.com/128/9643/9643115.png",
        "href": "/"
    },
    {
        "id": "vouchers",
        "name": "Khuyến mãi",
        "href": "/coupon",
        "icon": "https://cdn-icons-png.flaticon.com/128/9551/9551915.png"
    },
    {
        "id": "cart",
        "name": "Giỏ hàng",
        "icon": "https://cdn-icons-png.flaticon.com/128/5337/5337564.png",
        "href": "/cart"
    },
    {
        "id": "notice",
        "name": "Thông báo",
        "icon": "https://cdn-icons-png.flaticon.com/128/5001/5001519.png",
        "href": "/notification"
    },
    {
        "id": "account",
        "name": "Tài khoản",
        "icon": "https://cdn-icons-png.flaticon.com/128/3024/3024605.png",
        "href": "/user-profile"
    },
];

const Navigation = () => {

    const [navigations, setNavigations] = useState([]);

    useEffect(() => {
        setNavigations(mockNavigations);
    }, []);


    return (
        <Box>
            <div className="navigation-container relative grid grid-cols-5 gap-4 p-4 z-50">                {navigations.map(navigation => (
                <Link to={navigation.href} className="navigation" key={navigation.id}>
                    <div className='info'>
                        <img className="navigation-icon" src={navigation.icon} alt={navigation.name} />
                        <p className="navigation-name">{navigation.name}</p>
                    </div>
                </Link>
            ))}
            </div>
        </Box>
    );
}

export default Navigation;
