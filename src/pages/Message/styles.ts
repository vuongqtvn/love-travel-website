import styled from "styled-components";
import { images } from "../../assets";
import { colors } from "../../theme/colors";

export const MessageWrapper = styled.div`
  height: calc(100vh - 60px);
  background: rgb(248, 248, 248);
  padding: 15px;
  display: flex;
  @media (max-width: 991px) {
    height: calc(100vh - 121px);
    padding: 5px;
  }
  .chat_row {
    display: grid;
    grid-template-columns: 70%;
    margin-bottom: 10px;
  }
  .you_message {
    justify-content: end;
    justify-items: end;
  }
  .other_message {
    justify-content: start;
    justify-items: start;
  }
  .chat_text {
    padding: 9px 14px;
    margin-bottom: 5px;
  }
  .chat_time {
    font-size: 13px;
    color: #777;
  }
  .you_message .chat_text {
    background: rgb(239, 239, 239);
    color: #111;
    border: 1px solid rgb(239, 239, 239);
    border-radius: 14px 14px 0 14px;
  }
  .other_message .chat_text {
    background: white;
    color: #111;
    border: 1px solid #ddd;
    border-radius: 14px 14px 14px 0;
  }
`;

export const MessageContainer = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: auto;
  padding: 0 16px;
  overflow: hidden;
  display: flex;
  height: 100%;
  @media (max-width: 991px) {
    padding: 5px;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 16px;
  @media (max-width: 991px) {
    margin-left: 5px;
  }
`;

export const ContentPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
  border-radius: 8px;
`;

export const ContentHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 16px;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
  }
  .content {
    flex: 1;
    padding-left: 10px;
    h3,
    p {
      margin-bottom: 0;
    }
    p {
      color: #7a7a7a;
      font-size: 12px;
    }
  }
`;

export const ContentBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  .chat {
    flex: 1;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .scroll {
      overflow-y: auto;
      > div {
        padding: 10px 10px 0;
      }
    }
  }
  .show_media {
    border-top: 0.5px solid rgba(22, 24, 35, 0.12);
    padding: 10px;
    gap: 10px;
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    .item {
      border: 1px solid ${colors.primary};
      position: relative;
      width: 80px;
      height: 80px;
      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .delete {
        cursor: pointer;
        position: absolute;
        top: 2px;
        right: 2px;
        z-index: 2;
      }
    }
  }
`;

export const ContentFooter = styled.form`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 13px 16px;
  border-top: 0.5px solid rgba(22, 24, 35, 0.12);
  .content {
    position: relative;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    background: rgba(22, 24, 35, 0.06);
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    z-index: 2;
    padding-right: 16px;

    input {
      padding: 8px 16px;
      border: none;
      outline: none;
      flex: 1;
      background-color: transparent;
    }
    .ant-upload {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-icon {
      cursor: pointer;
      font-size: 24px;
      margin-right: 12px;
    }
    .emoji-icon {
      width: 24px;
      height: 24px;
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
      background-image: url(${images.emoji});
      background-size: 24px;
      background-position: 50%;
      background-repeat: no-repeat;
      font-size: 0;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .send {
    width: 32px;
    height: 32px;
    margin: 0px 0px 3px 16px;
    background-image: url(${images.send});
    background-size: 32px;
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;
  }
`;
