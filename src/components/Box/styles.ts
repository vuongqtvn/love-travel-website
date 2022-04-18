import styled from "styled-components";

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

interface BoxProps {
  flexDirection?: Direction;
  flex?: number;
  justifyContent?: Item;
  alignItems?: Item;
  flexWrap?: Wrap;
  gap?: string | number;
}

export const BoxWrap = styled.div<BoxProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  flex-wrap: ${(props) => (props.flexWrap ? "wrap" : "nowrap")};
  gap: ${(props) => (props.gap ? props.gap : undefined)};
  flex: ${(props) => (props.flex ? props.flex : undefined)};
`;
