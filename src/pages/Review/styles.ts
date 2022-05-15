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
      width: 50%;
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
