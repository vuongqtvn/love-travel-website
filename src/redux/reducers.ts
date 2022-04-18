import appSlice from "../appSlice";
import homeSlice from "../pages/Home/homeSlice";
import searchSlice from "../pages/Search/searchSlice";

const rootReducer = {
  home: homeSlice,
  search: searchSlice,
  app: appSlice,
};

export default rootReducer;
