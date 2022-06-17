import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewApi from "../../api/reviewApi";
import { createNotify } from "../../redux/notifySlice";
import { PlaceType, RequestState } from "../../types";

export interface SearchState {
  placeSelected: PlaceType | null;
  api: {
    reviewPlace: RequestState;
  };
}

const initialState: SearchState = {
  placeSelected: null,
  api: {
    reviewPlace: {
      status: "not_started",
      error: null,
    },
  },
};

export const reviewPlace = createAsyncThunk(
  "review/reviewPlace",
  async (
    { data, socket, user }: { data: any; socket: any; user: any },
    thunkApi
  ) => {
    try {
      const res: any = await reviewApi.addReview(data);

      // notify
      const message = {
        id: res.newPost._id,
        text: "thêm bài viết đánh giá mới",
        recipients: res.newPost.user.followers,
        url: `/review/${res.newPost._id}`,
        content: data.content,
        image: data.images?.[0]?.url,
      };

      thunkApi.dispatch(createNotify({ message, user, socket }));
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setPlaceReview(state: any, action: any) {
      state.placeSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reviewPlace.pending, (state) => {
        state.api.reviewPlace.status = "pending";
      })
      .addCase(reviewPlace.fulfilled, (state, action: any) => {
        state.api.reviewPlace.status = "fulfilled";
      })
      .addCase(reviewPlace.rejected, (state) => {
        state.api.reviewPlace.status = "rejected";
      });
  },
});

export const { setPlaceReview } = reviewSlice.actions;

export default reviewSlice.reducer;
