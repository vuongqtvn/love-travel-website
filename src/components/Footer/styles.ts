import styled from "styled-components";
import { colors } from "../../theme/colors";

export const FooterWrapper = styled.div`
  border-top: 1px solid #e5e5e5;
  background-color: ${colors.white};
  background-repeat: repeat;
  box-shadow: 0 -2px 4px 0 hsl(0deg 0% 71% / 50%);
  @media (max-width: 991px) {
    display: none;
  }
`;

export const FooterTop = styled.div``;

export const FooterBottom = styled.div``;

export const FooterContainer = styled.div`
  position: relative;
  padding: 30px 20px 20px;
  border-bottom: 2px solid ${colors.white};
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const FooterMenu = styled.div``;
