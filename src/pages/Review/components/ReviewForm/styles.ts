import styled from "styled-components";
import { colors } from "../../../../theme/colors";

export const ReviewForm = styled.div`
  width: 50%;
  flex-shrink: 0;
  order: 1;
  @media (max-width: 991px) {
    width: 100%;
    order: 2;
    .review-input {
      :not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
  .review-input {
    :not(:last-child) {
      margin-bottom: 12px;
    }
    h3 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      color: #898c95;
      line-height: 1.5715;
    }
    .rate-item {
      display: flex;
      align-items: center;
      padding: 0 20px 0 10px;
      .rate-item-cate {
        font-size: 16px;
        flex: 1 1;
      }
      .ant-rate {
        flex: 2 1;
        font-size: 32px;
      }
      .rate-type {
        flex: 1 1;
        .rate-type-text {
          position: relative;
          display: inline-block;
          font-size: 16px;
          font-weight: 500;
          height: 32px;
          line-height: 32px;
          padding: 0 12px 0 6px;
          margin-left: 20px;
          margin-top: 4px;
          color: #fff;
          background: #e03;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          ::after {
            content: "";
            border-color: transparent #e03 transparent transparent;
            border-style: solid;
            border-width: 16px 16px 16px 0;
            width: 0;
            height: 0;
            position: absolute;
            left: -16px;
            top: 0;
          }
        }
      }
    }
    .title {
      margin-bottom: 8px;
    }
    textarea {
      margin-bottom: 10px;
      font-size: 16px;
      border-radius: 10px;
    }
    @media (max-width: 991px) {
      .rate-item {
        justify-content: space-between;
        .rate-item-cate {
          font-size: 16px;
        }
        .ant-rate {
          flex: 0 0 auto;
          font-size: 32px;
        }
        .rate-type {
          display: none;
        }
      }
    }
  }

  .show_images {
    margin-top: 10px;
    max-height: 300px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    place-items: center;
    padding: 0 10px 10px 0;
    grid-gap: 10px;
    ::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.textInput};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${colors.white};
      border-radius: 5px;
    }
    img,
    video {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
  .media-show {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border: 1px solid ${colors.primary};
    .btn {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      z-index: 5;
    }
  }
`;
