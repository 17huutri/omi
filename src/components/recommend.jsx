import React, { Suspense, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Page, Button } from "zmp-ui";
const recommendProducts = [
    {
        id: 1,
        name: "[Thùng] Mì Omachi",
        price: 280000,
        image: "https://meta.vn/Data/image/2020/03/30/thung-30-goi-mi-omachi-xot-spaghetti-vi-bo-1.jpg",
        sale: { type: "percent", percent: 0.42, amount: 42 }
    },
    {
        id: 2,
        name: "Nước giặt Omo Matic",
        price: 198000,
        image: "https://th.bing.com/th/id/OIP.hQzTfKnvWbG4hNkt9IlmsgHaHa?w=185&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        sale: { type: "percent", percent: 0.11, amount: 21780 }

    },
    {
        id: 3,
        name: "Trà Xanh Không Độ",
        price: 56400,
        image: "https://th.bing.com/th/id/OIP.QCBvmjBeNxaGq8UCl3k0fwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        sale: { type: "amount", percent: 0.18, amount: 21780 }
    },
    {
        id: 4,
        name: "[Thùng] Mì Omachi",
        price: 280000,
        image: "https://meta.vn/Data/image/2020/03/30/thung-30-goi-mi-omachi-xot-spaghetti-vi-bo-1.jpg",
        sale: { type: "percent", percent: 0.42, amount: 21780 }
    },
    {
        id: 5,
        name: "Nước giặt Omo Matic",
        price: 198000,
        image: "https://th.bing.com/th/id/OIP.hQzTfKnvWbG4hNkt9IlmsgHaHa?w=185&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        sale: { type: "percent", percent: 0.11, amount: 21780 }

    },
    {
        id: 6,
        name: "Trà Xanh Không Độ",
        price: 56400,
        image: "https://th.bing.com/th/id/OIP.QCBvmjBeNxaGq8UCl3k0fwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        sale: { type: "amount", percent: 0.20, amount: 20 }
    }
];

const RecommendContent = () => {
    // const [quantity, setQuantity] = useState(0);

    // const handleQuantityChange = (amount) => {
    //     const newQuantity = quantity + amount;
    //     if (newQuantity >= 0) {
    //         setQuantity(newQuantity);
    //     }
    // };
    return (
        <div className="container mx-auto ">
            <Page className="section-container ">
                <div className="overflow-x-auto px-2 py-2 bg-yellow-100 shadow-md rounded-lg">
                    <Text.Title size="normal">Sản phẩm bán chạy</Text.Title>

                    <div className="flex py-4">
                        {recommendProducts.map((product) => (
                            <div key={product.id} className="flex-shrink-0 mr-4 w-64">
                                <div className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton shadow-md" style={{ backgroundImage: `url(${product.image})` }}>
                                    {product.sale && (
                                        <Text size="xxxxSmall" className="absolute right-2 top-2 uppercase bg-blue-400 text-white h-4 px-4 rounded-full">
                                            Giảm{" "}
                                            {product.sale.type === "percent"
                                                ? `${product.sale.percent * 100}%`
                                                : `-${product.sale.amount}`}
                                        </Text>
                                    )}
                                </div>
                                <div className="px-2 py-2 bg-white">
                                    <Text bold size="small">{product.name}</Text>
                                    <Text size="xxSmall" className="line-through text-gray">
                                        {product.price}
                                    </Text>
                                    <Text size="large" className="!font-bold text-primary text-green-800">
                                        {product.sale ?
                                            (product.price - product.sale.amount).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                            :
                                            product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                        }
                                        <button type="button" className="text-white  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:focus:ring-green-800 ml-14">
                                            <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                            Mua
                                        </button>
                                    </Text>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Page>
        </div>
    );
};


const RecommendFallback = () => {
    const numFakeProducts = 3;

    return (
        <div className="container mx-auto">
            <h2>Gợi ý cho bạn</h2>
            <Swiper slidesPerView={5} spaceBetween={16} className="px-4">
                {[...Array(numFakeProducts)].map((_, i) => (
                    <SwiperSlide key={i}>
                        <div>Placeholder sản phẩm</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const Recommend = () => {
    return (
        <Suspense fallback={<RecommendFallback />}>
            <RecommendContent />
        </Suspense>
    );
};

export default Recommend;
