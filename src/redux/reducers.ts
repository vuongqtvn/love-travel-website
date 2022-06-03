import appSlice from "../appSlice";
import mapModalSlice from "../components/MapModal/mapModalSlice";
import addPlaceSlice from "../pages/AddPlace/addPlaceSlice";
import adminPlaceSlice from "../pages/Admin/Place/adminPlaceSlice";
import authSlice from "../pages/Auth/authSlice";
import exploreSlice from "../pages/Explore/exploreSlice";
import homeSlice from "../pages/Home/homeSlice";
import placeSlice from "../pages/Place/placeSlice";
import reviewSlice from "../pages/Review/reviewSlice";
import searchSlice from "../pages/Search/searchSlice";
import adminAccountSlice from "../pages/Admin/Account/accountAdminSlice";

const rootReducer = {
  mapModal: mapModalSlice,
  place: placeSlice,
  home: homeSlice,
  search: searchSlice,
  auth: authSlice,
  review: reviewSlice,
  explore: exploreSlice,
  adminPlace: adminPlaceSlice,
  adminAccount: adminAccountSlice,
  addPlace: addPlaceSlice,
  app: appSlice,
};

export default rootReducer;
