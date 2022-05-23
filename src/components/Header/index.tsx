/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { images } from "../../assets";
import * as Styled from "./styles";
import { EnvironmentFilled } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";

import {
  EnvironmentOutlined,
  TagOutlined,
  CompassOutlined,
  HomeOutlined,
  CommentOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Box from "../Box";
import { useAppDispatch } from "../../redux/hooks";
import { openAuth } from "../../pages/Auth/authSlice";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const menuList = [
    {
      name: "Trang chủ",
      path: "/",
      icon: HomeOutlined,
    },
    {
      name: "Khám phá",
      path: "/explore",
      icon: CompassOutlined,
    },
    {
      name: "Khuyến mãi",
      path: "/promo",
      icon: TagOutlined,
    },
    {
      name: "Địa điểm",
      path: "/search",
      icon: EnvironmentOutlined,
    },
    {
      name: "Nhắn tin",
      path: "/message",
      icon: CommentOutlined,
    },
    {
      name: "Thông báo",
      path: "/notification",
      icon: BellOutlined,
    },
  ];

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
              <EnvironmentFilled className="icon" />
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
              <Styled.Button
                className="custom"
                onClick={() => dispatch(openAuth())}
              >
                Đăng nhập
              </Styled.Button>
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
        <Menu mode="inline" style={{ width: "100%" }}>
          {menuList.map((menu, index) => {
            const Icon = menu.icon;
            return (
              <Menu.Item
                onClick={() => {
                  navigate(menu.path);
                  onClose();
                }}
                key={index}
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
        </Box>
      </Drawer>
    </Styled.HeaderWrapper>
  );
};

export default Header;
