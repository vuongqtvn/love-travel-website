import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  categoryApi,
  placeApi,
  purposeApi,
  regionApi,
  benefitApi,
  tagApi,
} from "../../api";

import {
  BenefitType,
  PlaceType,
  RegionType,
  RequestState,
  TagType,
  PurposeType,
  CategoryType,
} from "../../types";

export interface SearchState {
  regions: RegionType[] | [];
  purposes: PurposeType[] | [];
  categories: CategoryType[] | [];
  places: PlaceType[] | [];
  placesOptions: {
    total: number;
    pageSize: number;
    limit: number;
    page: number;
  };
  benefits: BenefitType[] | [];
  tags: TagType[] | [];
  api: {
    getRegions: RequestState;
    getPurposes: RequestState;
    getCategories: RequestState;
    getBenefits: RequestState;
    getTags: RequestState;
    getPlaceSearch: RequestState;
  };
}

const initialState: SearchState = {
  regions: [],
  purposes: [],
  categories: [],
  places: [],
  tags: [],
  benefits: [],
  placesOptions: {
    total: 0,
    pageSize: 1,
    limit: 10,
    page: 1,
  },
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
    getBenefits: {
      status: "not_started",
      error: null,
    },
    getTags: { status: "not_started", error: null },
    getPlaceSearch: {
      status: "not_started",
      error: null,
    },
  },
};

export const getRegions = createAsyncThunk(
  "search/getRegions",
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
  "search/getPurposes",
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
  "search/getCategories",
  async (_, thunkApi) => {
    try {
      const data = await categoryApi.getCategories();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getBenefits = createAsyncThunk(
  "search/getBenefits",
  async (_, thunkApi) => {
    try {
      const data = await benefitApi.getBenefits();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getTags = createAsyncThunk(
  "search/getTags",
  async (_, thunkApi) => {
    try {
      const data = await tagApi.getTags();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getPlaceSearch = createAsyncThunk(
  "search/getPlaceSearch",
  async (params: any, thunkApi) => {
    try {
      const data = await placeApi.getPlaces(params);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
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
      .addCase(getBenefits.pending, (state) => {
        state.api.getBenefits.status = "pending";
      })
      .addCase(getBenefits.fulfilled, (state, action: any) => {
        state.api.getBenefits.status = "fulfilled";
        state.benefits = action.payload.benefits;
      })
      .addCase(getBenefits.rejected, (state, action) => {
        state.api.getBenefits.status = "rejected";
        state.api.getBenefits.error = action.payload;
      })
      .addCase(getTags.pending, (state) => {
        state.api.getTags.status = "pending";
      })
      .addCase(getTags.fulfilled, (state, action: any) => {
        state.api.getTags.status = "fulfilled";
        state.tags = action.payload.tags;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.api.getTags.status = "rejected";
        state.api.getTags.error = action.payload;
      })
      .addCase(getPlaceSearch.pending, (state) => {
        state.api.getPlaceSearch.status = "pending";
      })
      .addCase(getPlaceSearch.fulfilled, (state, action: any) => {
        state.api.getPlaceSearch.status = "fulfilled";
        state.places = action.payload.places;
        state.placesOptions = action.payload.options;
      })
      .addCase(getPlaceSearch.rejected, (state, action) => {
        state.api.getPlaceSearch.status = "rejected";
        state.api.getPlaceSearch.error = action.payload;
      });
  },
});

// export const {} = searchSlice.actions;

export default searchSlice.reducer;
