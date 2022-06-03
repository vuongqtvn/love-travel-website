import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accountApi } from "../../../api";

export interface AdminPlaceState {
  account: any;
  accountOptions: {
    total: number;
    pageSize: number;
    limit: number;
    page: number;
  };
  loading: {
    getAccount: boolean;
  };
}

const initialState: AdminPlaceState = {
  account: [],
  accountOptions: {
    total: 0,
    pageSize: 1,
    limit: 10,
    page: 1,
  },
  loading: {
    getAccount: false,
  },
};

export const getAccounts = createAsyncThunk(
  "admin-account/getAccounts",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await accountApi.getAccounts(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const adminAccountSlice = createSlice({
  name: "admin-account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.pending, (state) => {
        state.loading.getAccount = true;
      })
      .addCase(getAccounts.fulfilled, (state, action: any) => {
        state.loading.getAccount = false;
        state.account = action.payload.account;
        state.accountOptions = action.payload.options;
      })
      .addCase(getAccounts.rejected, (state) => {
        state.loading.getAccount = false;
      });
  },
});

export default adminAccountSlice.reducer;
