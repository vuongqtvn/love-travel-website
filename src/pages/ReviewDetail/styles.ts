import styled from "styled-components";
import { colors } from "../../theme/colors";

export const ReviewDetailWrapper = styled.div`
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const ReviewDetailHeader = styled.div`
  position: absolute;
  top: 60px;
  right: auto;
  bottom: auto;
  left: 0;
  width: 100%;
  height: 220px;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #ffb8b8, #fbfbfb);
  @media (max-width: 991px) {
    top: 54px;
  }
`;

export const ReviewDetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: auto;
  padding: 0 16px;

  @media (min-width: 1280px) {
    width: 1200px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 2px;
  }
`;

export const ReviewDetailContent = styled.div`
  width: 66.66%;
  position: relative;
  border-radius: 10px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ReviewDetailSidebar = styled.div`
  width: 33.33%;
  height: 100%;
  flex-grow: 1;
  position: sticky;
  top: 16px;
  margin-left: 20px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  @media (max-width: 991px) {
    width: 100%;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
    margin-left: 0;
  }
`;
