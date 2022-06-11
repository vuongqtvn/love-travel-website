import axios from "axios";
import { message } from "antd";

export const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://love-travel-api-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    const result = { ...response.data, status: response.status };
    return result;
  },
  (error) => {
    if (error.response.status === 401) {
      message.error(error.response.data.message);
    }

    if (error.response.status === 400) {
      message.error(error.response.data.message);
    }

    const result = { ...error.response.data, status: error.response.status };
    return Promise.reject(result);
  }
);

export const setToken = (token: string) => {
  if (token) {
    axiosClient.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
