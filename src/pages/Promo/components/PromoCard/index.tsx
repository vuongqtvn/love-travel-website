import React from "react";
import * as Styled from "./styles";

const PromoCard = () => {
  return (
    <Styled.PromoCard>
      <div>
        <div className="card-image">
          <img
            src="https://ik.imagekit.io/reviewcafe/promo/128552575_3644428045635989_2538086445458530365_n_abXncx5LHTb.jpg?tr=w-400,q-80"
            alt=""
          />
        </div>
        <div className="card-body">
          <div className="spec">Order thả ga - Hoàn ngay nửa giá</div>
          <div className="title">EZI Coffee</div>
          <div className="text">30 Ông Ích Khiêm, Hải Châu, Đà Nẵng</div>
        </div>
      </div>
    </Styled.PromoCard>
  );
};

export default PromoCard;
