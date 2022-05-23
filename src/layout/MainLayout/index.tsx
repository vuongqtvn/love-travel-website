import { BackTop } from "antd";
import React from "react";
import { ErrorBoundary, Footer, Header, Navbar } from "../../components";
import Auth from "../../pages/Auth";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: Props) => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <ErrorBoundary>
      <div>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <BackTop />
        {auth.open && <Auth />}
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;
