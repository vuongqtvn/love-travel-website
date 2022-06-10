import styled from "styled-components";

export const ExploreWrapper = styled.div`
  padding-top: 10px;

  .box {
    border-radius: 8px;
    padding: 15px;
    background: #fff;
    min-height: 500px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    margin-bottom: 15px;
  }
`;
export const ExploreHeader = styled.div`
  position: absolute;
  top: 60px;
  right: auto;
  bottom: auto;
  left: 0;
  width: 100%;
  height: 220px;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #ffb8b8, #fbfbfb);
  @media (max-width: 991px) {
    top: 54px;
  }
`;
export const ExploreContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  padding: 0 16px;
  @media (max-width: 991px) {
    padding: 0 2px;
  }

  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export const ExploreFeed = styled.div`
  width: 66.66%;
  position: relative;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ExploreSidebar = styled.div`
  width: 33.33%;
  height: 100%;
  flex-grow: 1;
  position: relative;
  margin-left: 20px;
  @media (max-width: 991px) {
    display: none;
  }
`;
