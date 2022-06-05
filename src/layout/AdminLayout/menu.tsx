import React, { FC } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAppGlobal } from "../../appSlice";

export interface MenuItem {
  code: string;
  label: string;
  icon?: any;
  path: string;
  children?: MenuItem[];
}

export type TMenuChild = Omit<MenuItem, "children">;

export type TMenuList = MenuItem[];

interface MenuProps {
  menuList: MenuItem[];
}

const MenuComponent: FC<MenuProps> = (props) => {
  const { menuList } = props;
  const { device } = useAppSelector((state) => state.app);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const onMenuClick = (path: string) => {
    navigate(path);
    if (device !== "DESKTOP") {
      dispatch(setAppGlobal({ collapsed: true }));
    }
  };

  return (
    <Menu
      mode="inline"
      theme="light"
      selectedKeys={[location.pathname]}
      onSelect={(k) => onMenuClick(k.key)}
      className="layout-page-sider-menu text-2"
    >
      {menuList.map((menu) => {
        if (menu.children) {
          return (
            <Menu.SubMenu key={menu.path}>
              {menu.children.map((child) => (
                <Menu.Item key={child.path}>{child.label}</Menu.Item>
              ))}
            </Menu.SubMenu>
          );
        } else {
          const Icon = menu.icon;
          return (
            <Menu.Item icon={<Icon />} key={menu.path}>
              {menu.label}
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

export default MenuComponent;
