import React from "react";
import { Spin } from "antd";
import Box from "../Box";

type Props = {};

const FallBack = (props: Props) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      style={{
        height: "calc(100vh - 60px)",
      }}
    >
      <Spin size="large" />
    </Box>
  );
};

export default FallBack;
