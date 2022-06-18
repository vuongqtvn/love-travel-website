import styled from "styled-components";

export const EmojiDropdown = styled.div`
  width: 310px;
  height: 200px;
  overflow-y: auto;
  background: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  ul {
    margin: 0;
    padding: 14px;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    li {
      width: 40px;
      height: 40px;
      button {
        padding: 0;
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
        font-family: proxima-regular, PingFangSC;
        font-size: 26px;
        :hover {
          background-color: #efefef;
          border-radius: 4px;
        }
      }
    }
  }
`;
