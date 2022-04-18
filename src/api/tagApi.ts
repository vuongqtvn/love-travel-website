import { axiosClient } from ".";

const tagApi = {
  getTags(params?: any) {
    return axiosClient.get("/tags", {
      params,
    });
  },
  getTag(id: string) {
    return axiosClient.post(`/tags/${id}`);
  },
};

export default tagApi;
