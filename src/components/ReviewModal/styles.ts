import styled from "styled-components";
import { colors } from "../../theme/colors";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.65);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    min-height: 100%;
    max-height: 100%;
    width: 100%;
  }
`;

export const ModalPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
  width: 610px;
  max-height: 96%;
  color: #000;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  @media (max-width: 991px) {
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: 60px;
  padding: 0 60px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 991px) {
    height: 50px;
    padding: 0 40px;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    h2 {
      padding: 0;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      color: #000;
      font-weight: 700;
      text-overflow: ellipsis;
      @media (max-width: 991px) {
        font-size: 20px;
      }
    }
  }
  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 12px;
    right: 16px;
    bottom: auto;
    left: auto;
    cursor: pointer;
    width: 36px;
    height: 36px;
    font-size: 26px;
    color: #666;
    background-color: #e4e6eb;
    border-radius: 50%;
    @media (max-width: 991px) {
      width: 30px;
      height: 30px;
      font-size: 20px;
      top: 10px;
      right: 10px;
    }
  }
`;

export const ModalBody = styled.div`
  min-height: 200px;
  overflow-y: auto;
  padding: 16px;
  @media (max-width: 991px) {
    flex-grow: 1;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 991px) {
    padding: 10px 10px calc(10px + env(safe-area-inset-bottom));
  }
`;

// Form

export const ReviewForm = styled.div`
  width: 100%;
  @media (max-width: 991px) {
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
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    place-items: center;
    padding: 0 10px 10px 0;
    grid-gap: 10px;

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
