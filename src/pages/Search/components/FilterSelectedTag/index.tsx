import React from "react";
import { Space } from "antd";
import * as Styled from "./styles";

type Props = {
  search: any;
};

const FilterSelectedTag = ({ search }: Props) => {
  if (true) {
    return null;
  } else {
    return (
      <Styled.FilterSelect>
        <Space size={[0, 4]} wrap>
          {new Array(4).fill(null).map((_, index) => (
            <Styled.TagFilter
              closable
              // visible={this.state.visible}
              // onClose={() => this.setState({ visible: false })}
              key={index}
            >
              Quận Hải Châu
            </Styled.TagFilter>
          ))}
        </Space>
      </Styled.FilterSelect>
    );
  }
};

export default FilterSelectedTag;
