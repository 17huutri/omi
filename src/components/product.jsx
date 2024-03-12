// import React, { useState, useEffect } from "react";
// import { Text } from "zmp-ui";
// import { Link } from "react-router-dom";
// import productInStoreApi from "./../api/productInStoreApi";
// import "../css/product.css";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await productInStoreApi.getProductInStore();
//                 setProducts(response.data.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container mx-auto">
//             <div className="flex flex-col py-4">
//                 <Text.Title size="normal">Ưu đãi đơn hàng:</Text.Title>

//                 {products.map((product) => (
//                     <Link key={product.id} to={`/productDetail/${product.id}`} className="product-link">
//                         <div className="flex-shrink-0 mb-4">
//                             <div className="w-64 flex flex-col">
//                                 <div className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton shadow-md" style={{ backgroundImage: `url(${product.Image})` }}>
//                                     {product.Price && (
//                                         <Text.Title size="small" className="absolute right-2 top-2 uppercase bg-yellow-400 px-2 text-white h-6 rounded-full">
//                                             Giảm {product.Discount}%  </Text.Title>
//                                     )}
//                                 </div>
//                                 <div className="px-2 py-2 bg-white">
//                                     <Text bold size="small">{product.Name}</Text>
//                                     <Text size="xxSmall" className="line-through text-gray">
//                                         {product.Price}
//                                     </Text>
//                                     <Text size="large" className="!font-bold text-primary text-green-800">
//                                         {product.Discount ?
//                                             (product.Price - (product.Price * product.Discount / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
//                                             :
//                                             product.Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
//                                         }
//                                         <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-green-600 focus:ring-green-800 ml-14">
//                                             <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
//                                                 <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//                                             </svg>
//                                             Mua
//                                         </button>
//                                     </Text>
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductList;



import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import productInStoreApi from "./../api/productInStoreApi";
import "../css/product.css"

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productInStoreApi.getProductInStore();
                setProducts(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
        <h2 className="text">Ưu đãi đơn hàng</h2>
        <div className="product-container">
          {products.map(product => (
            
              <div key={product.id} className="product">
              <div className="product-image">
                <img src={product.Image} alt={product.name} />               
              </div>

              <div className="product-details">
                <h3 className="product-name">{product.Name}</h3>
                <p className="product-price">Price: ${product.Price}</p>
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                {/* <a href="https://www.flaticon.com/free-icons/milk" title="milk icons">Milk icons created by Freepik - Flaticon</a> */}
              </div>
              
            </div>
          ))}
        </div>

        
      </div>
    );
};

export default Product;
