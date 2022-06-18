import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { imageShow, videoShow } from "../../../../utils/mediaShow";
import { deleteMessages } from "../../messageSlice";

import * as Styled from "./styles";

const MessageDisplay = ({
  user,
  message,
  data,
}: {
  user: any;
  message: any;
  data?: any;
}) => {
  const { auth } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const handleDeleteMessages = () => {
    if (data && message) {
      if (window.confirm("Bạn có muốn xoá tin nhắn này!")) {
        dispatch(deleteMessages({ message, data }));
      }
    }
  };
  return (
    <Styled.MessageDisplayWrap>
      <div className="chat_title">
        <img alt={user.name} src={user.avatar} className="small-avatar" />
        <span style={{ marginLeft: 4 }}>{user.name}</span>
      </div>
      <div className="you_content">
        {user._id === auth.user?._id && (
          <i className="bx bx-trash-alt" onClick={handleDeleteMessages}></i>
        )}

        <div>
          {message.text && <div className="chat_text">{message.text}</div>}
          {message.media.map((media: any, key: any) => (
            <div key={key}>
              {media.url.match(/video/i)
                ? videoShow(media.url)
                : imageShow(media.url)}
            </div>
          ))}
        </div>
      </div>

      <div className="chat_time">
        {new Date(message.createdAt).toLocaleString()}
      </div>
    </Styled.MessageDisplayWrap>
  );
};

export default MessageDisplay;
