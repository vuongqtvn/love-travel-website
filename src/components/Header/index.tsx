/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { images } from "../../assets";
import * as Styled from "./styles";
import * as Icons from "@ant-design/icons";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Menu,
  Space,
  Typography,
} from "antd";

import Box from "../Box";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, openAuth } from "../../pages/Auth/authSlice";
import path from "../../constants/path";

type Props = {};

const menuList = [
  {
    name: "Trang chủ",
    path: "/",
    icon: Icons.HomeOutlined,
  },
  {
    name: "Khám phá",
    path: "/explore",
    icon: Icons.CompassOutlined,
  },
  {
    name: "Khuyến mãi",
    path: "/promo",
    icon: Icons.TagOutlined,
  },
  {
    name: "Địa điểm",
    path: "/search",
    icon: Icons.EnvironmentOutlined,
  },
  {
    name: "Nhắn tin",
    path: "/message",
    icon: Icons.CommentOutlined,
  },
  {
    name: "Thông báo",
    path: "/notification",
    icon: Icons.BellOutlined,
  },
];

const Header = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { user } = useAppSelector((state) => state.auth);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContainer>
        <Styled.Logo>
          <Link to="/">
            <img src={images.logo} alt="love travel" />
          </Link>
        </Styled.Logo>
        <Styled.NavMobile>
          <div className="nav-icon">
            <Link to={`/search`}>
              <Icons.EnvironmentFilled className="icon" />
            </Link>
          </div>
          <div className="nav-icon" onClick={showDrawer}>
            <a>
              <svg viewBox="0 0 120 100" width="20" height="18">
                <rect width="120" height="18" rx="14"></rect>
                <rect y="40" x="30" width="90" height="20" rx="14"></rect>
                <rect y="80" width="120" height="20" rx="14"></rect>
              </svg>
            </a>
          </div>
        </Styled.NavMobile>
        <Styled.Nav>
          <Styled.NavLeft>
            <div className="list">
              <NavLink to="/explore">
                <i className="bx bx-planet"></i>
                Khám phá
              </NavLink>
              <NavLink to="/promo">
                <i className="bx bx-purchase-tag-alt"></i>
                Khuyến mãi
              </NavLink>
            </div>
          </Styled.NavLeft>
          <Styled.NavRight>
            <div className="nav-item">
              <Styled.Button onClick={() => navigate("/review")}>
                <i className="bx bx-pencil"></i> Viết Review
              </Styled.Button>
            </div>
            <div className="nav-item">
              {user?.email ? (
                <Dropdown
                  overlay={
                    <Menu>
                      {user.role === "admin" && (
                        <Menu.Item>
                          <Space
                            size={5}
                            align="center"
                            onClick={() => navigate(path.admin.home)}
                          >
                            <Icons.SafetyCertificateOutlined />
                            <span>Trang Admin</span>
                          </Space>
                        </Menu.Item>
                      )}
                      <Menu.Item>
                        <Space
                          size={5}
                          align="center"
                          onClick={() => navigate(path.profile)}
                        >
                          <Icons.FireOutlined /> <span>Xem hồ sơ</span>
                        </Space>
                      </Menu.Item>

                      <Menu.Item>
                        <Space
                          size={5}
                          align="center"
                          onClick={() => dispatch(logout())}
                        >
                          <Icons.LogoutOutlined /> <span>Đăng xuất</span>
                        </Space>
                      </Menu.Item>
                    </Menu>
                  }
                  placement="bottomRight"
                  arrow
                  trigger={["click"]}
                >
                  <Space align="center" style={{ cursor: "pointer" }}>
                    <Avatar size="large" shape="circle" src={user.avatar} />
                  </Space>
                </Dropdown>
              ) : (
                <Styled.Button
                  className="custom"
                  onClick={() => dispatch(openAuth())}
                >
                  Đăng nhập
                </Styled.Button>
              )}
            </div>
          </Styled.NavRight>
        </Styled.Nav>
      </Styled.HeaderContainer>
      <Drawer
        title="Love Travel"
        width={280}
        placement="right"
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          padding: 0,
        }}
      >
        {user?.email && (
          <Space
            align="center"
            style={{ cursor: "pointer", padding: "10px 20px" }}
          >
            <Avatar shape="circle" size="large" src={user.avatar} />
            <Typography.Title level={5}>{user.name}</Typography.Title>
          </Space>
        )}
        <Menu
          selectedKeys={[location.pathname]}
          mode="inline"
          style={{ width: "100%" }}
        >
          {menuList.map((menu) => {
            const Icon = menu.icon;
            return (
              <Menu.Item
                onClick={() => {
                  navigate(menu.path);
                  onClose();
                }}
                key={menu.path}
                icon={<Icon />}
              >
                {menu.name}
              </Menu.Item>
            );
          })}
        </Menu>
        <Box
          style={{
            padding: 20,
          }}
        >
          {user?.email ? (
            <Button
              type="primary"
              block
              size="middle"
              onClick={() => {
                dispatch(logout());
                onClose();
              }}
            >
              Đăng xuất
            </Button>
          ) : (
            <Button
              type="primary"
              block
              size="middle"
              onClick={() => {
                dispatch(openAuth());
                onClose();
              }}
            >
              Đăng nhập / Đăng ký
            </Button>
          )}
        </Box>
      </Drawer>
    </Styled.HeaderWrapper>
  );
};

export default Header;
