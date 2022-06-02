import styled from "styled-components";

export const FormSection = styled.section`
  /* @media (max-width: 991px) {
  } */
  .title {
    h2 {
      color: #e03;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0;
      margin: 0;
    }
  }
  .content {
    padding: 20px 30px 4px 16px;
    @media (max-width: 991px) {
      padding: 8px 4px 4px;
    }
    .center {
      display: inline-block;
      width: 30px;
      line-height: 32px;
      text-align: center;
      margin: 0 10px;
    }
  }
`;
