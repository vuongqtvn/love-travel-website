import { Table } from "antd";
import styled from "styled-components";

export const AdminBox = styled.div`
  padding: 12px 16px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  h3 {
    padding: 0;
    margin: 0;
    font-size: 20px;
    text-align: center;
    padding-bottom: 14px;
  }
`;

export const CustomTable = styled(Table)`
  & th {
    text-transform: uppercase;
    background-color: #096dd9 !important;
    color: white !important;
    white-space: nowrap;
  }
`;
