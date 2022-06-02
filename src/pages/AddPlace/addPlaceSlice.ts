import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { placeApi } from "../../api";
import globalApi from "../../api/globalApi";
import locationApi from "../../api/locationApi";
import {
  BenefitType,
  CategoryType,
  PurposeType,
  RegionType,
  TagType,
} from "../../types";

interface RootState {
  data: {
    tags: TagType[];
    benefits: BenefitType[];
    regions: RegionType[];
    purposes: PurposeType[];
    categories: CategoryType[];
  } | null;
  loading: boolean;
}

const initialState: RootState = {
  data: null,
  loading: false,
};

export const getAddPlaces = createAsyncThunk(
  "addPlace/getAddPlaces",
  async (_, thunkApi) => {
    try {
      const data = await globalApi.getAddPlaces();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getLocation = createAsyncThunk(
  "addPlace/getLocation",
  async (address: string, thunkApi) => {
    try {
      const data = await locationApi.getLocation(address);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addPlace = createAsyncThunk(
  "addPlace/addPlace",
  async (data: any, thunkApi) => {
    try {
      const res = await placeApi.addPlace(data);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const addPlaceSlice = createSlice({
  name: "addPlace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddPlaces.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddPlaces.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(getAddPlaces.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default addPlaceSlice.reducer;
