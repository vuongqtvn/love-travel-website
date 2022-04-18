import styled from "styled-components";
import { colors } from "../../theme/colors";

export const PlaceItem = styled.div`
  position: relative;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    margin-bottom: 6px;
  }
`;

export const PlaceCard = styled.div`
  display: flex;
  color: inherit;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  transition: color 0.15s ease, border-color 0.15s ease;
  .link-image {
    padding: 8px 0 8px 8px;
  }
  .place-body {
    flex: 1;
    padding: 6px 24px 24px;
    min-height: 200px;
    a {
      .place__body-name {
        h4 {
          font-size: 20px;
          font-weight: 700;
          padding: 6px 0 4px;
          margin: 0;
          transition: all 0.2s linear;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
    .place__body-rate {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: ${colors.black};
      .rate-num {
        margin-right: 6px;
      }
      .star {
        color: ${colors.primary};
        font-size: 16px;
        .ant-rate-star {
          margin-right: 4px;
        }
      }
    }
    .place__body-text {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 16px;
      padding-top: 6px;
      color: ${colors.black};
      i {
        font-size: 18px;
      }
      .time-close-soon,
      .time-open,
      .time-close {
        font-weight: 600;
      }
      .time-close {
        color: red;
      }
      .time-open {
        color: #00b707;
      }
      .time-close-soon {
        font-weight: 600;
        color: #ff9800;
      }
    }
  }
  @media screen and (max-width: 991px) {
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
    .link-image {
      padding: 6px 0 6px 6px;
    }
    .place-body {
      padding: 2px 10px 6px;
      min-height: auto;
      a {
        .place__body-name {
          h4 {
            font-size: 16px;
            padding: 0;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
          }
        }
      }
      .place__body-rate {
        font-size: 14px;
        padding-top: 0;
      }
      .place__body-text {
        font-size: 14px;
        padding-top: 0;
        span {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
        }
      }
      .place__body-price {
        display: none;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .place-body {
      .place__body-rate {
        .comment {
          display: none;
        }
      }
    }
  }
`;

export const PlaceSaveButton = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  bottom: auto;
  left: auto;
  @media (max-width: 991px) {
    top: 10px;
    left: 10px;
    right: auto;
  }
`;
