import { axiosClient } from ".";

const commentApi = {
  createComment: (data: any) => {
    return axiosClient.post(`/comment`, data);
  },
};

export default commentApi;
