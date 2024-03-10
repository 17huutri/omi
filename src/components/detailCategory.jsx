import React, { useState, useEffect } from "react";
import productInStoreApi from "../api/productInStoreApi";
import { useParams } from "react-router";

const DetailCategory = () => {
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

  const findProductByCategoryId = productStore.filter(
    // (product) => product.CategoryId === id
    (product) => id.includes(product.CategoryId)
  );
  console.log(findProductByCategoryId);

  return (
    <div>
      {findProductByCategoryId.map((product) => (
        <div key={product.ProductInStoreId}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto my-3 ">
            <a href="#">
              <img class="rounded-t-lg" src={product.Image} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.Name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.Description}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy Now
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailCategory;
