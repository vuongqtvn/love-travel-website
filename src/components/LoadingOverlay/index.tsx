import React from "react";
import { Spin } from "antd";
import * as Styled from "./styles";

const LoadingOverlay = () => {
  return (
    <Styled.LoadingContainer>
      <Spin />
    </Styled.LoadingContainer>
  );
};

export default LoadingOverlay;
