import { BackTop } from "antd";
import React, { useEffect } from "react";
import { ErrorBoundary, Footer, Header, Navbar } from "../../components";
import SocketClient from "../../components/SocketClient";
import Auth from "../../pages/Auth";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: Props) => {
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
      <div>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <BackTop />
        <SocketClient />
        {auth.open && <Auth />}
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;
