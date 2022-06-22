import styled from "styled-components";

export const NewReview = styled.div`
  padding: 12px 20px;
  margin: 10px auto 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  .header {
    text-align: center;
    padding: 0 20px 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    h1 {
      margin: 0;
      padding: 0;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    .review-place {
      width: calc(50% - 30px);
      margin-left: 30px;
      order: 2;
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
        .review-select-place {
          cursor: pointer;
          text-align: center;
          padding: 30px 0;
          margin-top: 16px;
          margin-bottom: 16px;
          border: 1px dashed #d9d9d9;
          border-radius: 10px;
          span {
            font-size: 16px;
            color: #717171;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    margin-bottom: 10px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
    .header {
      h1 {
        font-size: 20px;
      }
    }
    .content {
      flex-direction: column;
      .review-place {
        order: 1;
        width: 100%;
        margin-left: 0;
      }
    }
  }
`;

export const NewReviewPlace = styled.div`
  display: flex;
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 991px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .image {
    flex-shrink: 0;
    width: 210px;
    min-height: 160px;
    max-height: 160px;
    @media (max-width: 991px) {
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      width: 120px;
      min-height: 120px;
      max-height: 120px;
    }
    img {
      background-position: 50%;
      background-size: cover;
      height: 100%;
      width: 100%;
      -webkit-object-fit: cover;
      object-fit: cover;
    }
  }
  .place-info {
    flex: 1 1;
    padding: 16px;
    overflow: hidden;
    @media (max-width: 991px) {
      padding: 10px;
    }
    a {
      color: #000;
      font-size: 18px;
      font-weight: 700;
      @media (max-width: 991px) {
        display: block;
        font-size: 16px;
        padding-right: 20px;
      }
    }
    .address {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #000;
      font-size: 16px;
      padding: 6px 0 8px;
      @media (max-width: 991px) {
        font-size: 14px;
        padding: 6px 0 8px;
      }
    }
    .rate {
      i {
        width: 20px;
        padding-right: 4px;
        color: #e03;
      }
      font-size: 16px;
      @media (max-width: 991px) {
        i {
          width: 18px;
          padding-right: 4px;
          color: #e03;
        }
        font-size: 14px;
      }
    }
    .close {
      position: absolute;
      top: 6px;
      right: 6px;
      bottom: auto;
      left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      color: #b5b4b4;
      background-color: #e4e6eb;
      border-radius: 50%;
    }
  }
`;
