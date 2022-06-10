import { useEffect } from "react";
import { Button, Space, Popconfirm, message, Table } from "antd";
import * as Icon from "@ant-design/icons";
import moment from "moment";

import * as Style from "../styles";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { acceptPlace, getPlacesAccept } from "../acceptAdminSlice";
import { deletePlace } from "../../Place/adminPlaceSlice";
import path from "../../../../constants/path";

function AcceptPlace() {
  const { loading, places, placesTotal } = useAppSelector(
    (state) => state.adminAccept
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getPlacesAccept({
        page: 1,
        limit: 10,
      })
    );
  }, [dispatch]);

  const onChangePage = (page: number) => {
    dispatch(
      getPlacesAccept({
        page: page,
        limit: 10,
      })
    );
  };

  const tableColumn = [
    Table.EXPAND_COLUMN,
    {
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (value: string) => (
        <Style.ShowImage src={value}></Style.ShowImage>
      ),
    },
    {
      title: "Tên địa điểm",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },

    {
      title: "Mô tả địa điểm",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Người tạo",
      dataIndex: "user",
      key: "user",
      ellipsis: true,
      render: (value: any) => value?.name && value.name,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Popconfirm
              title="Bạn có muốn phê duyệt địa điểm này?"
              onConfirm={() => {
                dispatch(acceptPlace(record._id))
                  .unwrap()
                  .then(() => {
                    message.success(`đã phê duyệt địa điểm ${record.name}`);
                    navigate(path.admin.place);
                  });
              }}
              onCancel={() => null}
              okText="Có"
              cancelText="Không"
            >
              <Button icon={<Icon.FormOutlined />} type="primary" ghost>
                Phê duyệt
              </Button>
            </Popconfirm>

            <Popconfirm
              title="Bạn có muốn xoá địa điểm này?"
              onConfirm={() => {
                dispatch(deletePlace(record._id))
                  .unwrap()
                  .then(() => {
                    message.success(`đã xoá địa điểm ${record.name}`);
                  });
              }}
              onCancel={() => null}
              okText="Có"
              cancelText="Không"
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

  const tableData = places?.map((placeItem: any, placeIndex: any) => {
    return {
      key: placeIndex,
      ...placeItem,
    };
  });

  return (
    <Style.AdminPlaceWrap>
      <div>
        <Style.CustomTable
          size="small"
          scroll={{ x: 1200 }}
          columns={tableColumn}
          dataSource={tableData}
          pagination={{
            position: ["bottomCenter"],
            // current: accountOptions.page,
            onChange: onChangePage,
            pageSize: 10,
            total: Math.ceil(placesTotal / 10) || 1,
          }}
          loading={loading.getPlacesAccept}
          expandable={{
            expandedRowRender: (record: any) => (
              <div>
                <p>Địa chỉ: {record.address}</p>
              </div>
            ),
          }}
        />
      </div>
    </Style.AdminPlaceWrap>
  );
}

export default AcceptPlace;
