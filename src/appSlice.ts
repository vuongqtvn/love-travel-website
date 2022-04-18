import { createAction, createSlice, AnyAction } from "@reduxjs/toolkit";

interface InitialStateType {
  status: number;
  loading: Boolean;
}

const initialState: InitialStateType = {
  status: 200,
  loading: false,
};

const resetAction = createAction("reset-tracked-loading-state");

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetAction, () => initialState)
      .addMatcher(
        (action: AnyAction) => {
          return action.type.endsWith("/pending");
        },
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action: AnyAction) =>
          action.type.endsWith("/fulfilled") ||
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = action.payload.status;
          state.loading = false;
        }
      );
  },
});

export default appSlice.reducer;
