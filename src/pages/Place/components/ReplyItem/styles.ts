import styled from "styled-components";

export const ReviewReplyItem = styled.div`
  display: flex;
  padding-bottom: 4px;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  .left-reply {
    text-align: center;
    margin-right: 20px;
    @media (max-width: 991px) {
      display: none;
    }
    a {
      .avatar {
        border-radius: 10px;
        cursor: pointer;
        width: 49px;
        height: 49px;
        border-radius: 50%;
        border: none;
        overflow: hidden;
      }
    }
  }
  .right-reply {
    position: relative;
    flex-grow: 1;
    width: calc(100% - 64px - 20px);
    .content {
      padding: 5px 15px;
      border-radius: 12px;
      background-color: #f5f5f7;
      @media (max-width: 991px) {
        padding: 5px 10px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
        border-bottom: 1px solid #e0e0e0;
        .info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-shrink: 0;
          @media (min-width: 992px) {
            display: none;
          }
          @media (max-width: 991px) {
            font-size: 14px;
          }
          a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.4px;
            margin-right: 5px;
            color: #000;
            .avatar {
              width: 49px;
              height: 49px;
              margin-right: 6px;
              border-radius: 50%;
              @media (max-width: 991px) {
                width: 30px;
                height: 30px;
              }
            }
            @media (max-width: 991px) {
              font-size: 16px;
              flex-shrink: 0;
              display: inline-block;
            }
          }
        }
        .text {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-grow: 1;
          a {
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.4px;
            margin-right: 5px;
            color: #000;
          }
          span {
            font-size: 12px;
            font-weight: 400;
            color: #898c95;
            display: block;
          }
        }
      }

      .body {
        padding: 4px 2px;
        .text {
          color: inherit;
          padding: 5px 0;
          white-space: pre-line;
          font-size: 16px;
          line-height: 24px;
          word-break: break-word;
          @media (max-width: 991px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const ReviewAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 6px;
  .left {
    button {
      background-color: transparent;
      font-size: 14px;
      cursor: pointer;
      padding: 0;
      outline: none;
      @media (max-width: 991px) {
        font-size: 12px;
      }
      i {
        margin-right: 6px;
        @media (max-width: 991px) {
          margin-right: 4px;
        }
      }
      &:not(:last-child)::after {
        content: "●";
        display: inline-block;
        color: #f1f1f1;
        margin: 0 12px;
        @media (max-width: 991px) {
          margin: 0 6px;
        }
      }
      &.cancel {
        padding: 3px 10px;
        border-radius: 4px;
        color: #6d7278;
        background-color: #f1f1f1;
      }
    }
  }
`;

export const ReviewNewReply = styled.div`
  display: flex;
  padding: 14px 0;
  background-color: #fff;
  @media (max-width: 991px) {
    padding: 10px 0 8px 2px;
  }

  .left {
    text-align: center;
    margin-right: 20px;
    @media (max-width: 991px) {
      display: block;
      margin-right: 6px;
    }
    .avatar {
      width: 49px;
      height: 49px;
      cursor: pointer;
      border-radius: 50%;
      border: none;
      overflow: hidden;
      @media screen and (max-width: 991px) {
        width: 40px;
        height: 40px;
        margin-top: 4px;
      }
    }
  }
  .right {
    position: relative;
    flex-grow: 1;
    width: calc(100% - 64px - 20px);
    ::before {
      position: absolute;
      top: 40px;
      right: auto;
      bottom: auto;
      left: -12px;
      content: "";
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #f5f5f7;
      transform: translatey(-50%) rotate(-90deg);
      @media (max-width: 991px) {
        display: block;
      }
    }
    .reply-user {
      color: #898c95;
      font-size: 12px;
      padding: 0 0 4px 4px;
    }
    .content {
      padding: 5px 15px;
      border-radius: 12px;
      background-color: #f5f5f7;
      @media (max-width: 991px) {
        padding: 5px 10px;
      }
      .input {
        padding: 6px 0 10px;
        border-bottom: 1px solid #e0e0e0;
        @media (max-width: 991px) {
          padding: 2px 0 6px;
        }
        textarea {
          background-color: transparent;
          border: none;
          box-shadow: none;
        }
      }
      .submit {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px 0 6px;
        @media (max-width: 991px) {
          padding: 8px 0 4px;
        }
      }
    }
  }
`;
