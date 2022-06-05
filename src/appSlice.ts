import { createAction, createSlice, AnyAction } from "@reduxjs/toolkit";

export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    ? "MOBILE"
    : "DESKTOP";
  const collapsed = device !== "DESKTOP";

  return {
    device,
    collapsed,
  } as const;
}
interface InitialStateType {
  status: number;
  loading: Boolean;
  device: "MOBILE" | "DESKTOP";
  collapsed: boolean;
}

const initialState: InitialStateType = {
  status: 200,
  loading: false,
  ...getGlobalState(),
};

const resetAction = createAction("reset-tracked-loading-state");

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppGlobal(state: any, action: any) {
      Object.assign(state, action.payload);
    },
  },
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

export const { setAppGlobal } = appSlice.actions;

export default appSlice.reducer;
