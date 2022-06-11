import React from "react";

import { PlaceType } from "../../types";
import * as Styled from "./styles";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";

type Props = {
  place?: PlaceType;
  onClose: any;
  review?: any;
  mode: "add" | "update";
};

const ReviewModal = ({ review, place, onClose, mode }: Props) => {
  return (
    <Styled.ModalOverlay>
      <Styled.ModalWrapper>
        <Styled.ModalPage>
          {mode === "add" && place && (
            <AddForm place={place} onClose={onClose} />
          )}
          {mode === "update" && review && (
            <UpdateForm review={review} onClose={onClose} />
          )}
        </Styled.ModalPage>
      </Styled.ModalWrapper>
    </Styled.ModalOverlay>
  );
};

export default ReviewModal;
