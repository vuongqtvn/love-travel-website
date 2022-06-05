import { axiosClient } from ".";

const accountApi = {
  getAccounts(params?: any) {
    return axiosClient.get("/account", {
      params,
    });
  },
  getAccount(id: string) {
    return axiosClient.get(`/account/${id}`);
  },
  updateAccount(id: string, data: any) {
    return axiosClient.put(`/account/${id}`, data);
  },
};

export default accountApi;
