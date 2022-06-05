import { axiosClient } from ".";

const acceptApi = {
  getPlacesAccept(params?: any) {
    return axiosClient.get("/places-accept", {
      params,
    });
  },
  getPostsAccept(params?: any) {
    return axiosClient.get(`/posts-accept`, {
      params,
    });
  },
  acceptPlace(id: string) {
    return axiosClient.get(`/place-accept/${id}`);
  },
  acceptPost(id: string) {
    return axiosClient.get(`/post-accept/${id}`);
  },
};

export default acceptApi;
