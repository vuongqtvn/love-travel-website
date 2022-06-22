import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dashboardApi } from "../../../api";

const initialState = {
  info: {
    regions: 0,
    places: 0,
    reviews: 0,
    accounts: 0,
    loading: false,
  },
  places: {
    data: [],
    loading: false,
  },
  accounts: {
    data: [],
    loading: false,
  },
  regions: {
    data: [],
    loading: false,
  },
  reviews: {
    data: [],
    loading: false,
  },
};

export const getDashboardInfo = createAsyncThunk(
  "dashboard/getDashboardInfo",
  async (_, thunkApi) => {
    try {
      const data = await dashboardApi.getInfo();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getDashboardPlaces = createAsyncThunk(
  "dashboard/getDashboardPlaces",
  async (_, thunkApi) => {
    try {
      const data = await dashboardApi.getPlaces();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getDashboardRegion = createAsyncThunk(
  "dashboard/getDashboardRegion",
  async (_, thunkApi) => {
    try {
      const data = await dashboardApi.getRegions();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getDashboardAccount = createAsyncThunk(
  "dashboard/getDashboardAccount",
  async (_, thunkApi) => {
    try {
      const data = await dashboardApi.getAccounts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getDashboardReviews = createAsyncThunk(
  "dashboard/getDashboardReviews",
  async (_, thunkApi) => {
    try {
      const data = await dashboardApi.getReviews();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardInfo.pending, (state) => {
        state.info.loading = true;
      })
      .addCase(getDashboardInfo.fulfilled, (state, action: any) => {
        state.info = action.payload.info;
        state.info.loading = false;
      })
      .addCase(getDashboardInfo.rejected, (state) => {
        state.info.loading = false;
      })
      .addCase(getDashboardAccount.pending, (state) => {
        state.accounts.loading = true;
      })
      .addCase(getDashboardAccount.fulfilled, (state, action: any) => {
        state.accounts.data = action.payload.users;
        state.accounts.loading = false;
      })
      .addCase(getDashboardAccount.rejected, (state) => {
        state.accounts.loading = false;
      })
      .addCase(getDashboardPlaces.pending, (state) => {
        state.places.loading = true;
      })
      .addCase(getDashboardPlaces.fulfilled, (state, action: any) => {
        state.places.data = action.payload.places;
        state.places.loading = false;
      })
      .addCase(getDashboardPlaces.rejected, (state) => {
        state.places.loading = false;
      })
      .addCase(getDashboardRegion.pending, (state) => {
        state.regions.loading = true;
      })
      .addCase(getDashboardRegion.fulfilled, (state, action: any) => {
        state.regions.data = action.payload.regions;
        state.regions.loading = false;
      })
      .addCase(getDashboardRegion.rejected, (state) => {
        state.regions.loading = false;
      })
      .addCase(getDashboardReviews.pending, (state) => {
        state.reviews.loading = true;
      })
      .addCase(getDashboardReviews.fulfilled, (state, action: any) => {
        state.reviews.data = action.payload.reviews;
        state.reviews.loading = false;
      })
      .addCase(getDashboardReviews.rejected, (state) => {
        state.reviews.loading = false;
      });
  },
});

export default dashboardSlice.reducer;
