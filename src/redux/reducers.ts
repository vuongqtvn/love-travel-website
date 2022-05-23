import appSlice from "../appSlice";
import mapModalSlice from "../components/MapModal/mapModalSlice";
import authSlice from "../pages/Auth/authSlice";
import homeSlice from "../pages/Home/homeSlice";
import placeSlice from "../pages/Place/placeSlice";
import searchSlice from "../pages/Search/searchSlice";

const rootReducer = {
  mapModal: mapModalSlice,
  place: placeSlice,
  home: homeSlice,
  search: searchSlice,
  auth: authSlice,
  app: appSlice,
};

export default rootReducer;
