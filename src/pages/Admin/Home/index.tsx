import React, { useEffect } from "react";
import { Card, Col, Row, Spin, Tabs, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import RegionChart from "./components/RegionChart";
import { getDashboardInfo } from "./dashboardSlice";

const AdminHome = () => {
  const { info } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDashboardInfo());
  }, [dispatch]);

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div>
      <Spin spinning={info.loading}>
        <Row gutter={10}>
          <Col span={6}>
            <Card title="Khu vực">
              <Typography.Text strong>
                Có tổng {info.regions} khu vực
              </Typography.Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Địa điểm">
              <Typography.Text strong>
                Có tổng {info.places} địa điểm
              </Typography.Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Bài viết">
              <Typography.Text strong>
                Có tổng {info.reviews} bài viết
              </Typography.Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Tài khoản">
              <Typography.Text strong>
                Có tổng {info.accounts} tài khoản
              </Typography.Text>
            </Card>
          </Col>
        </Row>
      </Spin>
      <div
        style={{
          padding: 15,
          background: "white",
          marginTop: 10,
        }}
      >
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <Tabs.TabPane tab="Khu vực" key="1">
            <div
              style={{
                padding: "15px 0",
              }}
            >
              <RegionChart />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Địa điểm" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Bài viết" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tài khoản" key="4">
            Content of Tab Pane 4
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminHome;
