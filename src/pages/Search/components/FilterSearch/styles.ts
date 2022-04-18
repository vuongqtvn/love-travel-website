import { Collapse } from "antd";
import styled from "styled-components";
import { colors } from "../../../../theme/colors";

export const SearchFilter = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  .filter-title {
    border-bottom: 1px solid #e0e0e0;
    padding: 6px 0 16px;
    h2 {
      margin: 0;
    }
  }
`;

export const FilterCollapse = styled(Collapse)`
  .ant-collapse-header {
    font-size: 16px !important;
    font-weight: 500;
    padding-left: 8px !important;
  }
  .ant-collapse-content-box {
    padding: 10px !important;
  }
  .search__filter-list {
    max-height: 222px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.grey};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${colors.white};
      border-radius: 5px;
    }
  }
  .search__filter-item {
    margin-bottom: 10px;
    .price-number {
      display: block;
      text-align: center;
      font-size: 18px;
      color: ${colors.primary};
      font-weight: 600;
    }
  }
`;
