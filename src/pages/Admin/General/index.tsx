import React, { useEffect } from "react";
import { Spin, Tabs } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getGeneral, resetGeneral } from "./generalAdminSlice";
import Benefits from "./components/Benefits";
import Tags from "./components/Tags";
import Categories from "./components/Categories";
import { Wrapper } from "./styles";
import Regions from "./components/Regions";
import Purposes from "./components/Purposes";

const AdminGeneral = () => {
  const { loading } = useAppSelector((state) => state.adminGeneral);
  const onChange = (key: string) => {
    console.log(key);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGeneral());

    return () => {
      dispatch(resetGeneral());
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <Spin spinning={loading}>
        <Tabs destroyInactiveTabPane defaultActiveKey="1" onChange={onChange}>
          <Tabs.TabPane tab="Khu vực" key="1">
            <Regions />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tiện ích" key="2">
            <Benefits />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Loại hình" key="3">
            <Categories />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mục đích" key="4">
            <Purposes />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Kiểu địa điểm" key="5">
            <Tags />
          </Tabs.TabPane>
        </Tabs>
      </Spin>
    </Wrapper>
  );
};

export default AdminGeneral;
