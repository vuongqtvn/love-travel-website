import { Space } from "antd";
import styled from "styled-components";
import { colors } from "../../../../../theme/colors";

export const AddPlace = styled.div`
  height: 100%;
  .ant-spin-nested-loading {
    height: 100%;
    .ant-spin-container {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
  .show_images {
    margin-top: 10px;
    max-height: 600px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    place-items: center;
    padding: 0 10px 10px 0;
    grid-gap: 10px;
    ::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.textInput};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${colors.white};
      border-radius: 5px;
    }
    img,
    video {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
  .media-show {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border: 1px solid ${colors.primary};
    .btn {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      z-index: 5;
    }
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: #096dd9;
  margin: 0;
`;

export const CustomSpaceBox = styled(Space)`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  margin-bottom: 15px;
`;
