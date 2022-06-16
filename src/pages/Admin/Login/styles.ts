import styled from "styled-components";

export const LoginWrapper = styled.div`
  background-color: #f2f3f5;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 30px 20px;
`;

export const LoginForm = styled.form`
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  max-width: 480px;
  a {
    font-size: 16px;
    font-weight: 600;
  }
  h2 {
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
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
