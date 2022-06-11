import { axiosClient } from ".";

const reviewApi = {
  addReview: (data: any) => {
    return axiosClient.post(`/post`, data);
  },
  addReviewAdmin: (data: any) => {
    return axiosClient.post(`/posts-create`, data);
  },
  deleteReview: (id: any) => {
    return axiosClient.delete(`/post/${id}`);
  },
  getReviews: (params: any) => {
    return axiosClient.get("/post", {
      params,
    });
  },
  updateReview: (id: any, data: any) => {
    return axiosClient.patch(`/post/${id}`, data);
  },
  deleteReviewUser: (id: any) => {
    return axiosClient.delete(`/user_post/${id}`);
  },
};

export default reviewApi;
