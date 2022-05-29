import { axiosClient } from ".";

const locationApi = {
  getLocation(address: string) {
    return axiosClient.post("/search-map", {
      address,
    });
  },
};

export default locationApi;
