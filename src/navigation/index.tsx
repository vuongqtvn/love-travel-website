import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FallBack } from "../components";
import path from "../constants/path";
import { MainLayout } from "../layout";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const Explore = lazy(() => import("../pages/Explore"));
const Map = lazy(() => import("../pages/Map"));
const NotFound = lazy(() => import("../pages/NotFound"));
// const User = lazy(() => import("./pages/User/User"));
// const Login = lazy(() => import("./pages/Auth/Login/Login"));
// const Register = lazy(() => import("./pages/Auth/Register/Register"));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
// const Cart = lazy(() => import("./pages/Cart/Cart"));

const Navigation = () => {
  return (
    <Routes>
      <Route
        path={path.home}
        element={
          <MainLayout>
            <Suspense fallback={<FallBack />}>
              <Home />
            </Suspense>
          </MainLayout>
        }
      />

      <Route
        path={path.search}
        element={
          <MainLayout>
            <Suspense fallback={<FallBack />}>
              <Search />
            </Suspense>
          </MainLayout>
        }
      />

      <Route
        path={path.explore}
        element={
          <MainLayout>
            <Suspense fallback={<FallBack />}>
              <Explore />
            </Suspense>
          </MainLayout>
        }
      />

      <Route
        path={path.map}
        element={
          <MainLayout>
            <Suspense fallback={<FallBack />}>
              <Map />
            </Suspense>
          </MainLayout>
        }
      />

      <Route
        path={path.notFound}
        element={
          <MainLayout>
            <Suspense fallback={<FallBack />}>
              <NotFound />
            </Suspense>
          </MainLayout>
        }
      />
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
