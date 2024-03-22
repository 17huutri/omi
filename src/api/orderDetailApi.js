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
    }


};

export default orderDetailApi;