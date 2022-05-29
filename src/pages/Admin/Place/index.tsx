import { Button, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../../constants/path";

const AdminPlace = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography.Title level={3}>Quản lý địa điểm</Typography.Title>
      <Space style={{ padding: "15px 0" }}>
        <Button type="primary" onClick={() => navigate(path.admin.addPlace)}>
          Thêm địa điểm
        </Button>
        <Button type="primary" onClick={() => navigate(path.admin.editPlace)}>
          Cập nhật địa điểm
        </Button>
      </Space>
    </div>
  );
};

export default AdminPlace;
