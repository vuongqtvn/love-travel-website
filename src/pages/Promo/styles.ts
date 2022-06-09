import styled from "styled-components";

export const PromoContainer = styled.div`
  overflow-x: hidden;
`;
export const PromoHeader = styled.div`
  height: 220px;
  margin-bottom: 24px;
  background: -webkit-linear-gradient(top, #ffb8b8, #fbfbfb);
  background: linear-gradient(180deg, #ffb8b8, #fbfbfb);
  @media (max-width: 991px) {
    height: auto;
    margin-bottom: 10px;
    background: transparent;
  }
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 0 16px;
    @media (min-width: 1280px) {
      width: 1200px;
    }
    .content {
      color: #1d2129;
      width: 70%;
      margin-right: 80px;
      @media (max-width: 991px) {
        width: 100%;
        padding: 10px 10px 0;
        margin-right: 0;
      }
      h1 {
        color: #1d2129;
        margin-bottom: 16px;
        font-size: 32px;
        padding: 0;
        margin: 0;
        @media (max-width: 991px) {
          font-size: 18px;
          margin-bottom: 0;
          font-weight: 700;
        }
      }
      p {
        font-size: 20px;
        padding: 0;
        margin: 0;
        font-weight: 500;
        @media (max-width: 991px) {
          display: none;
          font-size: 12px;
        }
      }
    }
    .image {
      width: 30%;
      height: 100%;
      text-align: right;
      padding: 30px;
      @media (max-width: 991px) {
        display: none;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
`;
export const PromoBody = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 16px;
  @media (max-width: 991px) {
    padding: 0 2px;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;
export const PromoList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  .promo-item {
    width: calc(100% / 3);
    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;
