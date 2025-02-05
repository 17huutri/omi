import axiosClient from "./axiosClient";
const orderDetailApi = {
    createOrderDetail(params) {
        const url = `/order-detail`
        return axiosClient.post(url, params);
    },

    updateProductQuantity(customerId, quantity) {
        const url = `/order-detail/${customerId}`;
        return axiosClient.put(url, { quantity });
    },


    deleteOrderDetail(customerId) {
        const url = `/order-detail/${customerId}`;
        return axiosClient.delete(url);
    },
    getAllOrderDetailsByCustomer(customerId) {
        const url = `/order-detail/customer/${customerId}`;
        const params = {
            status: 0
        };
        return axiosClient.get(url, { params });
    },
    getAllInforOfOrder(orderId) {
        const url = `/order-detail/order/${orderId}`;

        return axiosClient.get(url);
    }


};

export default orderDetailApi;




//
// import axios from 'axios';

// const depositToWallet = async (walletId, amount) => {
//   try {
//     const url = https://onlinemarket-api.nguyenminhhai.us/api/v1/deposit/wallet/${walletId};
//     const response = await axios.put(url, { amount });
//     return response.data;
//   } catch (error) {
//     console.error('Error depositing money:', error);
//     throw error;
//   }
// };

// export default depositToWallet;