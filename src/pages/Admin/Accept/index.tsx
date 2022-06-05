import React from "react";
import { Tabs } from "antd";
import AcceptPlace from "./components/AcceptPlace";
import AcceptPost from "./components/AcceptPost";

const onChange = (key: string) => {
  console.log(key);
};

const AdminAccept: React.FC = () => (
  <Tabs destroyInactiveTabPane defaultActiveKey="1" onChange={onChange}>
    <Tabs.TabPane tab="Địa điểm" key="1">
      <AcceptPlace />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Bài Review" key="2">
      <AcceptPost />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Bài khuyến mãi" key="3">
      Bài khuyến mãi
    </Tabs.TabPane>
  </Tabs>
);

export default AdminAccept;
