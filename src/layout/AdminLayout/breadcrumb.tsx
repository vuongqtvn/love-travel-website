import { Breadcrumb } from "antd";
import * as Icons from "@ant-design/icons";

import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import path from "../../constants/path";

const BREADCRUMB_MENU = [
  {
    title: "Thống kê",
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
    title: "Quản Lý phê duyệt",
    path: path.admin.accept,
    icon: <Icons.CheckCircleOutlined />,
  },
  {
    title: "Quản Lý bài viết review",
    path: path.admin.post,
    icon: <Icons.EditOutlined />,
  },
  {
    title: "Quản lý chung",
    path: path.admin.general,
    icon: <Icons.ContainerOutlined />,
  },
  {
    title: "Quản Lý bài viết khuyến mãi",
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
    path: "/admin/edit-place/:id",
  },
];

function BreadcrumbLayout() {
  const location = useLocation();
  const [{ route }]: any = matchRoutes(BREADCRUMB_MENU, location);
  const navigate = useNavigate();
  function renderBreadcrumb(pathName: any): any {
    return BREADCRUMB_MENU.map((menuItem: any, menuIndex: any) => {
      if (menuItem.path === pathName) {
        return (
          <React.Fragment key={menuIndex}>
            {menuItem.pathParent ? renderBreadcrumb(menuItem.pathParent) : null}
            <Breadcrumb.Item
              className="cursor-pointer"
              onClick={() => navigate(menuItem.path)}
            >
              {menuItem.title}
            </Breadcrumb.Item>
          </React.Fragment>
        );
      } else {
        return null;
      }
    });
  }
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        className="cursor-pointer"
        onClick={() => navigate("/admin")}
      >
        <Icons.HomeOutlined />
        Trang chủ
      </Breadcrumb.Item>
      {renderBreadcrumb(route.path)}
    </Breadcrumb>
  );
}
export default BreadcrumbLayout;
