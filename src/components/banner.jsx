import React from "react";
import { Page, Swiper, Box, Text } from "zmp-ui";
const Banner = () => {
    return (
        <Page className="section-container">
            <Box
                mt={2}
                flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                px={2}

            >
                <Swiper autoplay duration={2000} loop>
                    <Swiper.Slide>
                        <img
                            className="slide-img"
                            src="https://vuakhuyenmai.vn/wp-content/uploads/bach-hoa-xanh-khuyen-mai-moi-6-8-2021.jpg"
                            alt="slide-1"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img"
                            src="https://vuakhuyenmai.vn/wp-content/uploads/coopmart-khuyen-mai-moi-nhat-3-3-22.jpg"
                            alt="slide-2"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img"
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6214f1103270429.5f492a4120fed.png"
                            alt="slide-3"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img"
                            src="https://www.minimeinsights.com/wp-content/uploads/2019/10/Vinamilk-fresh-yogurt-740x420.png"
                            alt="slide-4"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img"
                            src="https://i.ytimg.com/vi/qDWpw_stZGo/maxresdefault.jpg"
                            alt="slide-5"
                        />
                    </Swiper.Slide>
                </Swiper>
            </Box>
        </Page>
    );
}
export default Banner
