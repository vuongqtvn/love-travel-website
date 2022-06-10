import React from "react";
import { Skeleton } from "antd";
import ImageLazy from "../ImageLazy";
import * as Styled from "./styles";

const PlaceItem = ({
  place,
  onClick,
}: {
  place: any;
  onClick?: (place: any) => any;
}) => {
  return (
    <Styled.PlaceItemWrap onClick={() => onClick && onClick(place)}>
      <ImageLazy
        hover={false}
        src={place.thumbnail}
        alt={place.name}
        className="avatar"
      />
      <div className="info">
        <h4 className="name">
          {place.name || <Skeleton.Input size="small" />}
        </h4>
        <div className="desc">
          <span> {place.address || <Skeleton.Input size="small" />}</span>
        </div>
      </div>
    </Styled.PlaceItemWrap>
  );
};

export default PlaceItem;
