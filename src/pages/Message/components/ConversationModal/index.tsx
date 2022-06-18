import React from "react";
import { useNavigate } from "react-router-dom";
import { UserItemLoading } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { addUserMessage } from "../../messageSlice";
import UserCard from "../UserCard";
import * as Styled from "./styles";

const ConverSationModal = ({
  loading,
  onClose,
  users,
}: {
  loading: boolean;
  onClose: any;
  users: any;
}) => {
  const auth = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    onClose();
    return navigate(`/message/${user._id}`);
  };

  return (
    <Styled.ModalOverlay>
      <Styled.ModalWrapper>
        <Styled.ModalPage>
          <Styled.ModalHeader>
            <div className="title">
              <h2>Cuộc hội thoại mới</h2>
            </div>
            <div className="close" onClick={onClose}>
              <i className="bx bx-x"></i>
            </div>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            {loading
              ? [1, 2, 3].map((key) => <UserItemLoading key={key} />)
              : users
                  .filter((item: any) => item._id !== auth.user?._id)
                  .map((user: any, key: number) => {
                    return (
                      <UserCard
                        key={key}
                        user={user}
                        onClick={() => handleAddUser(user)}
                      />
                    );
                  })}
          </Styled.ModalBody>
        </Styled.ModalPage>
      </Styled.ModalWrapper>
    </Styled.ModalOverlay>
  );
};

export default ConverSationModal;
