import { axiosClient } from ".";

const globalApi = {
  getAddPlaces() {
    return axiosClient.get("/add-place");
  },
  getGeneral() {
    return axiosClient.get("/general");
  },
};

export default globalApi;
