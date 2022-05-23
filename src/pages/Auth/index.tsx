import React, { useState } from "react";
import { Button } from "antd";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import * as Styled from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { closeAuth } from "./authSlice";

type Props = {};

const Auth = (props: Props) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  return (
    <Styled.LoginOverlay>
      <Styled.LoginModal>
        <div className="login-close" onClick={() => dispatch(closeAuth())}>
          <i className="bx bx-x"></i>
        </div>
        <Styled.LoginContainer>
          {isRegister ? (
            <RegisterForm onClick={setIsRegister} />
          ) : (
            <LoginForm onClick={setIsRegister} />
          )}
        </Styled.LoginContainer>
        <Styled.LoginImage />
      </Styled.LoginModal>
    </Styled.LoginOverlay>
  );
};

export default Auth;
