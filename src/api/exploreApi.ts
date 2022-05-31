import { axiosClient } from ".";

const exploreApi = {
  getDiscover(params?: any) {
    return axiosClient.get("/post", {
      params,
    });
  },
};

export default exploreApi;
