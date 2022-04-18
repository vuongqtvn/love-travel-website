import React from "react";
import { Skeleton, Grid } from "antd";
import SkeletonImage from "react-loading-skeleton";
import * as Styled from "./styles";

type Props = {};

const CardPlaceSkeleton = (props: Props) => {
  const screens = Grid.useBreakpoint();
  return (
    <Styled.PlaceItem>
      <Styled.PlaceCard>
        <div className="link-image">
          <SkeletonImage
            style={{
              borderRadius: 6,
            }}
            width={screens.lg ? "270px" : "120px"}
            height={screens.lg ? "100%" : "110px"}
          />
        </div>
        <div className="place-body">
          <Skeleton
            active
            paragraph={{
              rows: screens.lg ? 4 : 2,
            }}
          />
        </div>
      </Styled.PlaceCard>
    </Styled.PlaceItem>
  );
};

export default CardPlaceSkeleton;
