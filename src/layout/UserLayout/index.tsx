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
import SocketClient from "../../components/SocketClient";
import * as Styled from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
  footer?: boolean;
};

const UserLayout = ({ children, footer = true }: Props) => {
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
      <Styled.LayoutWrapper>
        <Header />
        <Navbar />
        <div className="content">{children}</div>
        {footer && <Footer />}
        <BackTop />
        <SocketClient />
        {open && <Auth />}
      </Styled.LayoutWrapper>
    </ErrorBoundary>
  );
};

export default UserLayout;
