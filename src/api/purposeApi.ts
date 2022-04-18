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
};

export default purposeApi;
