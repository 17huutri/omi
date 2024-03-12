import axiosClient from "./axiosClient";
const categoriesApi = {
    getCategories() {
        const url = `/categories`
        return axiosClient.get(url);
    },

}

export default categoriesApi;
