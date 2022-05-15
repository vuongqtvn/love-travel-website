import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FallBack } from "../components";
import path from "../constants/path";
import { MainLayout } from "../layout";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const Explore = lazy(() => import("../pages/Explore"));
const Map = lazy(() => import("../pages/Map"));
const Place = lazy(() => import("../pages/Place"));
const Review = lazy(() => import("../pages/Review"));
const Login = lazy(() => import("../pages/Login"));
const NotFound = lazy(() => import("../pages/NotFound"));

const publicRoute = [
  { path: path.home, component: Home, layout: MainLayout },
  { path: path.search, component: Search, layout: MainLayout },
  { path: path.explore, component: Explore, layout: MainLayout },
  { path: path.review, component: Review, layout: MainLayout },
  { path: path.placeDetail, component: Place, layout: MainLayout },
  { path: path.map, component: Map, layout: MainLayout },
  { path: path.login, component: Login, layout: MainLayout },
  { path: path.notFound, component: NotFound, layout: MainLayout },
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
