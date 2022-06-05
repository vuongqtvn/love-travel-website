import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import globalApi from "../../../api/globalApi";
import {
  BenefitType,
  CategoryType,
  PlaceType,
  PurposeType,
  RegionType,
  TagType,
} from "../../../types";

export interface AdminPlaceState {
  tags: TagType[];
  benefits: BenefitType[];
  regions: RegionType[];
  purposes: PurposeType[];
  categories: CategoryType[];
  places: PlaceType[];
  loading: boolean;
}

const initialState: AdminPlaceState = {
  tags: [],
  benefits: [],
  regions: [],
  purposes: [],
  categories: [],
  places: [],
  loading: false,
};

export const getGeneral = createAsyncThunk(
  "admin-general/getGeneral",
  async (_, { rejectWithValue }) => {
    try {
      const res = await globalApi.getGeneral();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const adminGeneralSlice = createSlice({
  name: "admin-general",
  initialState,
  reducers: {
    setGeneral(state: any, action: any) {
      Object.assign(state, action.payload);
    },
    resetGeneral(state: any) {
      state.loading = false;
      state.benefits = [];
      state.tags = [];
      state.categories = [];
      state.purposes = [];
      state.regions = [];
      state.places = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGeneral.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGeneral.fulfilled, (state, action: any) => {
        state.loading = false;
        state.benefits = action.payload.benefits;
        state.tags = action.payload.tags;
        state.categories = action.payload.categories;
        state.purposes = action.payload.purposes;
        state.regions = action.payload.regions;
        state.places = action.payload.places;
      })
      .addCase(getGeneral.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setGeneral, resetGeneral } = adminGeneralSlice.actions;

export default adminGeneralSlice.reducer;
