import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 350px;
  flex-shrink: 0;
  height: 100%;
  @media (max-width: 991px) {
    width: auto;
  }
`;

export const ConversationPane = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ConversationHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  border-bottom: 1px solid rgb(231, 231, 231);
  h3 {
    font-weight: 700;
    flex: 1;
    font-size: 24px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
`;

export const ConversationBody = styled.div`
  overflow: auto;
`;
