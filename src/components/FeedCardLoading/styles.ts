import styled from "styled-components";

export const FeedCardWrap = styled.div`
  padding: 12px 16px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  @media (max-width: 991px) {
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  }
`;

export const FeedCardHeader = styled.div`
  padding-bottom: 4px;
`;

export const FeedHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  .avatar {
    background-color: #eee;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    flex: 0 0 auto;
    cursor: pointer;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: none;
    overflow: hidden;
  }

  .content {
    margin: 0 30px 0 8px;
    flex-grow: 1;
    .ant-rate-star:not(:last-child) {
      margin-right: 2px;
    }
    .author {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        display: inline-flex;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.4px;
        margin-right: 5px;
        color: #000;
        @media (max-width: 991px) {
          font-size: 16px;
        }
        i {
          font-size: 14px;
          margin-left: 5px;
          margin-right: 5px;
          color: #00cbc6;
        }
      }
      & > i {
        width: 12px;
        color: #cbcbcb;
        margin-right: 4px;
      }
    }
    .rate-time {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .star {
        display: flex;
        align-items: center;
        justify-content: center;
        b {
          position: relative;
          top: 2px;
          margin-right: 4px;
        }
      }
      .dot {
        font-size: 10px;
        color: #cbcbcb;
        margin: 0 6px;
      }
      .time {
        span {
          color: #898c95;
        }
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
`;

export const FeedCardBody = styled.div`
  padding: 4px 2px;
  .text {
    color: inherit;
    white-space: pre-line;
    font-size: 16px;
    line-height: 24px;
    word-break: break-word;
    @media (max-width: 991px) {
      font-size: 14px;
    }
  }
  .images-wrap {
    height: 640px;
    margin-top: -4px;
    overflow: hidden;
    @media (max-width: 991px) {
      margin-top: -8px;
      margin-left: -12px;
      margin-right: -12px;
      height: 340px;
    }
    .image {
      background-color: #eee;
      overflow: hidden;
      cursor: pointer;
      width: 33.3%;
      height: 50%;
      border-bottom: 1px solid #fff;
      border-right: 1px solid #fff;
      border-radius: 0;
    }
    .images-1 {
      position: relative;
      display: flex;
      flex-flow: wrap;
      height: 100%;
      width: 100%;
      margin-top: 14px;
      .image {
        width: 100%;
        height: 100%;
        border-bottom: none;
        &:last-child {
          border-right: none;
        }
      }
    }
    .images-2 {
      position: relative;
      display: flex;
      flex-flow: wrap;
      height: 100%;
      width: 100%;
      margin-top: 14px;
      .image {
        width: 50%;
        height: 100%;
        border-bottom: none;
        &:last-child {
          border-right: none;
        }
      }
    }
    .images-3 {
      position: relative;
      display: flex;
      flex-flow: wrap;
      height: 100%;
      width: 100%;
      margin-top: 14px;
      flex-direction: column;
      .image {
        &:first-child {
          width: 60%;
          height: 100%;
        }
        &:nth-child(odd) {
          border-bottom: none;
        }
        &:not(:first-child) {
          width: 40%;
          height: 50%;
        }
      }
    }
    .images-4 {
      position: relative;
      display: flex;
      flex-flow: wrap;
      height: 100%;
      width: 100%;
      margin-top: 14px;
      .image {
        width: 50%;
        height: 50%;
      }
    }
    .images-5 {
    }
    .images-more {
      position: relative;
      display: flex;
      flex-flow: wrap;
      height: 100%;
      width: 100%;
      margin-top: 14px;
      .image {
        &:nth-child(-n + 2) {
          width: 50%;
          height: 60%;
        }
        &:nth-child(2),
        &:last-child {
          border: none;
        }
        &:nth-child(n + 3) {
          width: 33.33%;
          height: 40%;
          border-bottom: none;
        }
        &.more {
          position: relative;
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
            font-size: 36px;
            font-weight: 500;
            color: #fff;
            @media (max-width: 991px) {
              font-size: 24px;
            }
          }
          &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            opacity: 0;
            background: rgba(0, 0, 0, 0.4);
            transition: all, 0.25s ease-in-out;
            z-index: 2;
          }
        }
      }
    }
  }
`;

export const FeedCardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 0;
  margin-top: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const FeedCardNewReply = styled.div`
  display: flex;
  padding: 10px 6px 2px;
`;

export const FeedCardListReply = styled.div`
  text-align: center;
  margin-top: 8px;
`;
