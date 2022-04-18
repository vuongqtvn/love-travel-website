import React from "react";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";

const StyledLoading = styled(LinearProgress)`
  position: fixed !important;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;
`;

function Loading() {
  const loading = useAppSelector((state) => state.app.loading);
  if (loading) return <StyledLoading color="secondary" />;
  return null;
}

export default Loading;
