import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { placeApi } from "../../../api";
import globalApi from "../../../api/globalApi";
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
  data: {
    tags: TagType[];
    benefits: BenefitType[];
    regions: RegionType[];
    purposes: PurposeType[];
    categories: CategoryType[];
  } | null;
  place: PlaceType | null;
  places: PlaceType[];
  placesOptions: {
    total: number;
    pageSize: number;
    limit: number;
    page: number;
  };
  loading: {
    get: boolean;
    add: boolean;
    edit: boolean;
    getPlaces: boolean;
  };
}

const initialState: AdminPlaceState = {
  data: null,
  place: null,
  places: [],
  placesOptions: {
    total: 0,
    pageSize: 1,
    limit: 10,
    page: 1,
  },
  loading: {
    get: false,
    add: false,
    edit: false,
    getPlaces: false,
  },
};

export const getAddPlaces = createAsyncThunk(
  "admin-place/getAddPlaces",
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
      const res = await placeApi.addPlaceAdmin(data);
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

export const getPlaces = createAsyncThunk(
  "admin-place/getPlaces",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await placeApi.getPlaces(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePlace = createAsyncThunk(
  "admin-place/deletePlace",
  async (id: any, { rejectWithValue }) => {
    try {
      const res = await placeApi.deletePlace(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const adminPlaceSlice = createSlice({
  name: "admin-place",
  initialState,
  reducers: {
    clearPlace(state: any) {
      state.place = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddPlaces.pending, (state) => {
        state.loading.get = true;
      })
      .addCase(getAddPlaces.fulfilled, (state, action: any) => {
        state.loading.get = false;
        state.data = action.payload.data;
      })
      .addCase(getAddPlaces.rejected, (state, action) => {
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
      })
      .addCase(getPlaces.pending, (state) => {
        state.loading.getPlaces = true;
      })
      .addCase(getPlaces.fulfilled, (state, action: any) => {
        state.loading.getPlaces = false;
        state.places = action.payload.places;
        state.placesOptions = action.payload.options;
      })
      .addCase(getPlaces.rejected, (state) => {
        state.loading.getPlaces = false;
      });
  },
});

export const { clearPlace } = adminPlaceSlice.actions;

export default adminPlaceSlice.reducer;
