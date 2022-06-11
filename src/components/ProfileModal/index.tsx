import React from "react";
import * as Styled from "./styles";
import { IUser } from "../../types/auth.type";
import UpdateForm from "./UpdateForm";

type Props = {
  onClose: any;
  profile: IUser;
  mode: "update";
};

const ProfileModal = ({ profile, onClose, mode }: Props) => {
  return (
    <Styled.ModalOverlay>
      <Styled.ModalWrapper>
        <Styled.ModalPage>
          {mode === "update" && profile && (
            <UpdateForm profile={profile} onClose={onClose} />
          )}
        </Styled.ModalPage>
      </Styled.ModalWrapper>
    </Styled.ModalOverlay>
  );
};

export default ProfileModal;
