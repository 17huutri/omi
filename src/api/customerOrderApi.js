import axiosClient from "./axiosClient";
const customerOrderApi = {
  
    getAllCustomerOrderByCustomer(customerId) {
        const url = `/order-detail/customer/${customerId}`;
        const params = {
            status: 0
        };
        return axiosClient.get(url, { params });
    }


};

export default customerOrderApi;