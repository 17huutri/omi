import React, { useState, useEffect } from "react";
import { List, Page, Icon, useNavigate, Input, Box } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

import UserCard from "../components/user-card";
import Navigation from "../components/navigation";
import "../css/user-profile.scss";

const UserProfile = () => {
    const user = useRecoilValue(userState);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const userLoggedIn = localStorage.getItem("isLoggedIn");
        if (userLoggedIn == "false" || userLoggedIn == undefined) {
            navigate("/");
        } else setLoading(true);
    }, []);
    if (!loading) {
        return null;
    }
    return (
        <Page className="page">
            <div className="section-container">
                <UserCard user={user} />
            </div>
            <div className="section-container">
                <List>
                    <List.Item suffix={<Icon icon="zi-chevron-right" />}>
                        <div onClick={() => navigate("/about")}>Đơn hàng của tôi</div>
                    </List.Item>
                    <List.Item>
                        <div className="packageDetail">
                            <div onClick={() => navigate("/user")}>Đang xử lý</div>
                            <div onClick={() => navigate("/user")}>Nhận hôm nay</div>
                            <div onClick={() => navigate("/user")}>Lịch sử</div>
                        </div>
                    </List.Item>
                </List>
            </div>
            <div className="section-container">
                <List>
                    <List.Item
                        prefix={<Icon icon="zi-chevron-double-up" />}
                        suffix={<Icon icon="zi-chevron-right" />}
                    >
                        Chương trình khách hàng thân thiết
                    </List.Item>
                    <List.Item
                        prefix={<Icon icon="zi-star" />}
                        suffix={<Icon icon="zi-chevron-right" />}
                    >
                        Đánh giá của tôi
                    </List.Item>
                    <List.Item
                        prefix={<Icon icon="zi-list-2" />}
                        suffix={<Icon icon="zi-chevron-right" />}
                    >
                        Ngày mai ăn gì
                    </List.Item>
                    <List.Item
                        prefix={<Icon icon="zi-add-user" />}
                        suffix={<Icon icon="zi-chevron-right" />}
                    >
                        Giới thiệu bạn bè
                    </List.Item>
                </List>
            </div>
            <Navigation />
        </Page>
    );
};

export default UserProfile;