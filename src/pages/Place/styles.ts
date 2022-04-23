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
    .place__review-score {
      margin: 8px 0;
      strong {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        min-width: 50px;
        padding: 4px 8px;
        color: ${colors.white};
        background: ${colors.primary};
        border-radius: 10px;
      }
    }
  }
  .detail-info {
    .icon {
      font-size: 18px;
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
  padding: 8px 16px;
  margin-bottom: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  min-height: 200px;
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
