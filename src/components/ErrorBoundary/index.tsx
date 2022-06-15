import React, { Component, ErrorInfo } from "react";
import { images } from "../../assets";
import * as Styled from "./styles";
interface Props {
  children: JSX.Element | JSX.Element[];
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Styled.NotAuthWrap>
          <img src={images.empty} alt="empty" />
          <p>Opps, đã có lỗi xảy ra, vui lòng thử lại sau!</p>
        </Styled.NotAuthWrap>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
