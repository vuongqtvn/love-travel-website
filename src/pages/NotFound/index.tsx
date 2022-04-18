import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets";
import * as Styled from "./styles";

type Props = {};

const NotFound = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Styled.NotFoundContainer>
      <img src={images.bg_404} alt="404 - notfound" />
      <h1>404 - Trang không tồn tại</h1>
      <Button
        shape="round"
        type="primary"
        size="large"
        onClick={() => navigate("/", { replace: true })}
      >
        Quay lại trang chủ
      </Button>
    </Styled.NotFoundContainer>
  );
};

export default NotFound;
