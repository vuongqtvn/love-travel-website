/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

type Props = {};

const Header = (props: Props) => {
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
            <Link to={`/search?q=""`}>
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
              <Styled.Button to="/review">
                <i className="bx bx-pencil"></i> Viết Review
              </Styled.Button>
            </div>
            <div className="nav-item">
              <Styled.Button className="custom" to="/">
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
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<CompassOutlined />}>
            Khám phá
          </Menu.Item>
          <Menu.Item key="3" icon={<TagOutlined />}>
            Khuyến mãi
          </Menu.Item>
          <Menu.Item key="4" icon={<EnvironmentOutlined />}>
            Địa điểm
          </Menu.Item>
          <Menu.Item key="5" icon={<CommentOutlined />}>
            Nhắn tin
          </Menu.Item>
          <Menu.Item key="6" icon={<BellOutlined />}>
            Thông báo
          </Menu.Item>
        </Menu>
        <Box
          style={{
            padding: 20,
          }}
        >
          <Button type="primary" block size="middle">
            Đăng nhập / Đăng ký
          </Button>
        </Box>
      </Drawer>
    </Styled.HeaderWrapper>
  );
};

export default Header;
