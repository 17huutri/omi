import axiosClient from "./axiosClient";
const storeApi = {
    getStore() {
        const url = `/store?page_number=1&page_size=4`
        return axiosClient.get(url);
    },

}

export default storeApi;