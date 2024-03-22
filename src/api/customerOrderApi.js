import axiosClient from "./axiosClient";
const customerOrderApi = {

    getAllCustomerOrderByCustomer(customerId) {
        const url = `/customer-order/customer/${customerId}`;
        const params = {
            status: "pending"
        };
        return axiosClient.get(url, { params });
    }


};

export default customerOrderApi;