import { axiosClient } from ".";

const reviewApi = {
  addReview: (data: any) => {
    return axiosClient.post(`/post`, data);
  },
};

export default reviewApi;
