/* eslint-disable react-hooks/exhaustive-deps */
import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Props = {
  style?: CSSProperties;
  radius?: string;
  height?: string;
  width?: string;
};

const ImageSkeleton = (props: Props) => {
  return (
    <Styled.ImageWrapper
      radius={props.radius}
      width={props.width}
      height={props.height}
      style={props.style}
    >
      <div className="card-image">
        <div className="card-lazy"></div>
      </div>
    </Styled.ImageWrapper>
  );
};

export default ImageSkeleton;
