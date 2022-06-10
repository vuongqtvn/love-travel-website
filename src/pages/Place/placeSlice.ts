import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { placeApi } from "../../api";
import { IReview, PlaceType, RequestState } from "../../types";

export interface PlaceState {
  reviews: IReview[];
  place: PlaceType | null;
  placesRelated: PlaceType[];
  api: {
    getPlace: RequestState;
    getReviews: RequestState;
    getPlaceRelated: RequestState;
  };
}

const initialState: PlaceState = {
  reviews: [],
  place: null,
  placesRelated: [],
  api: {
    getPlace: {
      status: "not_started",
      error: null,
    },
    getReviews: {
      status: "not_started",
      error: null,
    },
    getPlaceRelated: {
      status: "not_started",
      error: null,
    },
  },
};

export const getPlace = createAsyncThunk(
  "place/getPlace",
  async (id: string, thunkApi) => {
    try {
      const data = await placeApi.getPlace(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getReviews = createAsyncThunk(
  "place/getReviews",
  async (id: string, thunkApi) => {
    try {
      const data = await placeApi.getPlaceReview(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getPlaceRelated = createAsyncThunk(
  "place/getPlaceRelated",
  async (_, thunkApi) => {
    try {
      const data = await placeApi.getPlaces({
        limit: 4,
        page: 1,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const savePlace = createAsyncThunk(
  "place/savePlace",
  async (id: string, thunkApi) => {
    try {
      const data = await placeApi.savePlace(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const unSavePlace = createAsyncThunk(
  "place/unSavePlace",
  async (id: string, thunkApi) => {
    try {
      const data = await placeApi.unSavePlace(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    clearPlace(state: any) {
      state.reviews = [];
      state.place = null;
      state.placesRelated = [];
      state.api = {
        getPlace: {
          status: "not_started",
          error: null,
        },
        getReviews: {
          status: "not_started",
          error: null,
        },
        getPlaceRelated: {
          status: "not_started",
          error: null,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlace.pending, (state) => {
        state.api.getPlace.status = "pending";
      })
      .addCase(getPlace.fulfilled, (state, action: any) => {
        state.api.getPlace.status = "fulfilled";
        state.place = action.payload.place;
      })
      .addCase(getPlace.rejected, (state, action) => {
        state.api.getPlace.status = "rejected";
        state.api.getPlace.error = action.payload;
      })
      .addCase(getReviews.pending, (state) => {
        state.api.getReviews.status = "pending";
      })
      .addCase(getReviews.fulfilled, (state, action: any) => {
        state.api.getReviews.status = "fulfilled";
        state.reviews = action.payload.posts;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.api.getReviews.status = "rejected";
        state.api.getReviews.error = action.payload;
      })
      .addCase(getPlaceRelated.pending, (state) => {
        state.api.getPlaceRelated.status = "pending";
      })
      .addCase(getPlaceRelated.fulfilled, (state, action: any) => {
        state.api.getPlaceRelated.status = "fulfilled";
        state.placesRelated = action.payload.places;
      })
      .addCase(getPlaceRelated.rejected, (state, action) => {
        state.api.getPlaceRelated.status = "rejected";
        state.api.getPlaceRelated.error = action.payload;
      });
  },
});

export const { clearPlace } = placeSlice.actions;

export default placeSlice.reducer;
