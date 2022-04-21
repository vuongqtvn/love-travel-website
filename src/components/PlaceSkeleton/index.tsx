import { Card, Grid } from "antd";
import React from "react";
import Skeleton from "react-loading-skeleton";
import ImageSkeleton from "../ImageSkeleton";

type Props = {};

const PlaceSkeleton = (props: Props) => {
  const screens = Grid.useBreakpoint();
  return (
    <Card
      size="small"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 15,
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
      }}
      bodyStyle={{
        flex: 1,
        padding: 8,
      }}
      cover={
        <ImageSkeleton height={screens.lg ? "240px" : "220px"} radius="0" />
      }
    >
      <h1>
        <Skeleton />
      </h1>

      <Skeleton count={1} />
    </Card>
  );
};

export default PlaceSkeleton;
