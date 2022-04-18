import React from "react";
import * as Styled from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Container = (props: Props) => {
  return <Styled.ContainerWrapper>{props.children}</Styled.ContainerWrapper>;
};

export default Container;
