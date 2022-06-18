import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import * as Icons from "@ant-design/icons";
import * as Styled from "./styles";

import { Button, Dropdown, message as Message, Spin, Upload } from "antd";
import EmojiPicker from "./components/Emoji";
import { imageShow, videoShow } from "../../utils/mediaShow";
import { imageUpload } from "../../utils/imageUpload";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate, useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import {
  createMessage,
  deleteConversation,
  getMessages,
  loadMoreMessages,
} from "./messageSlice";
import MessageDisplay from "./components/MessageDisplay";

const MessageDetail = () => {
  const auth = useAppSelector((state) => state.auth);
  const message = useAppSelector((state) => state.message);
  const { socket } = useAppSelector((state) => state.socket);

  const navigate = useNavigate();
  const [user, setUser] = useState<any>([]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState<any>([]);
  const [data, setData] = useState([]);
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [total, setTotal] = useState(9);
  const [page, setPage] = useState(0);

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const fileRef = useRef<any>();

  const handleChange = (value: any) => {
    if (value.file.size > 1024 * 1024 * 5) {
      return Message.error("File quá nặng!");
    }

    setMedia([...media, value.file]);
  };

  const handleDeleteMedia = (index: number) => {
    const newArr = [...media];
    newArr.splice(index, 1);
    setMedia(newArr);
    if (newArr.length === 0) {
      if (fileRef.current) {
        fileRef.current.fileList = [];
      }
    }
  };

  const handleDeleteConversation = () => {
    if (window.confirm("Bạn có muốn xoá cuộc hội thoại này!")) {
      dispatch(deleteConversation({ id }));
      return navigate("/message");
    }
  };

  useEffect(() => {
    const newData = message.data.find((item: any) => item._id === id);
    if (newData) {
      setData(newData.messages);
      setTotal(newData.total);
      setPage(newData.page);
    }
  }, [message.data, id, auth.user?._id]);

  useEffect(() => {
    if (id && message.users.find((user: any) => user._id === id)) {
      const newUser = message.users.find((user: any) => user._id === id);
      if (newUser) {
        setUser(newUser);
      }
    }
  }, [message.users, id]);

  useEffect(() => {
    const getMessagesData = async () => {
      if (message.data.every((item: any) => item._id !== id)) {
        await dispatch(getMessages({ id }));
      }
    };
    getMessagesData();
  }, [id, dispatch, auth, message.data]);

  const handleLoadMore = async () => {
    if (total >= 12) {
      setIsLoadingMore(true);
      await dispatch(loadMoreMessages({ id, page: page + 1 }));
      setIsLoadingMore(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!text.trim() && media.length === 0) return;
    setText("");
    setMedia([]);
    setLoadingMedia(true);

    let newArr: any = [];
    if (media.length > 0) {
      newArr = await imageUpload(media);
    }

    const message = {
      sender: auth.user?._id,
      recipient: id,
      text,
      media: newArr,
      createdAt: new Date().toISOString(),
    };

    setLoadingMedia(false);
    await dispatch(
      createMessage({
        message,
        socket,
      })
    );
  };

  return (
    <Styled.MessageWrapper>
      <Styled.MessageContainer>
        <Sidebar />
        <Styled.ContentContainer>
          <Styled.ContentPane>
            {user.length !== 0 && (
              <Styled.ContentHeader>
                <img className="avatar" src={user?.avatar} alt={user?.name} />

                <div className="content">
                  <h3>{user?.name}</h3>
                  <p>Đang hoạt động</p>
                </div>

                <Button
                  onClick={handleDeleteConversation}
                  size="large"
                  icon={<Icons.DeleteOutlined />}
                  shape="circle"
                />
              </Styled.ContentHeader>
            )}
            <Styled.ContentBody>
              <div className="chat">
                <ScrollToBottom className="scroll">
                  {total >= 12 && (
                    <div style={{ textAlign: "center" }}>
                      <Button
                        loading={isLoadingMore}
                        type="ghost"
                        onClick={handleLoadMore}
                        style={{ margin: "10px auto" }}
                      >
                        Xem thêm
                      </Button>
                    </div>
                  )}
                  {data.map((msg: any, key: any) => (
                    <div key={key}>
                      {msg.sender !== auth.user?._id && (
                        <div className="chat_row other_message">
                          <MessageDisplay user={user} message={msg} />
                        </div>
                      )}
                      {msg.sender === auth.user?._id && (
                        <div className="chat_row you_message">
                          <MessageDisplay
                            user={auth.user}
                            message={msg}
                            data={data}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  {loadingMedia && (
                    <div
                      style={{
                        textAlign: "right",
                        paddingRight: 30,
                        paddingBottom: 15,
                      }}
                    >
                      <Spin />
                    </div>
                  )}
                </ScrollToBottom>
              </div>

              {media.length > 0 && (
                <div className="show_media">
                  {media.map((item: any, key: any) => (
                    <div className="item" key={key}>
                      {item.type.match(/video/i)
                        ? videoShow(URL.createObjectURL(item))
                        : imageShow(URL.createObjectURL(item))}
                      <div className="delete">
                        <Button
                          type="primary"
                          shape="circle"
                          onClick={() => handleDeleteMedia(key)}
                          icon={<Icons.DeleteOutlined />}
                          size="small"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Styled.ContentBody>
            <Styled.ContentFooter onSubmit={handleSubmit}>
              <div className="content">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  placeholder="Nhập để nhắn tin..."
                />
                <Upload
                  ref={fileRef}
                  accept="image/*,video/*"
                  itemRender={() => null}
                  beforeUpload={() => false}
                  onChange={(value) => handleChange(value)}
                  onPreview={() => false}
                  maxCount={1}
                >
                  <i className="bx bx-image-add image-icon"></i>
                </Upload>
                <Dropdown
                  placement="topRight"
                  destroyPopupOnHide
                  overlay={<EmojiPicker content={text} setContent={setText} />}
                  trigger={["click"]}
                >
                  <button type="button" className="emoji-icon"></button>
                </Dropdown>
              </div>

              <button
                disabled={text || media.length > 0 ? false : true}
                className="send"
              />
            </Styled.ContentFooter>
          </Styled.ContentPane>
        </Styled.ContentContainer>
      </Styled.MessageContainer>
    </Styled.MessageWrapper>
  );
};

export default MessageDetail;
