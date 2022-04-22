import styled from "styled-components";
import { colors } from "../../theme/colors";

export const PlaceWrapper = styled.div`
  padding-top: 10px;
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
    padding: 8px 16px 10px;
    background-color: ${colors.white};
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    :not(:last-child) {
      margin: 0 16px 0 0;
    }
    @media (max-width: 991px) {
      min-height: auto;
      box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
      :not(:last-child) {
        margin: 0 0 6px;
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
