import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api";
import { PlaceType } from "../../types";
import { IUser } from "../../types/auth.type";
import { DeleteData, EditData } from "../../utils/helper";
import {
  createReviewComment,
  deleteReview,
  likeReview,
  unlikeReview,
  updateReview,
} from "../Explore/exploreSlice";

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
  error: boolean;
  profile: IUser | null;
}

const initialState: ProfileState = {
  loading: false,
  error: false,
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
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state: any, action: any) => {
      state.profile = action.payload;
    },
    clearProfile(state: any) {
      state.loading = false;
      state.saved = {
        data: [],
        total: 0,
        loading: false,
      };
      state.profile = null;
      state.places = {
        data: [],
        total: 0,
        loading: false,
      };
      state.posts = {
        data: [],
        total: 0,
        loading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProfile.fulfilled, (state, action: any) => {
        const { user } = action.payload;
        state.loading = false;
        state.profile = user;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(likeReview.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts.data],
          action.payload.post._id,
          action.payload.post
        );
        state.posts.data = posts;
      })
      .addCase(unlikeReview.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts.data],
          action.payload.post._id,
          action.payload.post
        );
        state.posts.data = posts;
      })
      .addCase(updateReview.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts.data],
          action.payload.post._id,
          action.payload.post
        );
        state.posts.data = posts;
      })
      .addCase(deleteReview.fulfilled, (state, action: any) => {
        const posts = DeleteData(
          [...state.posts.data],
          action.payload.post._id
        );
        state.posts.data = posts;
      })
      .addCase(createReviewComment.fulfilled, (state, action: any) => {
        const posts = EditData(
          [...state.posts.data],
          action.payload.post._id,
          action.payload.post
        );
        state.posts.data = posts;
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

export const { clearProfile, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
