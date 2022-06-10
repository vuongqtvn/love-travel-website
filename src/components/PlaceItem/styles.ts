import styled from "styled-components";

export const PlaceItemWrap = styled.div`
  display: flex;
  margin: 12px 0;
  cursor: pointer;
  .avatar {
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 6px;
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
    }
    .desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      color: #7a7a7a;
    }
  }
`;
