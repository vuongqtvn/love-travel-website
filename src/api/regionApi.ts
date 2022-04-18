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
};

export default regionApi;
