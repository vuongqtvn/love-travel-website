import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ErrorBoundary } from "../../components";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element | JSX.Element[];
};

type TLocationProps = {
  state: {
    from: Location;
  };
};

const AuthLayout = ({ children }: Props) => {
  const { user, api } = useAppSelector((state) => state.auth);

  const location = useLocation() as unknown as TLocationProps;

  const from = location.state?.from?.pathname || "/admin";

  if (api.refreshToken.status === "pending") {
    return <div>đang tải...</div>;
  }
  if (user) {
    return <Navigate to={from} replace />;
  }

  return (
    <ErrorBoundary>
      <div>{children}</div>
    </ErrorBoundary>
  );
};

export default AuthLayout;
