import { Dropdown, Menu, Space, Layout, Avatar } from "antd";

import * as Icons from "@ant-design/icons";
import * as Style from "./styles";
import { images } from "../../../../assets";
import { useAppSelector } from "../../../../redux/hooks";

const { Header } = Layout;

function HeaderAdmin() {
  const { user } = useAppSelector((state) => state.auth);
  const menuProfile = (
    <Menu>
      <Menu.Item key="0">
        <Space size={5} align="center">
          <Icons.FireOutlined /> <span>Xem thông tin</span>
        </Space>
      </Menu.Item>
      <Menu.Item key="1">
        <Space size={5} align="center">
          <Icons.LogoutOutlined /> <span>Đăng xuất</span>
        </Space>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          backgroundColor: "#fff",
          borderBottom: "1px solid #f0f0f0",
          boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)",
        }}
      >
        <Style.SpaceCT>
          <Style.Logo>
            <img src={images.logo} alt="love travel" />
          </Style.Logo>
          <Style.MenuRight>
            <Dropdown overlay={menuProfile} trigger={["click"]}>
              <Style.Profile>
                <Avatar src={user?.avatar} size="large" />
                <span className="name">{user?.name}</span>
              </Style.Profile>
            </Dropdown>
          </Style.MenuRight>
        </Style.SpaceCT>
      </Header>
    </>
  );
}
export default HeaderAdmin;
