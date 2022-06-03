import styled from "styled-components";
import { Table, Button } from "antd";

export const AdminPlaceWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  color: #1d3a98;
  margin: 0;
`;

export const CustomButton = styled(Button)`
  height: auto;
  font-size: 16px;
`;
export const Search = styled.div`
  display: flex;
  flex: 1;
`;
export const CustomTable = styled(Table)`
  & th {
    text-transform: uppercase;
    background-color: #096dd9 !important;
    color: white !important;
    white-space: nowrap;
  }
`;

export const CustomSpace = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 500px;
  max-width: 100%;
`;
export const ShowImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  height: 75px;
  width: 75px;
  border: 1px solid #dee2e6;
`;
export const CustomSpaceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px !important;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
