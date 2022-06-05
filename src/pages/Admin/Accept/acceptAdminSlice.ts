import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { acceptApi } from "../../../api";
import { PlaceType } from "../../../types";

export interface AdminAcceptState {
  places: PlaceType[] | null;
  placesTotal: number;
  posts: any;
  postsTotal: number;
  loading: {
    getPlacesAccept: boolean;
    getPostsAccept: boolean;
    acceptPlace: boolean;
    acceptPost: boolean;
  };
}

const initialState: AdminAcceptState = {
  places: null,
  placesTotal: 0,
  posts: null,
  postsTotal: 0,
  loading: {
    getPlacesAccept: false,
    getPostsAccept: false,
    acceptPlace: false,
    acceptPost: false,
  },
};

export const getPlacesAccept = createAsyncThunk(
  "admin-accept/getPlacesAccept",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await acceptApi.getPlacesAccept(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPostsAccept = createAsyncThunk(
  "admin-accept/getPostsAccept",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await acceptApi.getPostsAccept(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const acceptPlace = createAsyncThunk(
  "admin-accept/acceptPlace",
  async (id: any, { rejectWithValue }) => {
    try {
      const res = await acceptApi.acceptPlace(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const acceptPost = createAsyncThunk(
  "admin-accept/acceptPost",
  async (id: any, { rejectWithValue }) => {
    try {
      const res = await acceptApi.acceptPost(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const adminAcceptSlice = createSlice({
  name: "admin-accept",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlacesAccept.pending, (state) => {
        state.loading.getPlacesAccept = true;
      })
      .addCase(getPlacesAccept.fulfilled, (state, action: any) => {
        state.loading.getPlacesAccept = false;
        state.places = action.payload.places;
        state.placesTotal = action.payload.total;
      })
      .addCase(getPlacesAccept.rejected, (state) => {
        state.loading.getPlacesAccept = false;
      })
      .addCase(getPostsAccept.pending, (state) => {
        state.loading.getPostsAccept = true;
      })
      .addCase(getPostsAccept.fulfilled, (state, action: any) => {
        state.loading.getPostsAccept = false;
        state.posts = action.payload.posts;
        state.postsTotal = action.payload.total;
      })
      .addCase(getPostsAccept.rejected, (state) => {
        state.loading.getPostsAccept = false;
      });
  },
});

export default adminAcceptSlice.reducer;
