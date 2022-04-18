import React from "react";
import * as Styled from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[] | any;
};

const Section = (props: Props) => {
  return <Styled.SectionWrapper>{props.children}</Styled.SectionWrapper>;
};

export default Section;
