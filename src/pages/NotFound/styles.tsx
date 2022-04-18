import styled from "styled-components";
import { colors } from "../../theme/colors";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 40px 40px;
  color: ${colors.grey};
  img {
    height: 400px;
  }
  h1 {
    color: #273339;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  @media (max-width: 991px) {
    height: calc(100vh - 130px);
    img {
      height: 280px;
    }
    h1 {
      font-size: 20px;
    }
  }
`;
