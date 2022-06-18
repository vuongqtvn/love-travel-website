import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import * as Icons from "@ant-design/icons";
import * as Styled from "./styles";
import { Button } from "antd";
import ConverSationModal from "../ConversationModal";
import { userApi } from "../../../../api";
import { addUserMessage, getConversations } from "../../messageSlice";
import UserCard from "../UserCard";

const SideBar: FC = () => {
  const [isOpenConversation, setIsOpenConversation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const message = useAppSelector((state) => state.message);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const handleAddUser = (user: any) => {
    dispatch(
      addUserMessage({
        ...user,
        text: "",
        media: [],
      })
    );
    // dispatch({
    //   type: MESSAGE_TYPE.CHECK_ONLINE_OFFLINE,
    //   payload: online,
    // });
    return navigate(`/message/${user._id}`);
  };

  useEffect(() => {
    setIsLoading(true);
    userApi
      .getUsers()
      .then((res: any) => {
        setUsers(res.users);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));

    return () => {
      setUsers([]);
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getConversations())
      .unwrap()
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <Styled.SidebarWrapper>
      <Styled.ConversationPane>
        <Styled.ConversationHeader>
          <h3>Tin nhắn</h3>
          <Button
            type="primary"
            onClick={() => setIsOpenConversation(true)}
            icon={<Icons.PlusOutlined />}
            shape="circle"
          />
        </Styled.ConversationHeader>
        <Styled.ConversationBody>
          {message.users.map((user: any, key: any) => (
            <UserCard
              active={user._id === id}
              user={user}
              onClick={() => handleAddUser(user)}
              message={true}
              key={key}
            />
          ))}
        </Styled.ConversationBody>
      </Styled.ConversationPane>
      {isOpenConversation && (
        <ConverSationModal
          loading={isLoading}
          users={users}
          onClose={() => setIsOpenConversation(false)}
        />
      )}
    </Styled.SidebarWrapper>
  );
};

export default SideBar;
