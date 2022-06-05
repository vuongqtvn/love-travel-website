import styled from "styled-components";

export const LayoutWrapper = styled.div`
  &.layout-page {
    height: 100%;
    overflow: hidden;
    .layout-page-header {
      padding: 0 !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 9;
      box-shadow: 0 4px 10px #dddddd;

      svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .layout-page-header-main {
        padding: 0 15px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo {
        height: 64px;
        width: 200px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .layout-page-sider {
      box-sizing: border-box;
    }
    .layout-page-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      > :nth-child(1) .ant-tabs-bar {
        padding: 6px 0 0;
      }

      > :nth-child(2) {
        flex: auto;
        overflow: auto;
        padding: 6px;
        box-sizing: border-box;
        .innerText {
          padding: 24px;
          border-radius: 2px;
          display: block;
          line-height: 32px;
          font-size: 16px;
        }
      }
    }
    .layout-page-footer {
      text-align: center;
      padding: 14px 20px;
      font-size: 12px;
    }
    .actions {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > * {
        margin-left: 30px;
        height: 100%;
        display: flex;
        align-items: center;
        .notice {
          display: block;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 22px;
          height: 22px;
          cursor: pointer;
        }
      }
    }
    .user-action {
      cursor: pointer;
    }
    .user-avator {
      margin-right: 8px;
      width: 40px;
      height: 40px;
    }
  }

  body[data-theme="dark"] {
    .layout-page-header {
      box-shadow: none;
    }
  }

  .layout-page-sider-menu {
    border-right: none !important;
  }
  .ant-menu-inline-collapsed {
    width: 79px !important;
  }

  .notice-description {
    font-size: 12px;
    .notice-description-datetime {
      margin-top: 4px;
      line-height: 1.5;
    }
  }

  .notice-title {
    display: flex;
    justify-content: space-between;
  }

  .tagsView-extra {
    height: 100%;
    width: 50px;
    cursor: pointer;
    display: block;
    line-height: 40px;
    text-align: center;
  }

  .themeSwitch {
    position: fixed;
    right: 32px;
    bottom: 102px;
    cursor: pointer;
    > span {
      display: block;
      text-align: center;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
      width: 44px;
      height: 44px;
      line-height: 44px;
      font-size: 22px;
      z-index: 10001;
    }
  }

  .theme-color-content {
    display: flex;
    .theme-color-block {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      color: #fff;
      font-weight: 700;
      text-align: center;
      border-radius: 2px;
      cursor: pointer;
      border-radius: 2px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .ant-layout-sider {
    background-color: #fff !important;
  }
  .content-layout {
    padding-top: 15px;
    min-height: calc(100vh - 64px);
    border: 1px solid #ddd;
    .content-page {
      padding: 10px;
      background-color: #fff;
      height: 100%;
    }
  }
`;
