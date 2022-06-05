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
  createCategory(data: any) {
    return axiosClient.post(`/categories`, data);
  },
  updateCategory(id: string, data: any) {
    return axiosClient.put(`/categories/${id}`, data);
  },
  deleteCategory(id: string) {
    return axiosClient.delete(`/categories/${id}`);
  },
};

export default categoryApi;
