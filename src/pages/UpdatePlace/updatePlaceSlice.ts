import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { placeApi } from "../../api";
import globalApi from "../../api/globalApi";
import locationApi from "../../api/locationApi";
import {
  BenefitType,
  CategoryType,
  PlaceType,
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
  place: PlaceType | null;
  loading: boolean;
}

const initialState: RootState = {
  data: null,
  place: null,
  loading: false,
};

export const getAddPlaces = createAsyncThunk(
  "updatePlace/getAddPlaces",
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
  "updatePlace/getLocation",
  async (address: string, thunkApi) => {
    try {
      const data = await locationApi.getLocation(address);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getPlace = createAsyncThunk(
  "updatePlace/getPlace",
  async (id: string, thunkApi) => {
    try {
      const data = await placeApi.getPlaceUser(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const editPlace = createAsyncThunk(
  "updatePlace/addPlace",
  async ({ id, data }: { id: any; data: any }, thunkApi) => {
    try {
      const res = await placeApi.updatePlaceUser(id, data);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const updatePlaceSlice = createSlice({
  name: "updatePlace",
  initialState,
  reducers: {
    clearPlace(state: any) {
      state.place = null;
    },
  },
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
      })
      .addCase(getPlace.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlace.fulfilled, (state, action: any) => {
        state.loading = false;
        state.place = action.payload.place;
      })
      .addCase(getPlace.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { clearPlace } = updatePlaceSlice.actions;

export default updatePlaceSlice.reducer;
