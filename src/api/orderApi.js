import axiosClient from "./axiosClient";

const orderApi = {
    mergeOrder(orderDetailIds, buildingId) {
        const url = `/order-detail/merge`;
        const data = {
            OrderDetailId: orderDetailIds,
            BuildingId: buildingId
        };
        return axiosClient.put(url, data);
    }
};

export default orderApi;
