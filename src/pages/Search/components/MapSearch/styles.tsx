import styled from "styled-components";
import { images } from "../../../../assets";
import { colors } from "../../../../theme/colors";

export const SearchViewMap = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 152px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: url(${images.map}) no-repeat;
  background-size: cover;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  .view-map-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 700;
    height: 40px;
    padding: 2px 10px;
    color: ${colors.black};
    background-color: ${colors.white};
    border: 2px solid ${colors.black};
    transition: all 0.15s ease;
    cursor: pointer;
    :hover {
      color: ${colors.black};
      background-color: ${colors.grey};
    }
  }
`;
