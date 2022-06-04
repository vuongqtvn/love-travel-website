import { useState, useEffect } from "react";
import { Button, Space, Popconfirm, Input } from "antd";
import * as Icon from "@ant-design/icons";
import moment from "moment";

import * as Style from "./styles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import path from "../../../constants/path";
import { deletePlace, getPlaces } from "./adminPlaceSlice";

function AdminPlace() {
  const { loading, places, placesOptions } = useAppSelector(
    (state) => state.adminPlace
  );
  const [searchKey, setSearchKey] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getPlaces({
        page: 1,
        limit: placesOptions.limit,
      })
    );
  }, [dispatch, placesOptions.limit]);

  function handleSearchBlog(value: string) {
    setSearchKey(value);
    dispatch(
      getPlaces({
        q: value,
        page: placesOptions.page,
        limit: placesOptions.limit,
      })
    );
  }

  const onChangePage = (page: number) => {
    dispatch(
      getPlaces({
        q: searchKey,
        page: page,
        limit: placesOptions.limit,
      })
    );
  };

  const tableColumn = [
    {
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (value: string) => (
        <Style.ShowImage src={value}></Style.ShowImage>
      ),
      width: 120,
    },
    {
      title: "Tên địa điểm",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.length - b.name.length,
      width: 300,
    },

    {
      title: "Mô tả địa điểm",
      dataIndex: "description",
      key: "description",
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
                dispatch(deletePlace(record._id));
                // message.success("id cần xoá: " + record._id);
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

  const tableData = places.map((placeItem, placeIndex) => {
    return {
      key: placeIndex,
      ...placeItem,
    };
  });

  return (
    <Style.AdminPlaceWrap>
      <Style.CustomSpaceBox>
        <Style.Title>Quản lý địa điểm</Style.Title>
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
          scroll={{ x: 1000 }}
          columns={tableColumn}
          dataSource={tableData}
          pagination={{
            position: ["bottomCenter"],
            current: placesOptions.page,
            onChange: onChangePage,
            pageSize: placesOptions.limit,
            total: placesOptions.total,
          }}
          loading={loading.getPlaces}
        />
      </div>
    </Style.AdminPlaceWrap>
  );
}

export default AdminPlace;
