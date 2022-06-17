import styled from "styled-components";

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

export const ProfileInfoContainer = styled.div`
  position: relative;
  padding-bottom: 100px;
  width: 100%;
  margin: auto;
  padding: 0 16px;
  padding-bottom: 100px;
  @media (min-width: 1280px) {
    width: 1200px;
  }
  @media (max-width: 991px) {
    padding: 0 2px;
    padding-bottom: 120px;
  }
`;

export const ProfileInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 250px;
  padding: 20px 40px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: linear-gradient(180deg, #ffb8b8, #fafafa);
  @media (max-width: 991px) {
    height: 180px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 34%;
  @media (max-width: 991px) {
    top: 14%;
  }
  .avatar-wrap {
    position: relative;
    width: 200px;
    height: 200px;
    padding: 6px;
    border-radius: 50%;
    background: #fff;
    @media (max-width: 991px) {
      width: 175px;
      height: 175px;
    }
    .avatar {
      background-color: #eee;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: #fff;
      border: none;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .upload {
      position: absolute;
      top: auto;
      right: 20px;
      bottom: 10px;
      left: auto;
      cursor: pointer;
      width: 38px;
      height: 38px;
      font-size: 20px;
      line-height: 38px;
      text-align: center;
      border-radius: 50%;
      color: #404040;
      background: #efefef;
      @media (max-width: 991px) {
        right: 10px;
        width: 36px;
        height: 36px;
        font-size: 18px;
      }
    }
  }
  .username {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    i {
      font-size: 26px;
      margin-left: 8px;
      color: #00cbc6;
    }
    @media (max-width: 991px) {
      font-size: 26px;
    }
  }
  .action {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      visibility: hidden;
      @media (max-width: 991px) {
        visibility: visible;
      }
      li {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        font-size: 16px;
        padding: 4px 0;
        button {
          cursor: pointer;
          padding: 6px 18px;
          margin-left: 6px;
          margin-top: 6px;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.15s ease;
          color: #000;
          background: #efefef;
          &.active {
            color: #fff;
            background-color: #e03;
          }

          &:hover {
            color: #000;
            background-color: #e0e0e0;
          }
          &.follow {
            background-color: rgba(238, 0, 51, 0.16);
            color: #e03;
          }

          &.follow:hover {
            color: #fff;
            background-color: #e03;
          }
        }
      }
    }
  }
`;
