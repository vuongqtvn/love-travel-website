import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FallBack } from "../components";
import path from "../constants/path";
import { MainLayout } from "../layout";
import AdminLayout from "../layout/AdminLayout";

import AdminPlace from "../pages/Admin/Place";
import LoginAdmin from "../pages/Admin/Login";
import AdminHome from "../pages/Admin/Home";
import AddPlace from "../pages/Admin/Place/features/AddPlace";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const Explore = lazy(() => import("../pages/Explore"));
const Map = lazy(() => import("../pages/Map"));
const Place = lazy(() => import("../pages/Place"));
const Review = lazy(() => import("../pages/Review"));
const NotFound = lazy(() => import("../pages/NotFound"));

const publicRoute = [
  { path: path.home, component: Home, layout: MainLayout },
  { path: path.search, component: Search, layout: MainLayout },
  { path: path.explore, component: Explore, layout: MainLayout },
  { path: path.review, component: Review, layout: MainLayout },
  { path: path.placeDetail, component: Place, layout: MainLayout },
  { path: path.map, component: Map, layout: MainLayout },
  { path: path.notFound, component: NotFound, layout: MainLayout },
];

const adminRoute = [
  { path: path.admin.home, component: AdminHome, layout: AdminLayout },
  { path: path.admin.account, component: AdminHome, layout: AdminLayout },
  { path: path.admin.place, component: AdminPlace, layout: AdminLayout },
  { path: path.admin.addPlace, component: AddPlace, layout: AdminLayout },
  { path: path.admin.editPlace, component: AdminPlace, layout: AdminLayout },
  { path: path.admin.post, component: AdminHome, layout: AdminLayout },
  { path: path.admin.promo, component: AdminHome, layout: AdminLayout },
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

      <Route path={"/login"} element={<LoginAdmin />} />

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
