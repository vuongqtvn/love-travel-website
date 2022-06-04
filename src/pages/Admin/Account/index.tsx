import { useState, useEffect } from "react";
import { Button, Space, Popconfirm, Input, message } from "antd";
import * as Icon from "@ant-design/icons";
import moment from "moment";

import * as Style from "./styles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import path from "../../../constants/path";
import { getAccounts } from "./accountAdminSlice";

function AccountManagement() {
  const { loading, account, accountOptions } = useAppSelector(
    (state) => state.adminAccount
  );
  const [searchKey, setSearchKey] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getAccounts({
        page: 1,
        limit: accountOptions.limit,
      })
    );
  }, [dispatch, accountOptions.limit]);

  function handleSearchBlog(value: string) {
    setSearchKey(value);
    dispatch(
      getAccounts({
        q: value,
        page: accountOptions.page,
        limit: accountOptions.limit,
      })
    );
  }

  const onChangePage = (page: number) => {
    dispatch(
      getAccounts({
        q: searchKey,
        page: page,
        limit: accountOptions.limit,
      })
    );
  };

  const tableColumn = [
    {
      dataIndex: "avatar",
      key: "avatar",
      render: (value: string) => (
        <Style.ShowImage src={value}></Style.ShowImage>
      ),
      width: 120,
    },
    {
      title: "Tên tài khoản",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.length - b.name.length,
      width: 200,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
      width: 240,
    },
    {
      title: "Quyền",
      dataIndex: "role",
      key: "role",
      ellipsis: true,
      width: 240,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
      width: 150,
    },
    {
      title: "Ngày sửa",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
      width: 150,
    },

    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Button
              icon={<Icon.FormOutlined />}
              type="primary"
              ghost
              onClick={() => {
                navigate(`/admin/edit-place/${record._id}`);
              }}
            >
              Sửa
            </Button>
            <Popconfirm
              title="Bạn có muốn xoá bài viết này?"
              onConfirm={() => {
                // dispatch(deleteBlogAction({ id: record.id }));
                message.success("id cần xoá: " + record._id);
              }}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<Icon.DeleteOutlined />} danger>
                Xóa
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const tableData = account.map((accountItem: any, accountIndex: any) => {
    return {
      key: accountIndex,
      ...accountItem,
    };
  });

  return (
    <Style.AdminPlaceWrap>
      <Style.CustomSpaceBox>
        <Style.Title>Quản lý tài khoản</Style.Title>
        <Style.CustomSpace>
          <Style.Search>
            <Input
              placeholder="Tìm kiếm..."
              suffix={<Icon.SearchOutlined />}
              value={searchKey}
              onChange={(e) => handleSearchBlog(e.target.value)}
            />
          </Style.Search>
          <Style.CustomButton
            type="primary"
            onClick={() => navigate(path.admin.addPlace)}
          >
            Thêm mới
          </Style.CustomButton>
        </Style.CustomSpace>
      </Style.CustomSpaceBox>
      <div>
        <Style.CustomTable
          size="small"
          scroll={{ x: 1200 }}
          columns={tableColumn}
          dataSource={tableData}
          pagination={{
            position: ["bottomCenter"],
            current: accountOptions.page,
            onChange: onChangePage,
            pageSize: accountOptions.limit,
            total: accountOptions.total,
          }}
          loading={loading.getAccount}
        />
      </div>
    </Style.AdminPlaceWrap>
  );
}

export default AccountManagement;
