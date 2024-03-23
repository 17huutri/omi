import axiosClient from "./axiosClient";
const customerOrderApi = {

    getAllCustomerOrderByCustomer(customerId) {
        const url = `/customer-order/customer/${customerId}`;
        const params = {
            status: "pending"
        };
        return axiosClient.get(url, { params });
    },

    payOrder: async (customerId, customerOrderId) => {
        const url = `/customer-order`;
        const data = {
            customerId: customerId,
            customerOrderId: customerOrderId
        };

        const response = await axiosClient.put(url, data);
        return response.data;
    }
};



export default customerOrderApi;