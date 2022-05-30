import appSlice from "../appSlice";
import mapModalSlice from "../components/MapModal/mapModalSlice";
import adminPlaceSlice from "../pages/Admin/Place/adminPlaceSlice";
import authSlice from "../pages/Auth/authSlice";
import homeSlice from "../pages/Home/homeSlice";
import placeSlice from "../pages/Place/placeSlice";
import reviewSlice from "../pages/Review/reviewSlice";
import searchSlice from "../pages/Search/searchSlice";

const rootReducer = {
  mapModal: mapModalSlice,
  place: placeSlice,
  home: homeSlice,
  search: searchSlice,
  auth: authSlice,
  review: reviewSlice,
  adminPlace: adminPlaceSlice,
  app: appSlice,
};

export default rootReducer;
