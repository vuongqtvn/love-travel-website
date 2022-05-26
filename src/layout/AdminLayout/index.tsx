import React, { useState } from "react";
import { Grid, Layout } from "antd";

import { Navigate } from "react-router-dom";

import HeaderAdmin from "./components/Header";

import * as Styles from "./styles";
import Sidebar from "./components/Sidebar";
import BreadcrumbLayout from "./components/Breadcrumb";

const { Content, Sider } = Layout;
const { useBreakpoint } = Grid;

function AdminLayout({ children }: { children: JSX.Element }) {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const userInfo = "userInfo";

  if (!userInfo) {
    return <Navigate to="/login" />;
  } else {
    // if (userInfo.role === "user") {
    //   return <Navigate to="/" />;
    // } else {
    return (
      <Styles.MainLayout>
        <Layout style={{ minHeight: "100vh" }}>
          <HeaderAdmin />
          <Layout>
            <Sider
              breakpoint="lg"
              width={270}
              theme="light"
              collapsedWidth={screens.lg !== true ? 0 : 80}
              collapsible
              collapsed={collapsed}
              onCollapse={onCollapse}
            >
              <Sidebar />
            </Sider>
            <Layout className="content-layout">
              <div style={{ padding: "0 15px", flexShrink: 0 }}>
                <BreadcrumbLayout />
              </div>
              <Content className="content">{children}</Content>
            </Layout>
          </Layout>
        </Layout>
      </Styles.MainLayout>
    );
    // }
  }
}

export default AdminLayout;
