import { axiosClient } from ".";

const regionApi = {
  getRegions(params?: any) {
    return axiosClient.get("/regions", {
      params,
    });
  },
  getRegion(id: string) {
    return axiosClient.post(`/regions/${id}`);
  },
  createRegion(data: any) {
    return axiosClient.post(`/regions`, data);
  },
  updateRegion(id: string, data: any) {
    return axiosClient.put(`/regions/${id}`, data);
  },
  deleteRegion(id: string) {
    return axiosClient.delete(`/regions/${id}`);
  },
};

export default regionApi;
