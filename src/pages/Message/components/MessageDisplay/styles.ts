import styled from "styled-components";

export const MessageDisplayWrap = styled.div`
  .chat_title {
    margin-bottom: 3px;
  }
  .small-avatar {
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
  .you_content {
    position: relative;
  }
  .you_content .bx-trash-alt {
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 14px;
    opacity: 0;
  }
  .you_content:hover .bx-trash-alt {
    opacity: 1;
  }
  .chat_text {
    padding: 9px 14px;
    margin-bottom: 5px;
  }
  .chat_time {
    font-size: 13px;
    color: #777;
  }
  .you_message .chat_text {
    background: #0048aa;
    color: white;
    border: 1px solid #0048aa;
    border-radius: 14px 14px 0 14px;
  }
  .other_message .chat_text {
    background: white;
    color: #111;
    border: 1px solid #ddd;
    border-radius: 14px 14px 14px 0;
  }
`;
