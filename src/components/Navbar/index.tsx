import React from "react";
import { NavLink } from "react-router-dom";
import path from "../../constants/path";
import * as Styled from "./styles";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Styled.NavbarWrapper>
      <Styled.NavbarContent>
        <NavLink to={path.home}>
          <i className="bx bx-home"></i>
          <span>Trang chủ</span>
        </NavLink>
        <NavLink to={path.explore}>
          <i className="bx bx-planet"></i>
          <span>Khám phá</span>
        </NavLink>
        <NavLink to={path.promo}>
          <i className="bx bx-purchase-tag-alt"></i>
          <span>Khuyến mãi</span>
        </NavLink>
        <NavLink to={path.saved}>
          <i className="bx bx-heart"></i>
          <span>Đã thích</span>
        </NavLink>
        <NavLink to={path.profile}>
          <i className="bx bx-user"></i>
          <span>Tài khoản</span>
        </NavLink>
      </Styled.NavbarContent>
    </Styled.NavbarWrapper>
  );
};

export default Navbar;
