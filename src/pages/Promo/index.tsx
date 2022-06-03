import React from "react";
import { images } from "../../assets";
import { Section } from "../../components";
import PromoCard from "./components/PromoCard";
import * as Styled from "./styles";

const Promo = () => {
  return (
    <Section>
      <Styled.PromoContainer>
        <Styled.PromoHeader>
          <div className="container">
            <div className="content">
              <h1>Cập nhật khuyến mãi hiện hành</h1>
              <p>Bạn đang tìm kiếm một góc cafe để sống ảo?</p>
              <p>
                Hãy tiết kiệm hơn với các chương trình khuyến mãi của chúng tôi
                ở dưới đây.
              </p>
            </div>
            <div className="image">
              <img src={images.promo} alt="promo" />
            </div>
          </div>
        </Styled.PromoHeader>
        <Styled.PromoBody>
          <Styled.PromoList>
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="promo-item">
                  <PromoCard />
                </div>
              ))}
          </Styled.PromoList>
        </Styled.PromoBody>
      </Styled.PromoContainer>
    </Section>
  );
};

export default Promo;
