import { axiosClient } from ".";

const globalApi = {
  getAddPlaces() {
    return axiosClient.get("/add-place");
  },
};

export default globalApi;
