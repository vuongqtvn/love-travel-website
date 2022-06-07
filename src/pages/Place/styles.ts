import styled from "styled-components";
import { colors } from "../../theme/colors";

export const PlaceWrapper = styled.div`
  padding-top: 10px;
  h1,
  h2 {
    margin-bottom: 0 !important;
  }
`;

export const PlaceContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 16px;
  @media (max-width: 991px) {
    padding: 0 2px;
  }
`;

export const PlaceStickyBar = styled.div`
  position: fixed;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  width: 100%;
  z-index: 2;
  visibility: visible;
  opacity: 1;
  background-color: ${colors.white};
  box-shadow: 0 2px 4px 0 rgb(189 171 171 / 40%);
  transition: visibility 0s, opacity 0.2s linear;
  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
  .place-sticky-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    width: 100%;
    margin: auto;
    @media (max-width: 991px) {
      padding: 0 2px;
    }
    .place-sticky-menu {
      white-space: nowrap;
      overflow-x: auto;
      padding-left: 6px;
      .place-anchor {
        margin-left: 0;
        padding-left: 0;
        background-color: transparent;
        .ant-anchor {
          display: flex;
          .ant-anchor-ink {
            display: none;
          }
          .ant-anchor-link {
            cursor: pointer;
            height: 100%;
            font-size: 16px;
            padding: 0;
            .ant-anchor-link-title {
              display: block;
              padding: 12px;
              color: ${colors.black};
              border-bottom: 2px solid transparent;
              transition: all 0s, border-color 0.1s ease-in-out;
              @media (max-width: 991px) {
                padding: 10px 6px;
              }
            }
          }
          .ant-anchor-link:not(:last-child) {
            padding-right: 20px;
          }

          .ant-anchor-link.ant-anchor-link-active
            .ant-anchor-link-title-active {
            color: ${colors.primary};
            border-color: ${colors.primary};
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export const PlaceDetail = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  & > div {
    min-height: 250px;
    flex: 1;
    align-self: stretch;
    overflow: hidden;
    padding: 4px 14px 10px;
    background-color: ${colors.white};
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    :not(:last-child) {
      margin: 0px 16px 0px 0px;
    }
    @media (max-width: 991px) {
      min-height: auto;
      box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
      :not(:last-child) {
        margin: 0px 0px 6px;
      }
    }
  }
  .review {
  }
  .detail-info {
    .icon {
      font-size: 18px;
    }
    .ant-typography,
    a {
      font-size: 16px;
    }
  }
  @media (max-width: 991px) {
    display: block;
    margin-bottom: 6px;
  }
`;

export const PlaceDetailAddress = styled.div``;

export const PlaceMap = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100% - 33px);
  @media (max-width: 991px) {
    height: 300px;
  }

  .place-imageWrapper {
    position: relative;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    margin: 4px 0;
    background-color: #eee;
    cursor: pointer;
    img {
      background-position: 50%;
      background-size: cover;
      height: 100%;
      width: 100%;
      object-fit: cover;
      image-rendering: -webkit-optimize-contrast;
    }
  }
  .place-specific {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: auto;
    right: 16px;
    bottom: 16px;
    left: 16px;
    font-size: 16px;
    padding: 6px 10px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    @media (max-width: 500px) {
      right: 8px;
      bottom: 8px;
      left: 8px;
    }
    a {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      color: ${colors.black};
      transition: all 0.2s linear;
      :hover {
        color: ${colors.primary};
      }
    }
  }
`;

export const PlaceBenefit = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  @media (max-width: 991px) {
    margin-bottom: 6px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  }
`;

export const PlaceReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  .review-container {
    width: 66.66%;
    position: relative;
    padding: 8px 16px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    @media (max-width: 991px) {
      width: 100%;
      padding: 8px 14px;
      margin-bottom: 6px;
      box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
    }
    .review-container-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 6px;
      h2 {
        font-size: 24px;
        padding: 0;
        margin: 0;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        line-height: 1.5715;
        span {
          color: #8a8a8a;
        }
        @media (max-width: 991px) {
          font-size: 20px;
        }
      }
    }
    .review-overview {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 180px;
      padding: 10px 16px;
      position: relative;
      background: linear-gradient(90deg, #ffb8b8, #ffddd8);
      border-radius: 20px;
      .review-overview-img {
        width: 30%;
        height: 100%;
        text-align: center;
        position: relative;
        img {
          max-height: 100%;
        }
      }
      .review-overview-slogan {
        flex-grow: 1;
        padding: 10px 8px;
        h2 {
          padding: 0;
          margin: 0;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          line-height: 1.5715;
          font-size: 24px;
          margin-bottom: 12px;
        }
        span {
          display: block;
          line-height: 1.7;
          margin-bottom: 2px;
          i {
            font-size: 12px;
            color: #f44336;
          }
        }
      }
      @media (max-width: 991px) {
        height: auto;
        padding: 0 2px;
        margin-top: 4px;
        margin-bottom: 8px;
        .review-overview-img {
          display: flex;
          width: 65%;
          img {
            text-align: center;
            max-width: 100%;
            max-height: 160px;
          }
        }
        .review-overview-slogan {
          padding: 10px 4px;
          h2 {
            font-size: 16px;
            margin-bottom: 4px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
    .review-list {
      padding: 20px 0;
      margin-top: 20px;
      border-top: 1px solid #ddd;
      .review-list-empty {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100px;
        text-align: center;
        font-size: 18px;
        p {
          padding: 0;
          margin: 0;
        }
      }
      @media (max-width: 991px) {
        margin-top: 4px;
        padding: 16px 0 0;
        .review-list-empty {
          font-size: 16px;
          min-height: 80px;
        }
      }
    }
  }
  .review-ads {
    flex-grow: 1;
    position: relative;
    margin-left: 20px;
    margin-bottom: 20px;
    position: sticky;
    top: 20px;
    .review-ads-box {
      padding: 16px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
      :not(:last-child) {
        margin-bottom: 20px;
      }
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const PlaceRelated = styled.div`
  position: relative;
  padding: 8px 16px;
  margin-bottom: 20px;
  min-height: 250px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  @media (max-width: 991px) {
    padding: 8px 14px;
    margin-bottom: 6px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  }
`;
