
import React, { useEffect, useState } from 'react';
import { Box, Button, Icon } from "zmp-ui";


import '../css/navigation.scss'

const mockNavigations = [
    {
        "id": "products",
        "name": "Sản phẩm",
        "icon": "https://icon-library.com/images/icon-menu/icon-menu-10.jpg"
    },
    {
        "id": "vouchers",
        "name": "Khuyến mãi",
        "icon": "https://cdn-icons-png.freepik.com/512/3837/3837136.png"
    },
    {
        "id": "cart",
        "name": "Giỏ hàng",
        "icon": "https://cdn-icons-png.freepik.com/512/8170/8170696.png"
    },
    {
        "id": "notice",
        "name": "Thông báo",
        "icon": "https://w7.pngwing.com/pngs/537/580/png-transparent-bell-notification-communication-information-icon.png"
    },
    {
        "id": "account",
        "name": "Tài khoản",
        "icon": "https://cdn-icons-png.flaticon.com/512/10453/10453654.png"
    },
];

const Navigation = () => {

    const [navigations, setNavigations] = useState([]);

    useEffect(() => {
        // Simulate fetching categories from API
        // In a real application, you will fetch data using fetch or axios
        setNavigations(mockNavigations);
    }, []);


    return (
        <Box>
            <div className="navigation-container">
                {navigations.map(navigation => (
                    <div className="navigation" key={navigation.id}>
                        <div className='info'>
                            <img className="navigation-icon" src={navigation.icon} alt={navigation.name} />
                            <p className="navigation-name">{navigation.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dành cho sau này chuyển route dùng router:
            <div className="navigation-container">
                {navigations.map(navigation => (
                    <Link to={navigation.route} key={navigation.id} className="navigation">
                        <div className='info'>
                            <img className="navigation-icon" src={navigation.icon} alt={navigation.name} />
                            <p className="navigation-name">{navigation.name}</p>
                        </div>
                    </Link>
                ))}
            </div> */}
        
        </Box>

    );
}

export default Navigation;

