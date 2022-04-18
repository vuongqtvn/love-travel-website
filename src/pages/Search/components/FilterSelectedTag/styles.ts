import { Tag } from "antd";
import styled from "styled-components";
import { colors } from "../../../../theme/colors";

export const FilterSelect = styled.div`
  margin-bottom: 12px;
  @media (max-width: 991px) {
    display: none;
    padding: 0 6px;
    margin-bottom: 6px;
  }
`;

export const TagFilter = styled(Tag)`
  font-size: 16px;
  font-weight: 500;
  padding: 4px 8px;
  color: ${colors.primary};
  background: ${colors.white};
  border-color: ${colors.primary};
  border-radius: 10px;
  .ant-tag-close-icon {
    font-size: 14px;
    margin-left: 4px;
    color: rgba(0, 0, 0, 0.25);
  }
`;
