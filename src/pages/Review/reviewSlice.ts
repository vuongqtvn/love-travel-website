import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { placeApi } from "../../api";
import { PlaceType, RequestState } from "../../types";

export interface SearchState {
  places: PlaceType[];
  placeSelected: PlaceType | null;
  api: {
    searchPlaces: RequestState;
    reviewPlace: RequestState;
  };
}

const initialState: SearchState = {
  places: [],
  placeSelected: null,
  api: {
    searchPlaces: {
      status: "not_started",
      error: null,
    },
    reviewPlace: {
      status: "not_started",
      error: null,
    },
  },
};

export const searchPlaces = createAsyncThunk(
  "review/searchPlaces",
  async (params: any, thunkApi) => {
    try {
      const data = await placeApi.getPlaces(params);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const reviewPlace = createAsyncThunk(
  "review/reviewPlace",
  async (data, thunkApi) => {
    // try {
    //   const data = await placeApi.getPlaces(data);
    //   return data;
    // } catch (error) {
    //   return thunkApi.rejectWithValue(error);
    // }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPlaces.pending, (state) => {
        state.api.searchPlaces.status = "pending";
      })
      .addCase(searchPlaces.fulfilled, (state, action: any) => {
        state.places = action.payload.places;
        state.api.searchPlaces.status = "fulfilled";
      })
      .addCase(searchPlaces.rejected, (state) => {
        state.api.searchPlaces.status = "rejected";
      })
      .addCase(searchPlaces.pending, (state) => {
        state.api.searchPlaces.status = "pending";
      })
      .addCase(searchPlaces.fulfilled, (state, action: any) => {
        state.places = action.payload.places;
        state.api.searchPlaces.status = "fulfilled";
      })
      .addCase(searchPlaces.rejected, (state) => {
        state.api.searchPlaces.status = "rejected";
      });
  },
});

export default reviewSlice.reducer;
