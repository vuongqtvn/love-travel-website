import { axiosClient } from ".";

const dashboardApi = {
  getInfo: () => {
    return axiosClient.get(`/dashboard/info`);
  },
  getAccounts: () => {
    return axiosClient.get(`/dashboard/account`);
  },
  getPlaces: () => {
    return axiosClient.get(`/dashboard/place`);
  },
  getRegions: () => {
    return axiosClient.get(`/dashboard/region`);
  },
  getReviews: () => {
    return axiosClient.get(`/dashboard/review`);
  },
};

export default dashboardApi;
