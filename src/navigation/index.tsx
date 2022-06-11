import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FallBack } from "../components";
import path from "../constants/path";
import { AuthLayout, MainLayout } from "../layout";
import AdminLayout from "../layout/AdminLayout";

import AdminPlace from "../pages/Admin/Place";
import AdminAccount from "../pages/Admin/Account";
import LoginAdmin from "../pages/Admin/Login";
import AdminHome from "../pages/Admin/Home";
import AdminAccept from "../pages/Admin/Accept";
import AddPlaceAdmin from "../pages/Admin/Place/features/AddPlace";
import EditPlace from "../pages/Admin/Place/features/EditPlace";
import AdminReview from "../pages/Admin/Review";
import AdminGeneral from "../pages/Admin/General";
import UserLayout from "../layout/UserLayout";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const Explore = lazy(() => import("../pages/Explore"));
const Map = lazy(() => import("../pages/Map"));
const Place = lazy(() => import("../pages/Place"));
const AddPlace = lazy(() => import("../pages/AddPlace"));
const UpdatePlace = lazy(() => import("../pages/UpdatePlace"));
const Promo = lazy(() => import("../pages/Promo"));
const Review = lazy(() => import("../pages/Review"));
const Saved = lazy(() => import("../pages/Saved"));
const Profile = lazy(() => import("../pages/Profile"));
const NotFound = lazy(() => import("../pages/NotFound"));

const publicRoute = [
  { path: path.home, component: Home, layout: MainLayout },
  { path: path.search, component: Search, layout: MainLayout },
  { path: path.explore, component: Explore, layout: MainLayout },
  { path: path.review, component: Review, layout: UserLayout },
  { path: path.placeDetail, component: Place, layout: MainLayout },
  { path: path.promo, component: Promo, layout: MainLayout },
  { path: path.map, component: Map, layout: MainLayout },
  { path: path.profile, component: Profile, layout: UserLayout },
  { path: "/edit-place/:id", component: UpdatePlace, layout: UserLayout },
  { path: path.saved, component: Saved, layout: UserLayout },
  { path: path.addPlace, component: AddPlace, layout: UserLayout },
  { path: path.notFound, component: NotFound, layout: MainLayout },
];

const adminRoute = [
  { path: path.admin.home, component: AdminHome, layout: AdminLayout },
  { path: path.admin.account, component: AdminAccount, layout: AdminLayout },
  { path: path.admin.place, component: AdminPlace, layout: AdminLayout },
  { path: path.admin.addPlace, component: AddPlaceAdmin, layout: AdminLayout },
  { path: path.admin.editPlace, component: EditPlace, layout: AdminLayout },
  { path: path.admin.post, component: AdminReview, layout: AdminLayout },
  { path: path.admin.promo, component: AdminHome, layout: AdminLayout },
  { path: path.admin.accept, component: AdminAccept, layout: AdminLayout },
  { path: path.admin.general, component: AdminGeneral, layout: AdminLayout },
  { path: path.login, component: LoginAdmin, layout: AuthLayout },
  { path: path.notFound, component: NotFound, layout: AdminLayout },
];

const Navigation = () => {
  return (
    <Routes>
      {publicRoute.map((route, index) => {
        const Layout = route.layout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Suspense fallback={<FallBack />}>
                  <Page />
                </Suspense>
              </Layout>
            }
          />
        );
      })}

      {adminRoute.map((route, index) => {
        const Layout = route.layout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Suspense fallback={<FallBack />}>
                  <Page />
                </Suspense>
              </Layout>
            }
          />
        );
      })}

      {/* <Route path={path.cart} exact>
        <AuthenticatedGuard>
          <CartLayout>
            <Suspense fallback={<Fallback />}>
              <Cart />
            </Suspense>
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.login} exact>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Suspense fallback={<Fallback />}>
              <Login />
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register} exact>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Suspense fallback={<Fallback />}>
              <Register />
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>

      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <User />
            </Suspense>
          </MainLayout>
        </AuthenticatedGuard>
      </Route> */}
    </Routes>
  );
};

export default Navigation;
