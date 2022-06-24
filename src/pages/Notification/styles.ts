import styled from "styled-components";

export const NotificationWrap = styled.div`
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 12px 20px;
    border-bottom: 1px solid #f0f2f5;
    .title {
      font-size: 18px;
      font-weight: 500;
      color: #000;
    }
    .check {
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      color: #000;
      font-size: 14px;
      cursor: pointer;

      i {
        font-size: 18px;
        margin-right: 2px;
      }
    }
  }
  .list {
    overflow: hidden;
    padding-bottom: 10px;
    .content {
      max-height: 400px;
      overflow-y: auto;
      .empty {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 100px;
        color: #a5a5a5;
      }
    }
  }
`;
