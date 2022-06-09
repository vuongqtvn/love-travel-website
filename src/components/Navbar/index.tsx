import React from "react";
import { NavLink } from "react-router-dom";
import path from "../../constants/path";
import { openAuth } from "../../pages/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as Styled from "./styles";

type Props = {};

const Navbar = (props: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

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
        <NavLink
          onClick={() => {
            if (!user) {
              dispatch(openAuth());
            }
          }}
          to={`/profile/${user?._id}`}
        >
          <i className="bx bx-user"></i>
          <span>Tài khoản</span>
        </NavLink>
      </Styled.NavbarContent>
    </Styled.NavbarWrapper>
  );
};

export default Navbar;
