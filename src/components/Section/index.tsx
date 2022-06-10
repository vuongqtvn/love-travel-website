import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[] | any;
  style?: CSSProperties;
};

const Section = (props: Props) => {
  return (
    <Styled.SectionWrapper style={props.style}>
      {props.children}
    </Styled.SectionWrapper>
  );
};

export default Section;
