import styled from "styled-components";

export const ReviewItemWrap = styled.div`
  display: flex;
  padding-bottom: 4px;
  &:not(:last-child) {
    margin-bottom: 20px;
    @media (max-width: 991px) {
      margin-bottom: 16px;
    }
  }
`;

export const ReviewLeft = styled.div`
  text-align: center;
  margin-right: 20px;
  @media (max-width: 991px) {
    display: none;
  }
  .review-count {
    cursor: default;
    margin-top: 8px;
    padding: 2px 0;
    color: #aeaeae;
    border: 1px solid #aeaeae;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 14px;
      i {
        font-size: 16px;
        margin-right: 2px;
      }
      line-height: 1;
    }
  }
`;

export const ReviewRight = styled.div`
  position: relative;
  flex-grow: 1;
  width: calc(100% - 64px - 20px);
`;

export const ReviewContent = styled.div`
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
      @media (max-width: 991px) {
        font-size: 14px;
      }

      @media (min-width: 992px) {
        a.info-avatar {
          display: none;
        }
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
        & > div {
          margin-right: 6px;
        }
        @media (max-width: 991px) {
          font-size: 16px;
          display: inline-block;
          flex-shrink: 0;
        }
      }
      .text {
        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.4px;
          margin-right: 5px;
          color: #000;
          @media (max-width: 991px) {
            font-size: 16px;
          }
          i {
            font-size: 14px;
            margin-left: 5px;
            margin-right: 5px;
            color: #00cbc6;
          }
          span {
            font-size: 12px;
            font-weight: 400;
            color: #898c95;
          }
        }
      }
    }
    .review-vote {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;

      .star {
        cursor: pointer;
        width: 32px;
        height: 32px;
        font-size: 12px;
        line-height: 32px;
        overflow: hidden;
        text-align: center;
        color: #fff;
        background: #e03;
        border-radius: 50%;
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
    .images {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      padding-bottom: 5px;
      margin-top: 6px;
      .image {
        flex: 0 0 auto;
        width: 116px;
        height: 116px;
        cursor: pointer;
        overflow: hidden;
        margin-right: 8px;
        border-radius: 6px;
        @media (max-width: 991px) {
          width: 100px;
          height: 100px;
          margin-right: 2px;
          margin-bottom: 2px;
        }
      }
      .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        transition: all, 0.25s ease-in-out;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
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
      &.active {
        font-weight: 500;
        color: #e03;
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

export const ReviewReply = styled.div`
  margin-top: 4px;
  &:hover {
    text-decoration: underline;
  }
  span {
    cursor: pointer;
    padding-left: 6px;
    color: #000;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    i {
      margin-right: 4px;
      transform: translateY(2px);
    }
    @media (max-width: 991px) {
      font-size: 12px;
      i {
        margin-right: 6px;
      }
    }
  }
`;

export const ReviewReplyContainer = styled.div`
  margin-top: 1rem;
  padding-left: 0.6rem;
  border-left: 1px solid #f1f1f1;
  @media (max-width: 991px) {
    margin-left: 6px;
  }
`;
