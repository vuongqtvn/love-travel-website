import { axiosClient } from ".";

const purposeApi = {
  getPurposes(params?: any) {
    return axiosClient.get("/purposes", {
      params,
    });
  },
  getPurpose(id: string) {
    return axiosClient.post(`/purposes/${id}`);
  },
  createPurpose(data: any) {
    return axiosClient.post(`/purposes`, data);
  },
  updatePurpose(id: string, data: any) {
    return axiosClient.put(`/purposes/${id}`, data);
  },
  deletePurpose(id: string) {
    return axiosClient.delete(`/purposes/${id}`);
  },
};

export default purposeApi;
