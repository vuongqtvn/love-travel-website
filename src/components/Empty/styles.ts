import styled from "styled-components";

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
  width: 100%;
  margin: auto;
  padding: 0 16px;
  @media (max-width: 991px) {
    margin-bottom: 0;
    padding: 0 2px;
  }
`;

export const EmptyBox = styled.div`
  width: 75%;
  padding-left: 12px;
  @media (max-width: 991px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  margin: 40px 20px 0;
  img {
    height: 220px;
    margin-bottom: 30px;
  }
  h3 {
    font-weight: 700;
    margin-bottom: 4px;
  }
  @media (max-width: 991px) {
    min-height: auto;
    img {
      height: 200px;
    }
  }
  @media (max-width: 400px) {
    img {
      height: auto;
    }
  }
`;
