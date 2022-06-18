import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import * as Styled from "./styles";

const EmojiPicker = ({
  setContent,
  content,
}: {
  setContent: any;
  content: any;
}) => {
  const reactions = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🙂",
    "🤗",
    "🤔",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "😴",
    "😌",
    "🤓",
    "😛",
    "😜",
    "😝",
    "🤤",
    "😒",
    "😓",
    "😔",
    "😕",
    "🙃",
    "🤑",
    "😲",
    "☹️",
    "🙁",
    "😖",
    "😞",
    "😟",
    "😤",
    "😢",
    "😭",
    "😦",
    "😧",
    "😨",
    "😩",
    "😬",
    "😰",
    "😱",
    "😳",
    "😵",
    "😡",
    "😠",
    "😇",
    "🤠",
    "🤡",
    "🤥",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤧",
    "😈",
    "👿",
    "👹",
    "👺",
    "💀",
    "👻",
    "👽",
    "🤖",
    "💩",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
  ];

  return (
    <Styled.EmojiDropdown>
      <Scrollbars>
        <ul>
          {reactions.map((icon) => {
            return (
              <li>
                <button onClick={() => setContent(content + icon)} key={icon}>
                  {icon}
                </button>
              </li>
            );
          })}
        </ul>
      </Scrollbars>
    </Styled.EmojiDropdown>
  );
};

export default EmojiPicker;
