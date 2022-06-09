import styled from "styled-components";

export const SaveContainer = styled.div`
  padding-top: 0;
  position: relative;
`;

export const SaveHeader = styled.div`
  height: 220px;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #ffb8b8, #fbfbfb);
  @media (max-width: 991px) {
    height: auto;
    margin-bottom: 0;
    z-index: 1;
    background: transparent;
  }
`;

export const SaveHeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 991px) {
    padding: 0 2px;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export const SaveHeaderContent = styled.div`
  color: #1d2129;
  width: 70%;
  margin-right: 80px;
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1;
    width: 100%;
    padding: 10px;
    margin: 0 -2px;
  }

  h1 {
    margin: 0;
    padding: 0;
    color: #1d2129;
    margin-bottom: 16px;
    font-size: 32px;
    @media (max-width: 991px) {
      font-size: 18px;
      margin-bottom: 0;
      font-weight: 700;
    }
  }
  span {
    display: none;
    @media (max-width: 991px) {
      display: block;
      font-size: 16px;
      font-weight: 600;
    }
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 991px) {
      display: none;
      font-size: 12px;
    }
  }
`;

export const SaveHeaderImage = styled.div`
  width: 30%;
  height: 100%;
  text-align: right;
  padding: 30px;
  @media (max-width: 991px) {
    display: none;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    border-style: none;
  }
`;

export const SaveBody = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
  @media (min-width: 1280px) {
    width: 1200px;
  }
  @media (max-width: 991px) {
    padding: 0 2px;
    margin-bottom: 0;
  }
`;

export const SaveBodyLeft = styled.div`
  width: 25%;
  height: 100%;
  padding-right: 12px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SaveBodyRight = styled.div`
  width: 75%;
  padding-left: 12px;
  @media (max-width: 991px) {
    width: 100%;
    padding-left: 0;
  }
`;
