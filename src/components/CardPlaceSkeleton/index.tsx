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
          {screens.lg ? (
            <SkeletonImage
              width={"270px"}
              height={"100%"}
              style={{
                transform: "translateY(-2.5px)",
                borderRadius: 6,
              }}
            />
          ) : (
            <SkeletonImage
              width={"120px"}
              height={"110px"}
              style={{
                transform: "translateY(-2.5px)",
                borderRadius: 6,
              }}
            />
          )}
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
