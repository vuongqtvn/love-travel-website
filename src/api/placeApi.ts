import { axiosClient } from ".";

const placeApi = {
  getPlaces(params?: any) {
    return axiosClient.get("/places", {
      params,
    });
  },
  getPlace(id: string) {
    return axiosClient.post(`/places/${id}`);
  },
};

export default placeApi;
