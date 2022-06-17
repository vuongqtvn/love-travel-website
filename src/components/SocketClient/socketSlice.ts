import { createSlice } from "@reduxjs/toolkit";

const initialState: { socket: any } = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket(state: any, action: any) {
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = socketSlice.actions;

export default socketSlice.reducer;
