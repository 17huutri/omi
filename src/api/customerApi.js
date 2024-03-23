import axiosClient from "./axiosClient";
const customerApi = {
    //register
    signupCustomer(params) {
        const url = `/customer`
        return axiosClient.post(url, params);
    },
    //login
    loginCustomer(params) {
        const url = `/customer/login`
        return axiosClient.post(url, params);
    },
    getCustomerById(customerId) {
        const url = `/customer/${customerId}`;
        return axiosClient.get(url);
    },

};

export default customerApi;