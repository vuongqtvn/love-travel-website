/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { images } from "../../assets";
import * as Styled from "./styles";
import * as Icons from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Drawer,
  Dropdown,
  Menu,
  Modal,
  Space,
  Tooltip,
  Typography,
} from "antd";

import Box from "../Box";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, openAuth } from "../../pages/Auth/authSlice";
import { colors } from "../../theme/colors";
import moment from "moment";
import {
  deleteAllNotifies,
  getNotifies,
  isReadNotify,
  setSound,
} from "../../redux/notifySlice";
import ImageLazy from "../ImageLazy";
import classNames from "classnames";

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

const UserSetting = ({ user }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Styled.SettingDropdown>
      <div className="header">
        <img src={user.avatar} alt={user.name} />
        <div className="info">
          <span className="name">{user.name}</span>
          <span className="role">
            {user.role === "admin"
              ? "Quản trị viên"
              : moment(user.createdAt).format("L")}
          </span>
        </div>
      </div>
      <div className="list-item">
        <div className="item" onClick={() => navigate(`/profile/${user._id}`)}>
          <i className="bx bx-user-pin"></i>
          <span>Xem hồ sơ</span>
        </div>
        {user.role === "admin" && (
          <div className="item" onClick={() => navigate(`/admin`)}>
            <i className="bx bx-check-shield"></i>
            <span>Trang quản lý</span>
          </div>
        )}
        <div className="item" onClick={() => dispatch(logout())}>
          <i className="bx bx-power-off"></i>
          <span>Đăng xuất</span>
        </div>
      </div>
    </Styled.SettingDropdown>
  );
};

const NotifyUser = ({ user }: any) => {
  const dispatch = useAppDispatch();
  const { data, sound } = useAppSelector((state) => state.notify);
  const navigate = useNavigate();

  const handleIsRead = (message: any) => {
    dispatch(isReadNotify({ message }));
  };

  const handleDeleteAll = () => {
    const newArr = data.filter((item: any) => item.isRead === false);
    if (newArr.length === 0) return;

    showPromiseConfirm();
  };

  const showPromiseConfirm = () => {
    Modal.confirm({
      zIndex: 10000,
      title: "Bạn có chắc chắn muốn xoá tất cả thông báo?",
      icon: <Icons.ExclamationCircleOutlined />,
      cancelText: "Không",
      okText: "Có",
      onOk() {
        return dispatch(deleteAllNotifies());
      },
      onCancel() {},
    });
  };

  return (
    <Styled.NotifyDropdown onClick={(e) => e.stopPropagation()}>
      <div className="header">
        <span className="title">Thông báo</span>
        <Box gap="10px" alignItems="center">
          <span className="check" onClick={handleDeleteAll}>
            <i className="bx bx-check-double"></i>
            {` Đánh dấu đã đọc`}
          </span>
          {sound ? (
            <span
              style={{ color: colors.primary }}
              className="check"
              onClick={() => dispatch(setSound(false))}
            >
              <i className="bx bxs-bell-ring"></i>
            </span>
          ) : (
            <span
              style={{ color: colors.primary }}
              className="check"
              onClick={() => dispatch(setSound(true))}
            >
              <i className="bx bxs-bell-off"></i>
            </span>
          )}
        </Box>
      </div>
      <div className="list">
        {data.length === 0 ? (
          <div className="content">
            <span className="empty">Không có thông báo nào</span>
          </div>
        ) : (
          data.map((item: any, key: number) => (
            <Box
              className={classNames("hover-item", {
                "notify-not-read": item.isRead === false,
              })}
              style={{
                padding: 10,
                cursor: "pointer",
              }}
              key={key}
              gap="10px"
              onClick={() => {
                handleIsRead(item);
                if (item.url) {
                  navigate(item.url);
                }
              }}
            >
              <ImageLazy
                hover={false}
                src={item.user.avatar}
                width="50px"
                height="50px"
                style={{ borderRadius: "50%", flexShrink: 0 }}
                alt={item.content}
              />
              <Box gap="10px">
                <Box flexDirection="column" flex={1}>
                  <Typography.Title ellipsis level={5}>
                    {`${item.user.name} ${item.text}`}
                  </Typography.Title>
                  <Typography.Paragraph
                    style={{ marginBottom: 0 }}
                    ellipsis={{
                      rows: 2,
                    }}
                  >
                    {item.content}
                  </Typography.Paragraph>
                  <small>
                    <strong>
                      {item.createdAt
                        ? moment(item.createdAt).fromNow()
                        : moment(Date.now()).fromNow()}
                    </strong>
                  </small>
                </Box>
                <ImageLazy
                  style={{ borderRadius: 5 }}
                  hover={false}
                  src={item.image}
                  width="70px"
                  height="70px"
                  alt={item.content}
                />
              </Box>
            </Box>
          ))
        )}
      </div>
    </Styled.NotifyDropdown>
  );
};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { user } = useAppSelector((state) => state.auth);
  const { data } = useAppSelector((state) => state.notify);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (user) {
      dispatch(getNotifies());
    }
  }, [user, dispatch]);

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
              <NavLink to="/search">
                <i className="bx bx-map"></i>
                Địa điểm
              </NavLink>
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
            {user && (
              <React.Fragment>
                <div className="nav-item">
                  <Tooltip title="Đã lưu">
                    <Styled.IconButton onClick={() => navigate("/saved")}>
                      <Icons.HeartFilled
                        style={{
                          fontSize: 20,
                          color: colors.primary,
                        }}
                      />
                    </Styled.IconButton>
                  </Tooltip>
                </div>
                <div className="nav-item">
                  <Tooltip title="Tin nhắn">
                    <Styled.IconButton onClick={() => navigate("/message")}>
                      <Icons.MessageFilled
                        style={{
                          fontSize: 20,
                          color: colors.primary,
                        }}
                      />
                    </Styled.IconButton>
                  </Tooltip>
                </div>
                <Dropdown
                  destroyPopupOnHide
                  overlay={<NotifyUser user={user} />}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <div className="nav-item">
                    <Badge
                      count={data.length}
                      overflowCount={9}
                      offset={[-2, 7.5]}
                    >
                      <Styled.IconButton>
                        <Icons.BellFilled
                          style={{
                            fontSize: 20,
                            color: colors.primary,
                          }}
                        />
                      </Styled.IconButton>
                    </Badge>
                  </div>
                </Dropdown>
              </React.Fragment>
            )}

            {user?.email ? (
              <Dropdown
                overlay={<UserSetting user={user} />}
                placement="bottomRight"
                trigger={["click"]}
              >
                <div className="nav-item" style={{ cursor: "pointer" }}>
                  <Avatar size="large" shape="circle" src={user.avatar} />
                </div>
              </Dropdown>
            ) : (
              <div className="nav-item">
                <Styled.Button
                  className="custom"
                  onClick={() => dispatch(openAuth())}
                >
                  Đăng nhập
                </Styled.Button>
              </div>
            )}
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
