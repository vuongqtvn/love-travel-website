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
};

export default benefitApi;
