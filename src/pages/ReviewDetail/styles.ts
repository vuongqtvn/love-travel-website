import styled from "styled-components";

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
  flex-grow: 1;
  padding: 16px 24px;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  @media (max-width: 991px) {
    width: 100%;
    padding: 8px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  }
`;

export const ReviewContentHeader = styled.div`
  padding-bottom: 4px;
  .info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    .avatar {
      cursor: pointer;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      overflow: hidden;
    }
    .content {
      margin: 0 36px 0 8px;
      flex-grow: 1;
      .author {
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.4px;
          margin-right: 5px;
          color: #000;
          @media (max-width: 991px) {
            font-size: 16px;
          }
        }
      }
      .text {
        @media (max-width: 991px) {
          font-size: 12px;
        }
        span {
          color: #898c95;
        }
        a {
          color: #e03;
        }
      }
    }
    .option {
      position: absolute;
      top: 0;
      right: 4px;
      bottom: auto;
      left: auto;
      cursor: pointer;
      font-size: 20px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #a5a5a5;
    }
  }
`;

export const ReviewContentImages = styled.div``;

export const ReviewDetailSidebar = styled.div`
  width: 33.33%;
  height: 100%;
  flex-grow: 1;
  position: sticky;
  top: 16px;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;
