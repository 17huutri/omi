import axiosClient from "./axiosClient";
const productInStoreApi = {
    getProductInStore() {
        const url = `/products-in-store?page_number=1&page_size=4`
        return axiosClient.get(url);
    },

}

export default productInStoreApi;
