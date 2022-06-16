import React, { useState } from "react";
import { Button, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as Styled from "./styles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Auth/authSlice";
import { ILogin } from "../../../types/auth.type";

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

const AdminLogin = () => {
  const { api } = useAppSelector((state) => state.auth);
  const [show, setShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        navigate(`/admin`);
      });
  };

  return (
    <Styled.LoginWrapper>
      <Styled.LoginForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Link to="/">Trang chủ</Link>
        <h2>Đăng nhập quản trị viên</h2>

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
      </Styled.LoginForm>
    </Styled.LoginWrapper>
  );
};

export default AdminLogin;
