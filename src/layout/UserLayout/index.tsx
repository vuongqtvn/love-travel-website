import React from "react";
import { BackTop } from "antd";
import {
  Box,
  ErrorBoundary,
  Footer,
  Header,
  Navbar,
  Section,
} from "../../components";
import Auth from "../../pages/Auth";
import { useAppSelector } from "../../redux/hooks";
import { NotAuth } from "../../components";
// import SocketClient from "../../components/SocketClient";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const UserLayout = ({ children }: Props) => {
  const { user, api, open } = useAppSelector((state) => state.auth);

  if (api.refreshToken.status === "pending") {
    return <div>đang tải...</div>;
  }

  if (!user) {
    return (
      <ErrorBoundary>
        <Box style={{ minHeight: "100vh" }} flexDirection="column">
          <Header />
          <Section style={{ flex: 1 }}>
            <NotAuth />
          </Section>
          <BackTop />
          <React.Fragment>{open && <Auth />}</React.Fragment>
        </Box>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <BackTop />
        {/* <SocketClient /> */}
        {open && <Auth />}
      </div>
    </ErrorBoundary>
  );
};

export default UserLayout;
