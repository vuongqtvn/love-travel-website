import { axiosClient } from ".";

const placeApi = {
  getPlaces(params?: any) {
    return axiosClient.get("/places", {
      params,
    });
  },
  getPlace(id: string) {
    return axiosClient.get(`/places/${id}`);
  },
  getPlaceAdmin(id: string) {
    return axiosClient.get(`/places-admin/${id}`);
  },
  addPlace(data: any) {
    return axiosClient.post(`/places`, data);
  },
  editPlace(id: string, data: any) {
    return axiosClient.put(`/places/${id}`, data);
  },
};

export default placeApi;
