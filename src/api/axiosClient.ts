import axios from "axios";
import LocalStorage from "../constants/LocalStorage";
import { message } from "antd";
// https://love-travel-api.herokuapp.com/
export const axiosClient = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL: "https://love-travel-api.herokuapp.com/api",
  baseURL: "https://love-travel-api-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem(LocalStorage.accessToken);
    if (accessToken) {
      config.headers.authorization = accessToken;
    }
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
    const result = { ...error.response.data, status: error.response.status };
    return Promise.reject(result);
  }
);
