import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryApi, placeApi, purposeApi, regionApi } from "../../api";

import {
  CategoryType,
  PlaceType,
  PurposeType,
  RegionType,
  RequestState,
} from "../../types";

export interface HomeState {
  regions: RegionType[] | [];
  purposes: PurposeType[] | [];
  categories: CategoryType[] | [];
  places: PlaceType[] | [];
  api: {
    getRegions: RequestState;
    getPurposes: RequestState;
    getCategories: RequestState;
    getPlaceHot: RequestState;
  };
}

const initialState: HomeState = {
  regions: [],
  purposes: [],
  categories: [],
  places: [],
  api: {
    getRegions: {
      status: "not_started",
      error: null,
    },
    getPurposes: {
      status: "not_started",
      error: null,
    },
    getCategories: {
      status: "not_started",
      error: null,
    },
    getPlaceHot: {
      status: "not_started",
      error: null,
    },
  },
};

export const getRegions = createAsyncThunk(
  "home/getRegions",
  async (_, thunkApi) => {
    try {
      const data = await regionApi.getRegions();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getPurposes = createAsyncThunk(
  "home/getPurposes",
  async (_, thunkApi) => {
    try {
      const data = await purposeApi.getPurposes();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "home/getCategories",
  async (_, thunkApi) => {
    try {
      const data = await categoryApi.getCategories();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getPlaceHot = createAsyncThunk(
  "home/getPlaceHot",
  async (_, thunkApi) => {
    try {
      const data = await placeApi.getPlaces({ limit: 8, page: 1 });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegions.pending, (state) => {
        state.api.getRegions.status = "pending";
      })
      .addCase(getRegions.fulfilled, (state, action: any) => {
        state.api.getRegions.status = "fulfilled";
        state.regions = action.payload.regions;
      })
      .addCase(getRegions.rejected, (state, action) => {
        state.api.getRegions.status = "rejected";
        state.api.getRegions.error = action.payload;
      })
      .addCase(getCategories.pending, (state) => {
        state.api.getCategories.status = "pending";
      })
      .addCase(getCategories.fulfilled, (state, action: any) => {
        state.api.getCategories.status = "fulfilled";
        state.categories = action.payload.categories;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.api.getCategories.status = "rejected";
        state.api.getCategories.error = action.payload;
      })
      .addCase(getPurposes.pending, (state) => {
        state.api.getPurposes.status = "pending";
      })
      .addCase(getPurposes.fulfilled, (state, action: any) => {
        state.api.getPurposes.status = "fulfilled";
        state.purposes = action.payload.purposes;
      })
      .addCase(getPurposes.rejected, (state, action) => {
        state.api.getPurposes.status = "rejected";
        state.api.getPurposes.error = action.payload;
      })
      .addCase(getPlaceHot.pending, (state) => {
        state.api.getPlaceHot.status = "pending";
      })
      .addCase(getPlaceHot.fulfilled, (state, action: any) => {
        state.api.getPlaceHot.status = "fulfilled";
        state.places = action.payload.places;
      })
      .addCase(getPlaceHot.rejected, (state, action) => {
        state.api.getPlaceHot.status = "rejected";
        state.api.getPlaceHot.error = action.payload;
      });
  },
});

// export const {} = homeSlice.actions;

export default homeSlice.reducer;
