import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api";
import { PlaceType } from "../../types";
import { IUser } from "../../types/auth.type";
import { setUser } from "../Auth/authSlice";

export interface ProfileState {
  posts: {
    data: any;
    total: number;
    loading: boolean;
  };
  places: {
    data: PlaceType[];
    total: number;
    loading: boolean;
  };
  saved: {
    data: PlaceType[];
    total: number;
    loading: boolean;
  };
  loading: boolean;
  profile: IUser | null;
}

const initialState: ProfileState = {
  loading: false,
  saved: {
    data: [],
    total: 0,
    loading: false,
  },
  profile: null,
  places: {
    data: [],
    total: 0,
    loading: false,
  },
  posts: {
    data: [],
    total: 0,
    loading: false,
  },
};

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (id: any, { rejectWithValue }) => {
    try {
      const data = await userApi.getUser(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPostUser = createAsyncThunk(
  "profile/getPostUser",
  async ({ id, params }: any, { rejectWithValue }) => {
    try {
      const data = await userApi.getUserPost(id, params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserPlaces = createAsyncThunk(
  "profile/getUserPlaces",
  async ({ id, params }: any, { rejectWithValue }) => {
    try {
      const data = await userApi.getUserPlaces(id, params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserSavedPlaces = createAsyncThunk(
  "profile/getUserSavedPlaces",
  async ({ id, params }: any, { rejectWithValue }) => {
    try {
      const data = await userApi.getUserSavedPlaces(id, params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "profile/updateUser",
  async (data: any, { rejectWithValue, dispatch }) => {
    try {
      const res = await userApi.updateUser(data);
      dispatch(setUser(res.data.user));
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action: any) => {
        state.loading = false;
        const { user } = action.payload;
        state.profile = user;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action: any) => {
        state.loading = false;
        const { user } = action.payload;
        const profile = state.profile?._id === user._id ? user : state.profile;
        state.profile = profile;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getPostUser.pending, (state) => {
        state.posts.loading = true;
      })
      .addCase(getPostUser.fulfilled, (state, action: any) => {
        state.posts.loading = false;
        const { posts, total } = action.payload;

        state.posts.data = posts;
        state.posts.total = total;
      })
      .addCase(getPostUser.rejected, (state, action) => {
        state.posts.loading = false;
      })
      .addCase(getUserPlaces.pending, (state) => {
        state.places.loading = true;
      })
      .addCase(getUserPlaces.fulfilled, (state, action: any) => {
        state.places.loading = false;
        const { places, total } = action.payload;

        state.places.data = places;
        state.places.total = total;
      })
      .addCase(getUserPlaces.rejected, (state, action) => {
        state.places.loading = false;
      })
      .addCase(getUserSavedPlaces.pending, (state) => {
        state.saved.loading = true;
      })
      .addCase(getUserSavedPlaces.fulfilled, (state, action: any) => {
        state.saved.loading = false;
        const { places, total } = action.payload;

        state.saved.data = places;
        state.saved.total = total;
      })
      .addCase(getUserSavedPlaces.rejected, (state, action) => {
        state.saved.loading = false;
      });
  },
});

// export const {} = profileSlice.actions;

export default profileSlice.reducer;
