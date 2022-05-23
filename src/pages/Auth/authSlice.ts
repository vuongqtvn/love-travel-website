import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  open: boolean;
}

const initialState: AuthState = {
  open: false,
};

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
  },
});

export const { openAuth, closeAuth } = authSlice.actions;

export default authSlice.reducer;
