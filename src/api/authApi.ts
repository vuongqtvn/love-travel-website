import { axiosClient } from ".";
import { ILogin, IRegister } from "../types/auth.type";

const authApi = {
  login: (data: ILogin) => {
    return axiosClient.post(`/login`, data);
  },
  register: (data: IRegister) => {
    return axiosClient.post(`/register`, data);
  },
  refreshToken: (refreshToken: string) => {
    return axiosClient.post(`/refresh_token`, {
      refreshToken,
    });
  },
};

export default authApi;
