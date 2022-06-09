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
    h2,
    p {
      margin: 0;
      padding: 0;
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
