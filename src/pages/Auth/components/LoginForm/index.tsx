import React, { useState } from "react";
import { Button, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as Styled from "../../styles";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { ILogin } from "../../../../types/auth.type";
import { closeAuth, login } from "../../authSlice";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Email không đúng định dạng"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu tối thiểu 6 ký tự"),
  })
  .required();

interface IProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ onClick }: IProps) => {
  const { api } = useAppSelector((state) => state.auth);
  const [show, setShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ILogin) => {
    dispatch(login(data))
      .unwrap()
      .then((data: any) => {
        message.success(data.message);
        dispatch(closeAuth());
      })
      .catch((error) => message.error(error.message));
  };

  return (
    <Styled.LoginForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <h2>Đăng nhập tài khoản</h2>

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <div className="login-group">
            <label htmlFor="email">Email</label>
            <div className="login-input">
              <input
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                type="text"
                id="email"
              />
              <i className="bx bx-envelope"></i>
            </div>
            {errors.email && (
              <span className="login-error">{errors.email.message}</span>
            )}
          </div>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <div className="login-group">
            <label htmlFor="password">Mật khẩu</label>
            <div className="login-input">
              <input
                type={show ? "text" : "password"}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                id="password"
              />
              {show ? (
                <i onClick={() => setShow(false)} className="bx bx-hide"></i>
              ) : (
                <i onClick={() => setShow(true)} className="bx bx-show"></i>
              )}
            </div>
            {errors.password && (
              <span className="login-error">{errors.password.message}</span>
            )}
          </div>
        )}
      />

      <Button
        htmlType="submit"
        className="btn_login"
        block
        type="primary"
        size="large"
        loading={api.login.status === "pending"}
      >
        Đăng nhập
      </Button>
      <div className="login-div">
        <span>❤️</span>
      </div>
      <div className="login-register">
        Bạn chưa có tài khoản?
        <strong onClick={(e) => onClick(true)}> Tạo tài khoản</strong>
      </div>
    </Styled.LoginForm>
  );
};

export default LoginForm;
