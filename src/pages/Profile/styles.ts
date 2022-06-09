import styled from "styled-components";

export const ProfileWrapper = styled.div`
  padding-top: 0;
`;

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

export const ProfileNavigationWrap = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(189 171 171 / 20%);
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 1;
  white-space: nowrap;
  overflow-x: auto;
  @media (max-width: 991px) {
    top: 0;
    border-top: 1px solid #ddd;
  }
`;

export const ProfileNavigation = styled.div`
  width: 1060px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  @media (max-width: 991px) {
    width: 100%;
    border: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      cursor: pointer;
      display: inline-block;
      height: 100%;
      font-size: 16px;
      padding: 4px 0;
      &.active {
        color: #e03;
        border-bottom: 4px solid #e03;
        span {
          color: #e03;
        }
      }
      span {
        @media (max-width: 991px) {
          padding: 4px 12px;
        }
        display: block;
        font-weight: 500;
        padding: 10px 14px;
        color: #000;
      }
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
`;

export const ProfileContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  @media (max-width: 991px) {
    display: block;
    padding: 0 2px;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

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

export const ProfileRight = styled.div`
  flex-grow: 1;
  max-width: 720px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ProfileUserReview = styled.div`
  padding: 20px 0 0 20px;
  @media (max-width: 991px) {
    padding: 0;
  }
`;

export const ProfileEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  margin: 40px 20px;
  img {
    height: 180px;
    margin-bottom: 20px;
    vertical-align: middle;
    border-style: none;
  }
  span {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
  }
`;
