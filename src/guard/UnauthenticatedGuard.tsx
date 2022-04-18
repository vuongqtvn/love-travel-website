import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import path from "../constants/path";
// import { useAppSelector } from "../redux/hooks";

type Props = {
  children: JSX.Element | JSX.Element[];
};
function UnauthenticatedGuard({ children }: Props) {
  // const authenticated = useAppSelector((state) =>
  //   Boolean(state.auth.profile._id)
  // );

  const authenticated = true;
  if (authenticated) {
    return <Navigate to={path.home} />;
  }

  return <Fragment>{children}</Fragment>;
}

export default UnauthenticatedGuard;
