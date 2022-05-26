import { Breadcrumb } from "antd";
import * as Icons from "@ant-design/icons";
import path from "../../../../constants/path";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const BREADCRUMB_MENU = [
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
  {
    pathParent: path.admin.place,
    title: "Thêm địa điểm",
    path: path.admin.addPlace,
  },
  {
    pathParent: path.admin.place,
    title: "Chỉnh sửa địa điểm",
    path: path.admin.editPlace,
  },
];

function BreadcrumbLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderBreadcrumb = (pathName: string) => {
    return BREADCRUMB_MENU.map((menuItem, index) => {
      if (menuItem.path === pathName) {
        return (
          <React.Fragment key={index}>
            {menuItem.pathParent ? renderBreadcrumb(menuItem.pathParent) : null}
            <Breadcrumb.Item
              className="cursor-pointer"
              onClick={() => navigate(menuItem.path)}
            >
              {menuItem.title}
            </Breadcrumb.Item>
          </React.Fragment>
        );
      }
    });
  };
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item
        className="cursor-pointer"
        onClick={() => navigate(path.admin.home)}
      >
        <Icons.HomeOutlined />
        Trang chủ
      </Breadcrumb.Item>
      {renderBreadcrumb(location.pathname)}
    </Breadcrumb>
  );
}
export default BreadcrumbLayout;
