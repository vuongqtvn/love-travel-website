import { axiosClient } from ".";

const userApi = {
  getUsers: (params?: any) => {
    return axiosClient.get(`/user`, { params });
  },
  updateUser: (data?: any) => {
    return axiosClient.patch(`/user`, data);
  },
  getUser: (id: string) => {
    return axiosClient.get(`/user/${id}`);
  },
  getUserPost: (id: string, params?: any) => {
    return axiosClient.get(`/user_post/${id}`, { params });
  },
  getUserPlaces: (id: string, params?: any) => {
    return axiosClient.get(`/user-places/${id}`, { params });
  },
  getUserSavedPlaces(id: string, params?: any) {
    return axiosClient.get(`/user-saved-places/${id}`, {
      params,
    });
  },
  follow(id: any) {
    return axiosClient.get(`/user/${id}/follow`);
  },
  unFollow(id: any) {
    return axiosClient.get(`/user/${id}/unfollow`);
  },
};

export default userApi;
