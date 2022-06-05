import { useEffect } from "react";
import { Button, Space, Popconfirm, message, Table } from "antd";
import * as Icon from "@ant-design/icons";
import moment from "moment";

import * as Style from "../styles";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { acceptPost, getPostsAccept } from "../acceptAdminSlice";
import reviewApi from "../../../../api/reviewApi";
import path from "../../../../constants/path";

function AcceptPost() {
  const { loading, posts, postsTotal } = useAppSelector(
    (state) => state.adminAccept
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getPostsAccept({
        page: 1,
        limit: 10,
      })
    );
  }, [dispatch]);

  const onChangePage = (page: number) => {
    dispatch(
      getPostsAccept({
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
            <Popconfirm
              title="Bạn có muốn phê duyệt bài review này?"
              onConfirm={() => {
                dispatch(acceptPost(record._id))
                  .unwrap()
                  .then(() => {
                    message.success(`đã phê duyệt bài review`);
                    navigate(path.admin.post);
                  })
                  .catch(() => {
                    message.error(`Phê duyệt bài review thất bại!`);
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
                reviewApi
                  .deleteReview(record._id)
                  .then(() => {
                    message.success(`đã xoá bài review thành công!`);
                  })
                  .catch(() => {
                    message.error(`Xoá bài review thất bại!`);
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
            total: Math.ceil(postsTotal / 10) || 1,
          }}
          loading={loading.getPostsAccept}
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

export default AcceptPost;
