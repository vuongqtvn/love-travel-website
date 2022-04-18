import styled from "styled-components";

export const SearchActionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: fixed;
  top: auto;
  right: 0;
  bottom: -webkit-calc(72px + env(safe-area-inset-bottom));
  bottom: calc(72px + env(safe-area-inset-bottom));
  left: 0;
  z-index: 1;
  visibility: hidden;
  @media (max-width: 991px) {
    visibility: visible;
  }
`;
