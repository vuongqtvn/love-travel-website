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
  createTag(data: any) {
    return axiosClient.post(`/tags`, data);
  },
  updateTag(id: string, data: any) {
    return axiosClient.put(`/tags/${id}`, data);
  },
  deleteTag(id: string) {
    return axiosClient.delete(`/tags/${id}`);
  },
};

export default tagApi;
