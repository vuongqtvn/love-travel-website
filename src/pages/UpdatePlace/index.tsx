import React from "react";
import { Section } from "../../components";
import AddForm from "./components/AddForm";
import * as Styled from "./styles";

const UpdatePlace = () => {
  return (
    <Section>
      <Styled.AddPlaceWrapper>
        <Styled.AddPlaceForm>
          <AddForm />
        </Styled.AddPlaceForm>
      </Styled.AddPlaceWrapper>
    </Section>
  );
};

export default UpdatePlace;
