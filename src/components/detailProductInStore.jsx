import React, { useState, useEffect } from "react";
import productInStoreApi from "../api/productInStoreApi";
import { useParams } from "react-router";
import { Text } from "zmp-ui";
import "../css/detailProductInStore.css"
import dollar from "../picture/dollar.png";
import vegetable from "../picture/vegetable.png";
import pro from "../picture/protected.png";
import shipping from "../picture/shipping.png";

const DetailProductInStore = () => {
  const { id } = useParams();
  console.log(id);
  const [productStore, setProductStore] = useState([]);
  useEffect(() => {
    const dataProduct = async () => {
      try {
        const res = await productInStoreApi.getProductInStore();
        setProductStore(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    dataProduct();
  }, []);

  const findProductByStoreId = productStore.filter(
    // (product) => product.CategoryId === id
    (product) => id.includes(product.ProductInStoreId)
  );

  // const Total = product.Price - product.Discount;

  return (
    <div className="">
      {findProductByStoreId.map((product) => (
        <div className="h-screen" key={product.ProductInStoreId}>
          <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div class="p-3 bg-slate-300">
              <div>
                <div
                  className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton shadow-md"
                  style={{ backgroundImage: `url(${product.Image})` }}
                >
                  {product.Price && (
                    <Text.Title
                      size="small"
                      className="absolute right-2 top-2 uppercase bg-yellow-400 px-2 text-white h-6 rounded-full"
                    >
                      Giảm {product.Discount}%
                    </Text.Title>
                  )}
                </div>
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.Name}
                </h5>
                <div className="flex mx-2">
                  <Text
                    size="large"
                    className="!font-bold text-primary text-green-800 mr-2"
                  >
                    {product.Discount
                      ? (
                          product.Price -
                          (product.Price * product.Discount) / 100
                        ).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })
                      : product.Price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                  </Text>
                  <Text size="large" className="line-through text-gray">
                    {product.Price} đ
                  </Text>
                </div>
              </div>

              <div className="text-green-600 font-bold">
                {product.StoreName}
              </div>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.Description}
              </p>

              <button
                type="button"
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-green-600 focus:ring-green-800 "
              >
                <svg
                  className="w-3.5 h-3.5 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Mua
              </button>
            </div>
          </div>

       <div className="my-component">
      <h2>THỰC PHẨM SẠCH PHÂN PHỐI BỞI OMI FARM</h2>
      <p>ĐẠT CHỨNG NHẬN ISO 22000:2018</p>
      
      <div className="prod">
      <img src={pro} className='w-8 h-6' />
      </div>
      <div className="prod">
      {/* <p>Được bảo đảm bởi PT.</p> */}
      <p>Sản phẩm được Omi Farm phân phối.</p>
      </div>
      <img src={vegetable} className='w-8 h-6' />
      <p>Khách hàng có thể bắt đầu đến nhận đơn tại các điểm nhận hàng.</p>
            <img src={dollar} className='w-8 h-6' />
      <p>Omi Farm cam kết chất lượng, và hoàn tiền ngay khi các sản phẩm có vấn đề.</p>
                        
    </div>
        </div>
      ))}
    </div>
  );
};

export default DetailProductInStore;