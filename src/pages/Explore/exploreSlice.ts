import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { placeApi, userApi } from "../../api";
import exploreApi from "../../api/exploreApi";

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

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {},
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

// export const {} = exploreSlice.actions;

export default exploreSlice.reducer;
