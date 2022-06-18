import React from "react";
import { Box } from "../../components";
import Sidebar from "./components/Sidebar";
import * as Icons from "@ant-design/icons";
import * as Styled from "./styles";
import { colors } from "../../theme/colors";

const Message = () => {
  return (
    <Styled.MessageWrapper>
      <Styled.MessageContainer>
        <Sidebar />
        <Styled.ContentContainer>
          <Styled.ContentPane>
            <Box
              flexDirection="column"
              alignItems="center"
              flex={1}
              gap="10px"
              justifyContent="center"
            >
              <Icons.MessageOutlined
                style={{
                  color: colors.primary,
                  fontSize: 40,
                }}
              />
              <h3>Chọn một người để bắt đầu trò chuyện</h3>
            </Box>
          </Styled.ContentPane>
        </Styled.ContentContainer>
      </Styled.MessageContainer>
    </Styled.MessageWrapper>
  );
};

export default Message;
