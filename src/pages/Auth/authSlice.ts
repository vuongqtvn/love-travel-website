import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setToken } from "../../api";
import authApi from "../../api/authApi";
import { RequestState } from "../../types";
import { ILogin, IRegister, IUser } from "../../types/auth.type";

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
      });
  },
});

export const { openAuth, closeAuth, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
