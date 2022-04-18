import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding-top: 10px;
  min-height: 70vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: auto;
  padding: 0 16px;
  @media (min-width: 1280px) {
    width: 1200px;
  }
  @media (max-width: 991px) {
    padding: 0 2px;
  }
`;

export const SearchLeft = styled.div`
  width: 25%;
  height: 100%;
  padding: 12px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SearchRight = styled.div`
  width: 75%;
  padding: 12px;
  @media (max-width: 991px) {
    width: 100%;
    padding: 0;
  }
`;

export const MapModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
`;

export const MapModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 90%;
    height: 90%;
    overflow: hidden;
    border-radius: 6px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #eee;
    @media (max-width: 991px) {
      min-height: 100%;
      max-height: 100%;
      width: 100%;
    }
    .map-header {
      position: relative;
      height: 60px;
      padding: 4px 20px 6px;
      background-color: #fff;
      border-bottom: 1px solid #111;
      text-align: center;
      .map-close {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
      .map-info {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        h1 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: -2px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
        }
      }
    }
    .map-body {
      flex: 1;
    }
  }
`;
