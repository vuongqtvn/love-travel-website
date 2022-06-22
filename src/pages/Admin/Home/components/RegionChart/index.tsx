import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column, ColumnConfig } from "@ant-design/plots";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { getDashboardRegion } from "../../dashboardSlice";

const RegionChart = () => {
  const { regions } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDashboardRegion());
  }, [dispatch]);

  const config: ColumnConfig = {
    data: regions.data,
    loading: regions.loading,
    xField: "name",
    yField: "placeTotal",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: {
        alias: "Khu vực",
      },
      placeTotal: {
        alias: "Địa điểm",
      },
    },
  };
  return <Column {...config} />;
};

export default RegionChart;
