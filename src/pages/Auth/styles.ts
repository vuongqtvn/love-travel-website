import styled from "styled-components";
import { images } from "../../assets";

export const LoginOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.65);

  @media (max-width: 991px) {
    align-items: normal;
  }
`;

export const LoginModal = styled.div`
  position: relative;
  display: flex;
  color: #000;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  @media (max-width: 991px) {
    min-height: 100vh;
    width: 100vw;
    border-radius: 0;
    overflow-y: auto;
  }

  .login-close {
    position: absolute;
    top: 2px;
    right: 8px;
    bottom: auto;
    left: auto;
    font-size: 26px;
    color: #717171;
    transition: all 0.15s ease;
    cursor: pointer;
    :hover {
      font-size: 30px;
    }

    @media (max-width: 991px) {
      top: 12px;
      right: 10px;
    }
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 24px;
  @media (max-width: 991px) {
    width: 100%;
    padding: 20px 12px;
    overflow-y: auto;
  }
`;

export const LoginForm = styled.form`
  margin-bottom: 10px;
  flex-grow: 1;
  h2 {
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }
  .login-group {
    padding: 6px 0;
    label {
      display: block;
      font-size: 16px;
      margin-bottom: 4px;
    }
    .login-input {
      position: relative;
      input {
        width: 100%;
        font-size: 16px;
        letter-spacing: 0.4px;
        outline: none;
        padding: 6px 30px 6px 10px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #717171;
      }
      i {
        position: absolute;
        top: 50%;
        right: 8px;
        bottom: auto;
        left: auto;
        font-size: 20px;
        color: #c3c3c3;
        transform: translateY(-50%);
      }
    }
  }
  .login-error {
    margin-top: 4px;
    display: block;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: red;
    transition: all 0.15s ease;
  }
  .btn_login {
    margin: 14px 0;
  }
  .login-div {
    position: relative;
    display: flex;
    text-align: center;
    white-space: nowrap;
    padding: 8px;
    ::before,
    ::after {
      content: "";
      top: 50%;
      width: 50%;
      position: relative;
      border-top: 1px solid #717171;
      transform: translateY(50%);
    }
    span {
      font-size: 16px;
      padding: 0 10px;
      display: inline-block;
    }
  }

  .login-register {
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
    strong {
      cursor: pointer;
      color: #e03;
    }
  }
`;

export const LoginImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${images.login});
  background-size: contain;
  background-color: #fdebef;
  border: none;
  width: 400px;
  @media (max-width: 991px) {
    display: none;
  }
`;
