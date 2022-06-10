import { useEffect } from "react";
import { Button, Space, Popconfirm, message, Table } from "antd";
import * as Icon from "@ant-design/icons";
import moment from "moment";

import * as Style from "./styles";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getReviews, setPosts } from "./adminReviewSlice";
import reviewApi from "../../../api/reviewApi";

function AdminReview() {
  const { loading, posts, total } = useAppSelector(
    (state) => state.adminReview
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getReviews({
        page: 1,
        limit: 10,
      })
    );
  }, [dispatch]);

  const onChangePage = (page: number) => {
    dispatch(
      getReviews({
        page: page,
        limit: 10,
      })
    );
  };

  const tableColumn = [
    Table.EXPAND_COLUMN,
    {
      dataIndex: "images",
      key: "images",
      render: (data: any) =>
        data.length > 0 && (
          <Style.ShowImage src={data?.[0].url}></Style.ShowImage>
        ),
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
      ellipsis: true,
    },
    {
      title: "Địa điểm",
      dataIndex: "place",
      key: "place",
      render: (data: any) => data?.name && data.name,
      ellipsis: true,
    },
    {
      title: "Người tạo",
      dataIndex: "user",
      key: "user",
      render: (data: any) => data?.name && data.name,
      ellipsis: true,
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
            {/* <Button
              icon={<Icon.FormOutlined />}
              type="primary"
              ghost
              onClick={() => {
                navigate(`/admin/edit-review/${record._id}`);
              }}
            >
              Sửa
            </Button> */}

            <Popconfirm
              title="Bạn có muốn xoá địa điểm này?"
              onConfirm={() => {
                reviewApi.deleteReview(record._id).then(() => {
                  message.success(`đã xoá bài review thành công!`);
                  dispatch(
                    setPosts(
                      posts.filter((item: any) => item._id !== record._id)
                    )
                  );
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

  const tableData = posts?.map((postItem: any, postIndex: any) => {
    return {
      key: postIndex,
      ...postItem,
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
            total: Math.ceil(total / 10) || 1,
          }}
          loading={loading.getReviews}
          expandable={{
            expandedRowRender: (record: any) => (
              <div>
                <p>Nội dung đánh giá: {record.content}</p>
                <p>Đánh giá trung bình: {record.rateAvg} sao</p>
              </div>
            ),
          }}
        />
      </div>
    </Style.AdminPlaceWrap>
  );
}

export default AdminReview;
