import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

const UserCard = () => {
    const user = useRecoilValue(userState);

    return (
        <Box flex>
            <Avatar>

                {user.data.Image}
            </Avatar>
            <Box ml={4}>
                <Text.Title>{user.data.Name}</Text.Title>
                <Text>{user.data.Phone}</Text>
            </Box>
        </Box>
    );
};

export default UserCard;
