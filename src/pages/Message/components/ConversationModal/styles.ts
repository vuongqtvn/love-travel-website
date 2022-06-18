import styled from "styled-components";

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
