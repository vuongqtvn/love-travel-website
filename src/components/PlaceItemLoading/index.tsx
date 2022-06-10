import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./styles";

const PlaceItemLoading = () => {
  return (
    <Styled.PlaceItemWrap>
      <Skeleton className="avatar" />
      <div className="info">
        <h4>
          <Skeleton />
        </h4>
        <p>
          <Skeleton />
        </p>
      </div>
    </Styled.PlaceItemWrap>
  );
};

export default PlaceItemLoading;
