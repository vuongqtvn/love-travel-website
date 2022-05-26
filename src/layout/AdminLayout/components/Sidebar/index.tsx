import React from "react";
import { Menu } from "antd";

import * as Icons from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import path from "../../../../constants/path";

const SIDEBAR_MENU = [
  {
    title: "Dashboard",
    path: path.admin.home,
    icon: <Icons.HomeOutlined />,
  },
  {
    title: "Quản Lý địa điểm",
    path: path.admin.place,
    icon: <Icons.EnvironmentOutlined />,
  },

  {
    title: "Quản Lý tài khoản",
    path: path.admin.account,
    icon: <Icons.UserOutlined />,
  },
  {
    title: "Quản Lý bài viết",
    path: path.admin.post,
    icon: <Icons.EditOutlined />,
  },
  {
    title: "Quản Lý mã giảm giá",
    path: path.admin.promo,
    icon: <Icons.GiftOutlined />,
  },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  function renderSidebarMenu() {
    return SIDEBAR_MENU.map((sidebarItem) => {
      return (
        <Menu.Item
          icon={sidebarItem.icon}
          key={sidebarItem.path}
          onClick={() => navigate(sidebarItem.path)}
        >
          {sidebarItem.title}
        </Menu.Item>
      );
    });
  }

  return (
    <Menu selectedKeys={[location.pathname]} theme="light" mode="inline">
      {renderSidebarMenu()}
    </Menu>
  );
}

export default Sidebar;
