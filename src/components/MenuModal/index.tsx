import React from "react";
import { images } from "../../assets";
import * as Styled from "./styles";

const MenuModal = ({ place, onClose }: { place: any; onClose: any }) => {
  return (
    <Styled.ModalOverlay>
      <Styled.ModalWrapper>
        <Styled.ModalPage>
          <Styled.ModalHeader>
            <div className="title">
              <h2>Menu của {place ? place.name : "địa điểm"}</h2>
            </div>
            <div className="close" onClick={onClose}>
              <i className="bx bx-x"></i>
            </div>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <Styled.PlaceMenu>
              <Styled.PlaceMenuEmpty>
                <img src={images.empty} alt="empty" />
                <span>Opps, menu chưa được cập nhật!</span>
              </Styled.PlaceMenuEmpty>
            </Styled.PlaceMenu>
          </Styled.ModalBody>
        </Styled.ModalPage>
      </Styled.ModalWrapper>
    </Styled.ModalOverlay>
  );
};

export default MenuModal;
