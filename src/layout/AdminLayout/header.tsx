import { FC } from "react";
import {
  LogoutOutlined,
  UserOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";
import { Layout, Dropdown, Menu, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import HeaderNoticeComponent from "./notice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { images } from "../../assets";
import { logout } from "../../pages/Auth/authSlice";

const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

const HeaderComponent: FC<HeaderProps> = ({ collapsed, toggle }) => {
  const { device } = useAppSelector((state) => state.app);
  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Space>
          <UserOutlined />
          <span>Hồ sơ</span>
        </Space>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" onClick={() => dispatch(logout())}>
        <Space>
          <LogoutOutlined />
          <span>Đăng xuất</span>
        </Space>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="layout-page-header bg-2"
      style={{
        backgroundColor: "#fff",
      }}
    >
      {device !== "MOBILE" && (
        <div className="logo" style={{ width: collapsed ? 80 : 200 }}>
          <img onClick={() => navigate("/admin")} src={images.ute} alt="" />
        </div>
      )}
      <div className="layout-page-header-main">
        <div onClick={toggle}>
          <span id="sidebar-trigger">
            {collapsed ? (
              <Button shape="round" icon={<VerticalLeftOutlined />} />
            ) : (
              <Button shape="round" icon={<VerticalRightOutlined />} />
            )}
          </span>
        </div>
        <div className="actions">
          <HeaderNoticeComponent />

          <Dropdown overlay={menu}>
            <span className="user-action">
              <img src={user?.avatar} className="user-avator" alt="avator" />
            </span>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
