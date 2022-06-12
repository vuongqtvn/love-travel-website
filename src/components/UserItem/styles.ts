import styled from "styled-components";

export const UserItemWrap = styled.div`
  display: flex;
  margin: 12px 0;
  cursor: pointer;
  .avatar {
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    border: none;
    overflow: hidden;
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .name {
      padding: 0;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 16px;
      i {
        color: #00cbc6;
      }
    }
    .desc {
      margin-top: 4px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      color: #7a7a7a;
      button {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        border-radius: 6px;
        background: #efefef;
        transition: all 0.15s ease;
        &:hover {
          color: #fff;
          background: #e03;
        }
        &.active {
          color: #fff;
          background: #e03;
        }
      }
    }
  }
`;
