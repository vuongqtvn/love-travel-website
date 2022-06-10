import React from "react";
import { Button } from "antd";
import { images } from "../../assets";
import { openAuth } from "../../pages/Auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

import * as Styled from "./styles";

const NotAuth = () => {
  const dispatch = useAppDispatch();

  return (
    <Styled.NotAuthWrap>
      <img src={images.empty} alt="empty" />
      <p>Opps, chưa đăng nhập, Vui lòng đăng nhập!</p>
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => dispatch(openAuth())}>Đăng nhập</Button>
      </div>
    </Styled.NotAuthWrap>
  );
};

export default NotAuth;
