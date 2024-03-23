import axiosClient from "./axiosClient";
const customerInfoApi = {
    getCustomerInfo() {
        const url = `customer?page_number=1&page_size=2`
        return axiosClient.get(url);
    },

}

export default customerInfoApi;
