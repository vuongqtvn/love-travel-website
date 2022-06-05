import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accountApi } from "../../../api";
import reviewApi from "../../../api/reviewApi";

export interface AdminPlaceState {
  posts: any;
  total: number;
  loading: {
    getReviews: boolean;
  };
}

const initialState: AdminPlaceState = {
  posts: [],
  total: 0,
  loading: {
    getReviews: false,
  },
};

export const getReviews = createAsyncThunk(
  "admin-review/getReviews",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await reviewApi.getReviews(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const adminReviewSlice = createSlice({
  name: "admin-review",
  initialState,
  reducers: {
    setPosts(state: any, action: any) {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.loading.getReviews = true;
      })
      .addCase(getReviews.fulfilled, (state, action: any) => {
        state.loading.getReviews = false;
        state.posts = action.payload.posts;
        state.total = action.payload.total;
      })
      .addCase(getReviews.rejected, (state) => {
        state.loading.getReviews = false;
      });
  },
});

export const { setPosts } = adminReviewSlice.actions;

export default adminReviewSlice.reducer;
