import React from "react";
import { Section } from "../../components";
import AddForm from "./components/AddForm";
import * as Styled from "./styles";

const AddPlace = () => {
  return (
    <Section>
      <Styled.AddPlaceWrapper>
        <Styled.AddPlaceForm>
          <Styled.AddPlaceHeader>
            <h1>Thêm địa điểm</h1>
            <span>
              Những địa điểm yêu thích của bạn chưa có trên website? Chia sẻ với
              cộng đồng ngay!
            </span>
          </Styled.AddPlaceHeader>
          <AddForm />
        </Styled.AddPlaceForm>
      </Styled.AddPlaceWrapper>
    </Section>
  );
};

export default AddPlace;
