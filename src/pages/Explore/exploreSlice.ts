import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import exploreApi from "../../api/exploreApi";

const initialState = {
  posts: [],
  loading: {
    getDiscover: false,
  },
};

export const getDiscover = createAsyncThunk(
  "explore/getDiscover",
  async (_, { rejectWithValue }) => {
    try {
      const res = await exploreApi.getDiscover();
      return res;
    } catch (error) {
      return rejectWithValue(error);
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
      })
      .addCase(getDiscover.rejected, (state) => {
        state.loading.getDiscover = false;
      });
  },
});

// export const {} = exploreSlice.actions;

export default exploreSlice.reducer;
