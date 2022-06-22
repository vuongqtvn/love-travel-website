import { useEffect } from "react";
import { Layout, Drawer } from "antd";
import MenuComponent, { TMenuList } from "./menu";
import HeaderComponent from "./header";
import * as Icons from "@ant-design/icons";
import { Navigate, useLocation } from "react-router-dom";
import { getGlobalState, setAppGlobal } from "../../appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import path from "../../constants/path";
import * as Styled from "./styles";
import BreadcrumbLayout from "./breadcrumb";

const { Sider, Content } = Layout;
const WIDTH = 992;

const menuList: TMenuList = [
  {
    label: "Thống kê",
    code: path.admin.home,
    path: path.admin.home,
    icon: Icons.HomeOutlined,
  },
  {
    label: "Quản lý địa điểm",
    path: path.admin.place,
    code: path.admin.place,
    icon: Icons.EnvironmentOutlined,
  },

  {
    label: "Quản lý tài khoản",
    path: path.admin.account,
    code: path.admin.account,
    icon: Icons.UserOutlined,
  },
  {
    label: "Quản lý phê duyệt",
    path: path.admin.accept,
    code: path.admin.accept,
    icon: Icons.CheckCircleOutlined,
  },
  {
    label: "Quản lý chung",
    path: path.admin.general,
    code: path.admin.general,
    icon: Icons.ContainerOutlined,
  },
  {
    label: "Quản lý bài review",
    path: path.admin.post,
    code: path.admin.post,
    icon: Icons.EditOutlined,
  },
  {
    label: "Quản lý bài khuyến mãi",
    path: path.admin.promo,
    code: path.admin.promo,
    icon: Icons.GiftOutlined,
  },
];

const AdminLayout = ({ children }: { children: JSX.Element }) => {
  const { device, collapsed } = useAppSelector((state) => state.app);
  const { user, api } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const isMobile = device === "MOBILE";
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(
      setAppGlobal({
        collapsed: !collapsed,
      })
    );
  };

  useEffect(() => {
    window.onresize = () => {
      const { device } = getGlobalState();
      const rect = document.body.getBoundingClientRect();
      const needCollapse = rect.width < WIDTH;

      dispatch(
        setAppGlobal({
          device,
          collapsed: needCollapse,
        })
      );
    };
  }, [dispatch]);

  if (api.refreshToken.status === "pending") {
    return <div>đang tải...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role === "user") {
    return <Navigate to="/" />;
  }

  return (
    <Styled.LayoutWrapper className="layout-page">
      <HeaderComponent collapsed={collapsed} toggle={toggle} />
      <Layout>
        {!isMobile ? (
          <Sider
            className="layout-page-sider"
            trigger={null}
            collapsible
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="md"
          >
            <MenuComponent menuList={menuList} />
          </Sider>
        ) : (
          <Drawer
            width="200"
            placement="left"
            bodyStyle={{ padding: 0, height: "100%" }}
            closable={false}
            onClose={toggle}
            visible={!collapsed}
          >
            <MenuComponent menuList={menuList} />
          </Drawer>
        )}
        <Content className="layout-page-content">
          <div className="content-layout">
            <div
              style={{
                padding: "0 10px 15px",
              }}
            >
              <BreadcrumbLayout />
            </div>
            <div
              className="content-page"
              style={{
                background: "transparent",
              }}
            >
              {children}
            </div>
          </div>
        </Content>
      </Layout>
    </Styled.LayoutWrapper>
  );
};

export default AdminLayout;
