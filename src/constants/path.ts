const path = {
  home: "/",
  addPlace: "/add-place",
  map: "/map",
  login: "/login",
  register: "/register",
  place: "/place",
  explore: "/explore",
  promo: "/promo",
  saved: "/saved",
  search: "/search",
  review: "/review",
  message: "/message",
  messageUser: "/message/:id",
  placeDetail: "/place/:id",
  profile: "/profile/:id",
  password: "/password",
  prefixRegion: "/search?regions",
  prefixCategory: "/search?categories",
  prefixPurpose: "/search?purposes",
  admin: {
    general: "/admin/general",
    accept: "/admin/accept",
    home: "/admin",
    place: "/admin/place",
    addPlace: "/admin/add-place",
    editPlace: "/admin/edit-place/:id",
    post: "/admin/post",
    promo: "/admin/promo",
    account: "/admin/account",
  },
  notFound: "*",
};

export default path;
