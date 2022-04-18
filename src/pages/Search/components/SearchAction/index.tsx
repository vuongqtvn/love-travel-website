import { Button } from "antd";
import React from "react";
import * as Styled from "./styles";

import { FilterOutlined, EnvironmentOutlined } from "@ant-design/icons";
type Props = {
  openMapModal: any;
};

const SearchAction = (props: Props) => {
  return (
    <Styled.SearchActionWrap>
      <Button shape="round" icon={<FilterOutlined />}>
        Bộ lọc
      </Button>
      <Button
        onClick={props.openMapModal}
        shape="round"
        icon={<EnvironmentOutlined />}
      >
        Bản đồ
      </Button>
    </Styled.SearchActionWrap>
  );
};

export default SearchAction;
