import React from "react";
import { images } from "../../assets";
import * as Styled from "./styles";

type Props = {
  image?: string;
  text: string;
};

const Empty = ({ text, image }: Props) => {
  return (
    <Styled.EmptyContainer>
      <Styled.EmptyBox>
        <Styled.EmptyContent>
          <img src={image ? image : images.notfound} alt={text} />
          <h3>{text}</h3>
        </Styled.EmptyContent>
      </Styled.EmptyBox>
    </Styled.EmptyContainer>
  );
};

export default Empty;
