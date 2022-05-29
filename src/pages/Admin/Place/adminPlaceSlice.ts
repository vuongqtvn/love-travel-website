import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  benefitApi,
  categoryApi,
  placeApi,
  purposeApi,
  regionApi,
  tagApi,
} from "../../../api";
import locationApi from "../../../api/locationApi";
import {
  BenefitType,
  CategoryType,
  PlaceType,
  PurposeType,
  RegionType,
  TagType,
} from "../../../types";

export interface AdminPlaceState {
  regions: RegionType[];
  benefits: BenefitType[];
  tags: TagType[];
  purposes: PurposeType[];
  categories: CategoryType[];
  place: PlaceType | null;
  loading: {
    get: boolean;
    add: boolean;
    edit: boolean;
  };
}

const initialState: AdminPlaceState = {
  regions: [],
  benefits: [],
  tags: [],
  purposes: [],
  categories: [],
  place: null,
  loading: {
    get: false,
    add: false,
    edit: false,
  },
};

export const getRegions = createAsyncThunk(
  "admin-place/getRegions",
  async (_, thunkApi) => {
    try {
      const data = await regionApi.getRegions({
        limit: 50,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getPurposes = createAsyncThunk(
  "admin-place/getPurposes",
  async (_, thunkApi) => {
    try {
      const data = await purposeApi.getPurposes({
        limit: 50,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "admin-place/getCategories",
  async (_, thunkApi) => {
    try {
      const data = await categoryApi.getCategories({
        limit: 50,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getTags = createAsyncThunk(
  "admin-place/getTags",
  async (_, thunkApi) => {
    try {
      const data = await tagApi.getTags({
        limit: 50,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getBenefits = createAsyncThunk(
  "admin-place/getBenefits",
  async (_, thunkApi) => {
    try {
      const data = await benefitApi.getBenefits({
        limit: 50,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getLocation = createAsyncThunk(
  "admin-place/getLocation",
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
  "admin-place/getPlace",
  async (id: string, thunkApi) => {
    try {
      const data = await placeApi.getPlaceAdmin(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addPlace = createAsyncThunk(
  "admin-place/addPlace",
  async (data: any, thunkApi) => {
    try {
      const res = await placeApi.addPlace(data);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const editPlace = createAsyncThunk(
  "admin-place/editPlace",
  async ({ id, data }: { id: any; data: any }, thunkApi) => {
    try {
      const res = await placeApi.editPlace(id, data);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const adminPlaceSlice = createSlice({
  name: "admin-place",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegions.pending, (state) => {
        state.loading.get = true;
      })
      .addCase(getRegions.fulfilled, (state, action: any) => {
        state.loading.get = false;
        state.regions = action.payload.regions;
      })
      .addCase(getRegions.rejected, (state, action) => {
        state.loading.get = false;
      })
      .addCase(getCategories.pending, (state) => {
        state.loading.get = true;
      })
      .addCase(getCategories.fulfilled, (state, action: any) => {
        state.loading.get = false;
        state.categories = action.payload.categories;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading.get = false;
      })
      .addCase(getPurposes.pending, (state) => {
        state.loading.get = true;
      })
      .addCase(getPurposes.fulfilled, (state, action: any) => {
        state.loading.get = false;
        state.purposes = action.payload.purposes;
      })
      .addCase(getPurposes.rejected, (state, action) => {
        state.loading.get = false;
      })
      .addCase(getBenefits.pending, (state) => {
        state.loading.get = true;
      })
      .addCase(getBenefits.fulfilled, (state, action: any) => {
        state.loading.get = false;
        state.benefits = action.payload.benefits;
      })
      .addCase(getBenefits.rejected, (state, action) => {
        state.loading.get = false;
      })
      .addCase(getTags.pending, (state) => {
        state.loading.get = true;
      })
      .addCase(getTags.fulfilled, (state, action: any) => {
        state.loading.get = false;
        state.tags = action.payload.tags;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.loading.get = false;
      })
      .addCase(getPlace.pending, (state) => {
        state.loading.get = true;
      })
      .addCase(getPlace.fulfilled, (state, action: any) => {
        state.loading.get = false;
        state.place = action.payload.place;
      })
      .addCase(getPlace.rejected, (state, action) => {
        state.loading.get = false;
      });
  },
});

// export const {} = adminPlaceSlice.actions;

export default adminPlaceSlice.reducer;
