import { Card, Grid, Typography } from "antd";
import React from "react";
import { PlaceType } from "../../types";
import ImageLazy from "../ImageLazy";

type Props = {
  onClick: (place: PlaceType) => void;
  place: PlaceType;
};

const Place = ({ onClick, place }: Props) => {
  const screens = Grid.useBreakpoint();
  return (
    <Card
      onClick={() => onClick(place)}
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
      }}
      cover={
        <ImageLazy
          src={place.thumbnail}
          alt={place.name}
          height={screens.lg ? "240px" : "220px"}
          radius="0"
        />
      }
    >
      <Card.Meta
        title={
          <Typography.Text
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
            ellipsis
          >
            {place.name}
          </Typography.Text>
        }
        description={
          <Typography.Text ellipsis>{place.address}</Typography.Text>
        }
      />
    </Card>
  );
};

export default Place;
