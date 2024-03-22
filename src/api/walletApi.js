import axiosClient from "./axiosClient";
const walletApi = {
    getWalletInfo() {
        const url = `deposit/wallet/11`
        return axiosClient.put(url);
    },

}

export default walletApi;
