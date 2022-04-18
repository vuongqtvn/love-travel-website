import { axiosClient } from ".";

const categoryApi = {
  getCategories(params?: any) {
    return axiosClient.get("/categories", {
      params,
    });
  },
  getCategory(id: string) {
    return axiosClient.post(`/categories/${id}`);
  },
};

export default categoryApi;
