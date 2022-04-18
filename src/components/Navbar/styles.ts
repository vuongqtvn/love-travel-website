import styled from "styled-components";
import { colors } from "../../theme/colors";

export const NavbarWrapper = styled.div`
  position: fixed;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
  display: none;
  width: 100%;
  z-index: 1000;
  border-top: 1px solid #ddd;
  background-color: ${colors.white};
  @media (max-width: 991px) {
    display: block;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
  height: -webkit-calc(60px + env(safe-area-inset-bottom));
  height: calc(60px + env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);
  margin: 0 auto;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1 1;
    position: relative;
    height: 100%;
    color: ${colors.black};
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    ::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      right: 0;
      bottom: 0;
      left: auto;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.1s ease-in-out;
    }
    i {
      font-size: 24px;
      width: 28px;
    }
    span {
      font-size: 10px;
      margin-top: 4px;
    }
    &.active {
      color: ${colors.primary};
      span {
        color: ${colors.primary};
      }
      ::before {
        background: ${colors.primary};
      }
    }
  }
`;
