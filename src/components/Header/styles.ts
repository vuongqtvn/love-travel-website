import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  background: ${colors.white};
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 71% / 50%);
  z-index: 1;
  @media (max-width: 991px) {
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 16px;
  margin: auto;
  @media (min-width: 1280px) {
    width: 1200px;
  }
  @media (max-width: 991px) {
    height: 54px;
    padding: 0 6px 2px;
  }
`;

export const Logo = styled.div`
  width: 200px;
  text-align: left;
  a {
    text-decoration: none;
    color: inherit;
    img {
      height: 60px;
      vertical-align: middle;
      @media (max-width: 991px) {
        height: calc(54px - 10px);
      }
    }
  }
  @media (max-width: 991px) {
    width: 160px;
  }
`;

export const NavMobile = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: flex;
  }
  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    width: 40px;
    height: 40px;
    text-align: center;
    color: ${colors.primary};
    background: ${colors.bgIcon};
    border-radius: 50%;
    &:not(:last-child) {
      margin-right: 12px;
    }
    a {
      .icon {
        font-size: 24px;
        border-radius: 50%;
        padding-top: 1px;
        width: 20px;
        height: 20px;
        svg {
          margin-top: 0px;
        }
      }
      svg {
        fill: #e03;
        margin-top: 5px;
      }
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  color: ${colors.white};
  @media (max-width: 991px) {
    display: none;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .list {
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
      display: inline-flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      height: 60px;
      line-height: 60px;
      color: ${colors.black};
      padding: 0 10px;
      margin-right: 12px;
      transition: color 0.3s ease-in-out, border 0.1s ease-in-out;
      position: relative;
      i {
        font-size: 20px;
        margin-right: 4px;
      }
    }
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-item:not(:last-child) {
    margin-right: 14px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: ${colors.white};
  background-color: ${colors.primary};
  border-color: ${colors.primary};
  border-radius: 10px;
  transition: all 0.15s ease;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 600;
  padding: 0 14px;
  border-radius: 24px;
  i {
    font-size: 18px;
  }
  &.custom {
    background: 0 0;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
  &:hover {
    color: ${colors.white};
    background-color: ${colors.hover};
  }
`;

export const MenuDrawerTitle = styled.div`
  font-size: 14px;
  padding: 6px 20px;
  margin: 10px 0 4px;
  background: #f0f2f5;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
`;
