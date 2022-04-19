import { BackTop } from "antd";
import React from "react";
import { ErrorBoundary, Footer, Header, Navbar } from "../../components";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: Props) => {
  return (
    <ErrorBoundary>
      <div>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <BackTop />
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;
