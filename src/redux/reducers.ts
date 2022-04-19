import appSlice from "../appSlice";
import mapModalSlice from "../components/MapModal/mapModalSlice";
import homeSlice from "../pages/Home/homeSlice";
import searchSlice from "../pages/Search/searchSlice";

const rootReducer = {
  mapModal: mapModalSlice,
  home: homeSlice,
  search: searchSlice,
  app: appSlice,
};

export default rootReducer;
