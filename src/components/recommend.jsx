import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Page } from "zmp-ui";
import ProductList from "./product-list";

const RecommendContent = () => {
    return (
        <div className="container mx-auto">
            <Page className="section-container overflow-hidden">
                <div className="overflow-x-auto px-2 py-2 bg-blue-400 shadow-md rounded-lg">

                    <Swiper slidesPerView={1} spaceBetween={0}>
                        <ProductList />
                    </Swiper>
                </div>
            </Page>
        </div>
    );
};

export default RecommendContent;
