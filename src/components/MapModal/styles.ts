import styled from "styled-components";

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
      @media (max-width: 991px) {
        height: 44px;
      }
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
          @media (max-width: 991px) {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export const MapContent = styled.div`
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: -webkit-calc(100% - 60px);
  height: calc(100% - 60px);
  overflow: hidden;
  .map-list {
    width: 400px;
    flex-shrink: 0;
    background: #fff;
    overflow-y: auto;
    @media (max-width: 991px) {
      position: absolute;
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      display: -webkit-flex;
      display: flex;
      z-index: 3;
      width: 100%;
      padding: 0 10px;
      margin: 10px 10px 10px 0;
      background: transparent;
      overflow-x: auto;
      -webkit-scroll-snap-type: x mandatory;
      -ms-scroll-snap-type: x mandatory;
      scroll-snap-type: x mandatory;
      scroll-snap-stop: always;
      .hide {
        display: none;
      }
      .map-desc {
        display: none;
      }
    }
    .map-desc {
      color: #7a7a7a;
      font-size: 16px;
      font-weight: 600;
      padding: 10px 16px 0;
    }
  }
  .map-view {
    flex: 1 1;
    position: relative;
  }
`;

export const PlaceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px 16px 16px;
  border-bottom: 1px solid #ccc;
  transition: background 0.1s ease;
  @media (max-width: 991px) {
    width: 90%;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    padding: 6px 16px;
    margin-right: 10px;
    background: #fff;
    border-radius: 10px;
    scroll-snap-align: center;
    &.hide {
      display: none;
    }
  }
  .ant-rate-star:not(:last-child) {
    margin-right: 2px;
  }
  .place-info {
    margin-right: 10px;
    a {
      color: inherit;
      text-decoration: none;
      h4 {
        font-size: 16px;
        font-weight: 700;
        padding: 0;
        margin: 0;
        @media (max-width: 991px) {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
        }
      }
    }
    .place-rate {
    }
    .place-address {
      margin-top: 2px;
      @media (max-width: 991px) {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
      }
    }
  }
  .place-image {
    width: 100%;
    background-color: #eee;
    background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: calc(10px - 4px);
    width: 80px;
    height: 80px;
    @media (max-width: 991px) {
      width: 80px;
      height: 80px;
    }
    img {
      width: 100%;
      height: 100%;
      background-position: 50%;
      background-size: cover;
      object-fit: cover;
      border-radius: calc(10px - 4px);
    }
  }
`;

export const MapPopup = styled.div`
  .ant-rate-star:not(:last-child) {
    margin-right: 2px;
  }
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  .map-avatar {
    width: 100%;
    background-color: #eee;
    background-image: -webkit-linear-gradient(left, #eee, #f5f5f5, #eee);
    background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    -webkit-animation: Map_loading-image-animation__37v2E 1.2s ease-in-out
      infinite;
    animation: Map_loading-image-animation__37v2E 1.2s ease-in-out infinite;
    border-radius: 10px;
    overflow: hidden;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    border-radius: -webkit-calc(10px - 4px);
    border-radius: calc(10px - 4px);
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      background-position: 50%;
      background-size: cover;
      -webkit-object-fit: cover;
      object-fit: cover;
      border-radius: -webkit-calc(10px - 4px);
      border-radius: calc(10px - 4px);
    }
  }
  .map-info {
    margin-left: 10px;
    h3 {
      padding: 0;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
    .address {
      margin-top: 2px;
      span {
        font-size: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
      }
    }
    .rate {
      margin-top: 2px;
      .avg-rate {
        margin-right: 6px;
      }
      .rate-total {
        margin-left: 6px;
      }
    }
  }
`;
