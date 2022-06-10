import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./styles";

const UserItemLoading = () => {
  return (
    <Styled.UserItemWrap>
      <Skeleton className="avatar" />
      <div className="info">
        <h4 className="name">
          <Skeleton />
        </h4>
        <div className="desc">
          <span>
            <Skeleton />
          </span>
        </div>
      </div>
    </Styled.UserItemWrap>
  );
};

export default UserItemLoading;
