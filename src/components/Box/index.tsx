import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Item =
  | "baseline"
  | "center"
  | "flex-end"
  | "flex-start"
  | "stretch"
  | "space-around"
  | "space-between"
  | "space-evenly";
type Wrap = "nowrap" | "wrap" | "wrap-reverse";
type Direction = "column" | "column-reverse" | "row" | "row-reverse";

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: CSSProperties;
  flexDirection?: Direction;
  flex?: number;
  justifyContent?: Item;
  alignItems?: Item;
  flexWrap?: Wrap;
  gap?: string | number;
  className?: string;
};

const Box = ({
  children,
  style,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  gap,
  className,
}: Props) => {
  return (
    <Styled.BoxWrap
      flex={flex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      gap={gap}
      style={style}
      className={className}
    >
      {children}
    </Styled.BoxWrap>
  );
};

export default Box;
