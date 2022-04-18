import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 360px);
  @media (max-width: 991px) {
    margin-top: 0;
    min-height: -webkit-calc(100vh - $mobile-header-size);
    min-height: calc(100vh - $mobile-header-size);
    padding-bottom: calc(62px + env(safe-area-inset-bottom));
  }
`;
