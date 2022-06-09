import { axiosClient } from ".";

const placeApi = {
  getPlaces(params?: any) {
    return axiosClient.get("/places", {
      params,
    });
  },
  getSavedPlaces(params?: any) {
    return axiosClient.get("/get-save-places", {
      params,
    });
  },
  getPlaceReview(id: string) {
    return axiosClient.get(`/place_post/${id}`);
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
  addPlaceAdmin(data: any) {
    return axiosClient.post("/places-create", data);
  },
  editPlace(id: string, data: any) {
    return axiosClient.put(`/places/${id}`, data);
  },
  deletePlace(id: string) {
    return axiosClient.delete(`/places/${id}`);
  },
  savePlace(id: any) {
    return axiosClient.get(`/save-place/${id}`);
  },
  unSavePlace(id: any) {
    return axiosClient.get(`/un-save-place/${id}`);
  },
};

export default placeApi;
