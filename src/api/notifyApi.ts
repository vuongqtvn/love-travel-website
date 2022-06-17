import { axiosClient } from ".";

const notifyApi = {
  getAllNotifies: () => {
    return axiosClient.get("/notifies");
  },
  createNotify: (message: any) => {
    return axiosClient.post(`/notify`, message);
  },
  deleteNotify: (message: any) => {
    return axiosClient.delete(`/notify/${message.id}?url=${message.url}`);
  },
  readNotify: (id: any) => {
    return axiosClient.patch(`/isReadNotify/${id}`);
  },
  deleteAllNotify: () => {
    return axiosClient.delete("/deleteAllNotify");
  },
};

export default notifyApi;
