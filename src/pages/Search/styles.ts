import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding-top: 10px;
  min-height: 70vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: auto;
  padding: 0 16px;
  @media (min-width: 1280px) {
    width: 1200px;
  }
  @media (max-width: 991px) {
    padding: 0 2px;
  }
`;

export const SearchLeft = styled.div`
  width: 25%;
  height: 100%;
  padding: 12px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SearchRight = styled.div`
  width: 75%;
  padding: 12px;
  @media (max-width: 991px) {
    width: 100%;
    padding: 0;
  }
`;
