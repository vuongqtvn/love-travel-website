import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setToken, userApi } from "../../api";
import authApi from "../../api/authApi";
import { createNotify, removeNotify } from "../../redux/notifySlice";
import { RootState } from "../../redux/store";
import { RequestState } from "../../types";
import { ILogin, IRegister, IUser } from "../../types/auth.type";
import { updateUser } from "../Profile/profileSlice";

interface AuthState {
  open: boolean;
  token: string | null;
  user: IUser | null;
  api: {
    login: RequestState;
    register: RequestState;
    refreshToken: RequestState;
  };
}

const initialState: AuthState = {
  open: false,
  token: null,
  user: null,
  api: {
    login: {
      status: "not_started",
      error: null,
    },
    register: {
      status: "not_started",
      error: null,
    },
    refreshToken: {
      status: "not_started",
      error: null,
    },
  },
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: ILogin, { rejectWithValue }) => {
    try {
      const res = await authApi.login(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: IRegister, { rejectWithValue }) => {
    try {
      const res = await authApi.register(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await authApi.refreshToken(token);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const followUser = createAsyncThunk(
  "auth/followUser",
  async (
    { user, socket }: { user: any; socket: any },
    { rejectWithValue, getState, dispatch }
  ) => {
    const state = getState() as RootState;
    try {
      const res = await userApi.follow(user._id);
      // notify
      const message = {
        id: state.auth.user?._id,
        text: "đã theo dõi bạn.",
        recipients: [user._id],
        url: `/profile/${state.auth.user?._id}`,
      };

      dispatch(createNotify({ message, user: state.auth.user, socket }));
      return { ...res, user, auth: state.auth.user };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "auth/unFollowUser",
  async (
    { user, socket }: { user: any; socket: any },
    { rejectWithValue, getState, dispatch }
  ) => {
    const state = getState() as RootState;
    try {
      const res = await userApi.unFollow(user._id);
      // notify
      const message = {
        id: state.auth.user?._id,
        recipients: [user._id],
        url: `/profile/${state.auth.user?._id}`,
      };

      dispatch(removeNotify({ message, socket }));
      return { ...res, user, auth: state.auth.user };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openAuth: (state: any) => {
      state.open = true;
    },
    closeAuth: (state: any) => {
      state.open = false;
    },
    setUser: (state: any, action: any) => {
      state.user = action.payload;
    },
    logout: (state: any) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      setToken("");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.api.login.status = "pending";
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.api.login.status = "fulfilled";
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        setToken(action.payload.accessToken);
        localStorage.setItem("token", action.payload.refreshToken);
      })
      .addCase(login.rejected, (state) => {
        state.api.login.status = "rejected";
      })
      .addCase(register.pending, (state) => {
        state.api.register.status = "pending";
      })
      .addCase(register.fulfilled, (state, action: any) => {
        state.api.register.status = "fulfilled";
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        setToken(action.payload.accessToken);
        localStorage.setItem("token", action.payload.refreshToken);
      })
      .addCase(register.rejected, (state) => {
        state.api.register.status = "rejected";
      })
      .addCase(refreshToken.pending, (state) => {
        state.api.refreshToken.status = "pending";
      })
      .addCase(refreshToken.fulfilled, (state, action: any) => {
        state.api.refreshToken.status = "fulfilled";
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        setToken(action.payload.accessToken);
      })
      .addCase(refreshToken.rejected, (state) => {
        state.api.refreshToken.status = "rejected";
        localStorage.removeItem("token");
      })
      .addCase(updateUser.fulfilled, (state, action: any) => {
        state.user = action.payload.user;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const { user, auth } = action.payload;
        if (auth && user) {
          state.user = {
            ...auth,
            following: [...auth.following, user],
          };
        }
      })
      .addCase(unFollowUser.fulfilled, (state, action) => {
        const { user, auth } = action.payload;
        if (auth && user) {
          state.user = {
            ...auth,
            following: [...auth.following].filter(
              (item) => item._id !== user._id
            ),
          };
        }
      });
  },
});

export const { openAuth, closeAuth, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
