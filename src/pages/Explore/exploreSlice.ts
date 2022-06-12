import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentApi, placeApi, userApi } from "../../api";
import exploreApi from "../../api/exploreApi";
import reviewApi from "../../api/reviewApi";
import { DeleteData, EditData } from "../../utils/helper";

const initialState = {
  posts: [],
  users: [],
  places: [],
  total: 0,
  loading: {
    getDiscover: false,
    getPlaceHot: false,
    getUserPositive: false,
  },
};

export const getDiscover = createAsyncThunk(
  "explore/getDiscover",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await exploreApi.getDiscover(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const likeReview = createAsyncThunk(
  "explore/likeReview",
  async ({ id, socket }: { id: any; socket: any }, { rejectWithValue }) => {
    try {
      const res = await reviewApi.likeReview(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const unlikeReview = createAsyncThunk(
  "explore/unlikeReview",
  async ({ id, socket }: { id: any; socket: any }, { rejectWithValue }) => {
    try {
      const res = await reviewApi.unlikeReview(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateReview = createAsyncThunk(
  "explore/updateReviewUser",
  async ({ id, data }: { id: any; data: any }, { rejectWithValue }) => {
    try {
      const res = await reviewApi.updateReview(id, data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "explore/deleteReviewUser",
  async ({ id, socket }: { id: any; socket: any }, { rejectWithValue }) => {
    try {
      const res = await reviewApi.deleteReviewUser(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPlaceHot = createAsyncThunk(
  "explore/getPlaceHot",
  async (_, thunkApi) => {
    try {
      const data = await placeApi.getPlaces({
        limit: 5,
        page: 1,
        sort: "-posts",
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserPositive = createAsyncThunk(
  "explore/getUserPositive",
  async (_, thunkApi) => {
    try {
      const data = await userApi.getUsers({
        limit: 5,
        page: 1,
        sort: "-posts",
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createReviewComment = createAsyncThunk(
  "explore/createReviewComment",
  async (
    { review, comment, socket }: { comment: any; review: any; socket: any },
    { rejectWithValue }
  ) => {
    try {
      const res = await commentApi.createComment({
        ...comment,
        postId: review._id,
        postUserId: review.user._id,
      });
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    setUsersExplore(state: any, action: any) {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDiscover.pending, (state) => {
        state.loading.getDiscover = true;
      })
      .addCase(getDiscover.fulfilled, (state, action: any) => {
        state.loading.getDiscover = false;
        state.posts = action.payload.posts;
        state.total = action.payload.total || 0;
      })
      .addCase(getDiscover.rejected, (state) => {
        state.loading.getDiscover = false;
      })
      .addCase(likeReview.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts],
          action.payload.post._id,
          action.payload.post
        );
        state.posts = posts;
      })
      .addCase(unlikeReview.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts],
          action.payload.post._id,
          action.payload.post
        );
        state.posts = posts;
      })
      .addCase(updateReview.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts],
          action.payload.post._id,
          action.payload.post
        );
        state.posts = posts;
      })
      .addCase(createReviewComment.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts],
          action.payload.post._id,
          action.payload.post
        );
        state.posts = posts;
      })
      .addCase(deleteReview.fulfilled, (state, action: any) => {
        const posts = DeleteData([...state.posts], action.payload.post._id);
        state.posts = posts;
      })
      .addCase(getPlaceHot.pending, (state) => {
        state.loading.getPlaceHot = true;
      })
      .addCase(getPlaceHot.fulfilled, (state, action: any) => {
        state.loading.getPlaceHot = false;
        state.places = action.payload.places;
      })
      .addCase(getPlaceHot.rejected, (state, action) => {
        state.loading.getPlaceHot = false;
      })
      .addCase(getUserPositive.pending, (state) => {
        state.loading.getUserPositive = true;
      })
      .addCase(getUserPositive.fulfilled, (state, action: any) => {
        state.loading.getUserPositive = false;
        state.users = action.payload.users;
      })
      .addCase(getUserPositive.rejected, (state, action) => {
        state.loading.getUserPositive = false;
      });
  },
});

export const { setUsersExplore } = exploreSlice.actions;

export default exploreSlice.reducer;
