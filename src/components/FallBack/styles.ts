import styled from "styled-components";
import Box from "../Box";

export const FallBackWrap = styled(Box)`
  min-height: calc(100vh - 60px);
  @media (max-width: 991px) {
    min-height: calc(100vh - 60px - 62px - env(safe-area-inset-bottom));
  }
`;
