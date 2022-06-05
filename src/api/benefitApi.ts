import { axiosClient } from ".";

const benefitApi = {
  getBenefits(params?: any) {
    return axiosClient.get("/benefits", {
      params,
    });
  },
  getBenefit(id: string) {
    return axiosClient.post(`/benefits/${id}`);
  },
  createBenefit(data: any) {
    return axiosClient.post(`/benefits`, data);
  },
  updateBenefit(id: string, data: any) {
    return axiosClient.put(`/benefits/${id}`, data);
  },
  deleteBenefit(id: string) {
    return axiosClient.delete(`/benefits/${id}`);
  },
};

export default benefitApi;
