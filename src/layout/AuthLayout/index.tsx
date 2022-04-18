import React from "react";
import { ErrorBoundary } from "../../components";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const AuthLayout = ({ children }: Props) => {
  return (
    <ErrorBoundary>
      <div>{children}</div>
    </ErrorBoundary>
  );
};

export default AuthLayout;
