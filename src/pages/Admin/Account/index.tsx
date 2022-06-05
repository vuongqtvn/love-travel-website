import { useEffect, useState } from "react";
import * as Icon from "@ant-design/icons";
import { Button, Input, Space, Tag } from "antd";
import moment from "moment";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { colors } from "../../../theme/colors";
import { getAccounts } from "./accountAdminSlice";
import ModifyAccountModal from "./components/ModalAccount";
import * as Style from "./styles";

function AccountManagement() {
  const { loading, account, accountOptions } = useAppSelector(
    (state) => state.adminAccount
  );
  const { user } = useAppSelector((state) => state.auth);
  const [searchKey, setSearchKey] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(null);

  const dispatch = useAppDispatch();

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
        page: 1,
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
    },
    {
      title: "Tên tài khoản",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
    },
    {
      title: "Quyền",
      dataIndex: "role",
      key: "role",
      ellipsis: true,
      render: (value: any) =>
        value === "admin" ? (
          <Tag color={colors.black}>{value}</Tag>
        ) : (
          <Tag color={colors.primary}>{value}</Tag>
        ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Ngày sửa",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",

      render: (value: any) =>
        !value ? (
          <span style={{ color: "red" }}>Khóa</span>
        ) : (
          <span style={{ color: "#52c41a" }}>Kích hoạt</span>
        ),
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Button
              disabled={user?._id === record._id}
              icon={<Icon.FormOutlined />}
              type="primary"
              ghost
              onClick={() => {
                setIsModalVisible(true);
                setData(record);
                console.log(record);
              }}
            >
              Sửa
            </Button>
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
      <ModifyAccountModal
        data={data}
        isShowModal={isModalVisible}
        setIsShowModal={setIsModalVisible}
      />
    </Style.AdminPlaceWrap>
  );
}

export default AccountManagement;
