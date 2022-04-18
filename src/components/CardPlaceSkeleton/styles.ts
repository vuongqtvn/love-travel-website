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
  background: ${colors.white};
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
  }
  @media screen and (max-width: 991px) {
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
    .link-image {
      padding: 6px 0 6px 6px;
    }
    .place-body {
      padding: 2px 10px 6px;
      min-height: auto;
    }
  }
`;
