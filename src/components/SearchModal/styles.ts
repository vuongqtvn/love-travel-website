import styled from "styled-components";

export const SearchModalOverlay = styled.div`
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

export const SearchModalWrapper = styled.div`
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

export const SearchModal = styled.div`
  width: 680px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
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
  .modal-title {
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
  .modal-close {
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
  @media (max-width: 991px) {
    height: 50px;
    padding: 0 40px;
  }
`;

export const ModalBody = styled.div`
  min-height: 200px;
  overflow-y: auto;
  padding: 16px;
  .search {
    .search-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      .search-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        flex-direction: column;
        height: 40px;
        padding: 0 6px;
        position: relative;
        background-color: #f0f2f5;
        border-radius: 6px;
        transition: width 0.3s ease;
        .search-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 30px;
          padding: 0 6px;
          border: 1px solid transparent;
          transition: padding 0.15s ease-in-out;
          i {
            font-size: 18px;
            color: #606770;
          }
          input {
            flex: 1 1;
            font-size: 16px;
            color: #606770;
            outline: none;
            border: none;
            height: 28px;
            line-height: 28px;
            margin-left: 6px;
            margin-right: 16px;
            background: transparent;
            position: relative;
          }
        }
        .spin {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
        }
        button {
          position: absolute;
          top: 4px;
          right: 4px;
          bottom: auto;
          left: auto;
          display: block;
          width: 34px;
          height: 30px;
          outline: none;
          border: none;
          background: transparent;
          color: #aaa;
          cursor: pointer;
          i {
            font-size: 20px;
            line-height: 30px;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .search-content {
      margin: 6px 0;
      .search-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 24px;
        cursor: pointer;
        position: relative;
        color: #000 !important;
        &:hover {
          color: #000;
          background: #eee;
        }
        .search-image {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 4px;
          overflow: hidden;
          @media (max-width: 991px) {
            width: 50px;
            height: 50px;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            background-position: 50%;
            background-size: cover;
            -webkit-object-fit: cover;
            object-fit: cover;
          }
        }
        .search-info {
          .info-name {
            font-size: 18px;
            font-weight: 500;
            @media (max-width: 991px) {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 2px;
            }
          }
          .info-desc {
            font-size: 14px;
            color: #6b6b6b;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    flex-grow: 1;
  }
`;
