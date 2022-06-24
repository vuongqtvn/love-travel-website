import React, { useEffect } from "react";
import moment from "moment";
import { ImageLazy } from "../../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { getDashboardPlaces } from "../../dashboardSlice";
import { CustomTable } from "../../styles";

const PlaceTable = () => {
  const { places } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDashboardPlaces());
  }, [dispatch]);

  const tableColumn = [
    {
      title: "Ảnh địa điểm",
      dataIndex: "thumbnail",
      key: "thumbnail",
      width: 125,
      render: (value: string) => (
        <ImageLazy
          src={value}
          alt="image"
          width="75px"
          height="75px"
        ></ImageLazy>
      ),
    },
    {
      title: "Tên địa điểm",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },

    {
      title: "Mô tả địa điểm",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Đánh giá",
      dataIndex: "total",
      key: "total",
      render: (value: any) => `có ${value} bài đánh giá`,
    },
  ];

  const tableData = places.data.map((placeItem: any, placeIndex) => {
    return {
      ...placeItem.data,
      key: placeIndex,
      total: placeItem.reviewTotal,
    };
  });

  return (
    <div>
      <CustomTable
        size="small"
        scroll={{ x: 1200 }}
        columns={tableColumn}
        dataSource={tableData}
        loading={places.loading}
      />
    </div>
  );
};

export default PlaceTable;
