import styled from "styled-components";

export const ProfileLeft = styled.div`
  width: 340px;
  height: 100%;
  margin-top: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ProfileUserStats = styled.div`
  position: relative;
  text-align: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  margin-bottom: 20px;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
    color: #e03;
    margin-bottom: 8px;
  }
  i {
    width: 32px;
    font-size: 20px;
    text-align: left;
    padding-right: 4px;
    color: #9d9d9d;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding: 0 10px;
    margin-bottom: 8px;
    span {
      &:first-child {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &:nth-child(2) {
        padding: 0 10px;
        border-radius: 6px;
        background: #efefef;
      }
    }
  }
  @media (max-width: 991px) {
    margin-bottom: 10px;
    padding: 12px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  }
`;

export const ProfileAds = styled.div`
  position: relative;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  margin-bottom: 20px;
  min-height: 200px;
  padding: 0;
  overflow: hidden;
  img {
    width: 100%;
    vertical-align: middle;
    border-style: none;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
