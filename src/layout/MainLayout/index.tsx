import { BackTop } from "antd";
import React, { useEffect } from "react";
import { ErrorBoundary, Footer, Header, Navbar } from "../../components";
import SocketClient from "../../components/SocketClient";
import Auth from "../../pages/Auth";
import { useAppSelector } from "../../redux/hooks";
import * as Styled from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
  footer?: boolean;
};

const MainLayout = ({ children, footer = true }: Props) => {
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
        }
      });
    }
  }, []);

  return (
    <ErrorBoundary>
      <Styled.LayoutWrapper>
        <Header />
        <Navbar />
        <div className="content">{children}</div>
        {footer && <Footer />}
        <BackTop />
        <SocketClient />
        {auth.open && <Auth />}
      </Styled.LayoutWrapper>
    </ErrorBoundary>
  );
};

export default MainLayout;
