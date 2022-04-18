import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../assets";

import * as Styled from "./styles";

type Props = {};

const SuggestPlace = (props: Props) => {
  return (
    <Styled.HomeSection>
      <Styled.HomeContainer>
        <Styled.HomeSuggest>
          <img
            src={images.suggestPlace}
            alt="suggest place"
            className="image"
          />
          <div className="content">
            <h3>Chúng tôi có đang bỏ lỡ địa điểm nào bạn biết ?</h3>
            <Link to="/add-place">
              <button>Đóng góp địa điểm</button>
            </Link>
          </div>
        </Styled.HomeSuggest>
      </Styled.HomeContainer>
    </Styled.HomeSection>
  );
};

export default SuggestPlace;
