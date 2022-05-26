import { Space } from "antd";
import styled from "styled-components";

export const MainLayout = styled.div`
  .site-layout-background {
    background-color: white;
  }
  .ant-layout-sider {
    height: calc(100vh - 64px);

    .ant-layout-sider-children {
      flex-grow: 1;
      overflow-y: auto;
      & {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .ant-layout-sider-trigger {
      position: relative;
      flex-shrink: 0;
    }
  }
  .content-layout {
    display: flex;
    height: calc(100vh - 64px);
  }
  .ant-layout-content {
    min-height: unset;
  }
  .content {
    flex: 1;
    margin: 0 15px 15px;
    padding: 15px;
    background-color: white;
    border: 1px solid #dee2e6;
    @media screen and (max-width: 767px) {
      margin: 0 7.5px 7.5px;
      padding: 15px 7.5px;
    }
  }
`;
export const SpaceCT = styled(Space)`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
`;
