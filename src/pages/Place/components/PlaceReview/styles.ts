import styled from "styled-components";
import { colors } from "../../../../theme/colors";

export const Review = styled.div`
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
  .place-votes {
    position: relative;
    .place-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      margin-bottom: 6px;
      .place-type {
        flex-basis: 30%;
      }
      .place_progress {
        width: 100%;
        flex-basis: 65%;
      }
      .place-count {
        flex-basis: 5%;
        margin-left: 20px;
        font-weight: 500;
        text-align: right;
      }
    }
  }
`;
