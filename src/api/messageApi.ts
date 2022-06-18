import { axiosClient } from ".";

const messageApi = {
  getConversations() {
    return axiosClient.get(`/conversations`);
  },
  addMessage(message: any) {
    return axiosClient.post("/message", message);
  },
  getMessages(id: any, params: any) {
    return axiosClient.get(`/message/${id}`, {
      params,
    });
  },
  deleteConversation(id: any) {
    return axiosClient.delete(`/conversation/${id}`);
  },
  deleteMessage(id: any) {
    return axiosClient.delete(`/message/${id}`);
  },
};

export default messageApi;
