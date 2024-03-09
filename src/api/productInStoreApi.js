import axiosClient from "./axiosClient";
const productInStoreApi = {
    getProductInStore() {
        const url = `/products-in-store/?page_size=5&page_number=1`
        return axiosClient.get(url);
    },

}

export default productInStoreApi;
