import { createSlice } from "@reduxjs/toolkit";
import { PlaceType } from "../../types";

interface MapModalState {
  show: boolean;
}

const initialState: MapModalState = {
  show: false,
};

const mapModalSlice = createSlice({
  name: "mapModal",
  initialState,
  reducers: {
    showMapModal(state) {
      state.show = true;
    },
    hideMapModal(state) {
      state.show = false;
    },
  },
});

export const { showMapModal, hideMapModal } = mapModalSlice.actions;

export default mapModalSlice.reducer;
