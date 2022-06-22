import React from "react";
import * as Styled from "./styles";

const ReviewDetail = () => {
  return (
    <Styled.ReviewDetailWrapper>
      <Styled.ReviewDetailHeader />
      <Styled.ReviewDetailContainer>
        <Styled.ReviewDetailContent>Review Detail</Styled.ReviewDetailContent>
        <Styled.ReviewDetailSidebar>Review Sidebar</Styled.ReviewDetailSidebar>
      </Styled.ReviewDetailContainer>
    </Styled.ReviewDetailWrapper>
  );
};

export default ReviewDetail;
