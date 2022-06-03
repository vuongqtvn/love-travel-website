import { axiosClient } from ".";

const placeApi = {
  getAccounts(params?: any) {
    return axiosClient.get("/account", {
      params,
    });
  },
  getAccount(id: string) {
    return axiosClient.get(`/account/${id}`);
  },
};

export default placeApi;
