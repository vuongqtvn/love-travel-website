import styled from "styled-components";

export const AddPlaceWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: auto;
  padding-top: 10px;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    padding: 0 2px;
  }
`;

export const AddPlaceForm = styled.div`
  position: relative;
  padding: 12px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8pxrgba (0, 0, 0, 0.15);
  @media (max-width: 991px) {
    padding: 12px 16px;
  }
`;

export const AddPlaceHeader = styled.div`
  margin-bottom: 20px;
  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
`;
