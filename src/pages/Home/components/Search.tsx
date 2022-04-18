import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import * as Styled from "./styles";

type Props = {};

const Search = (props: Props) => {
  const [focusInput, setFocusInput] = useState<Boolean>(false);
  return (
    <Styled.HomeHero>
      <Styled.HomeContainer>
        <Styled.HeroContent
          focusInput={focusInput}
          onClick={(e: any) => {
            setFocusInput(false);
          }}
        >
          <Styled.HeroContentTop focusInput={focusInput}>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Du lịch, nghỉ dưỡng, vui chơi",
                    "Đi & Khám Phá Điểm Hẹn Hấp Dẫn",
                    "Hãy khám phá với chúng tôi",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h3>
              Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn du lịch
            </h3>
          </Styled.HeroContentTop>
          <Styled.HeroSearch focusInput={focusInput}>
            <div className="search-input">
              <input
                onClick={(e: any) => {
                  e.stopPropagation();
                  setFocusInput(true);
                }}
                type="text"
                name="searchPlace"
                autoComplete="off"
                placeholder="Tên quán, khu vực, kiểu quán,..."
              />
              {focusInput && (
                <Styled.SearchListResult>
                  <Link className="search-all" to={`/search/?q=""`}>
                    <span>
                      <i className="bx bx-globe-alt"></i>Tìm tất cả
                    </span>
                  </Link>
                  <div className="title">Đề xuất</div>
                  <div className="list-place">
                    {[1, 2, 3, 4].map((key) => (
                      <Link
                        key={key}
                        className="list-place-item"
                        to={`/place/PlaceId`}
                      >
                        <div className="place-image">
                          <img
                            src="https://ik.imagekit.io/reviewcafe/place/artemis-pastry-coffee-shop/avatar/image_7O5bfQWLJ/tr:w-50,h-50,fo-center"
                            alt=""
                          />
                        </div>
                        <div className="place-info">
                          <div className="place-info-name">
                            Artemis Pastry & Coffee Shop
                          </div>
                          <div className="place-info-desc">
                            20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Styled.SearchListResult>
              )}
            </div>
            <Link to={`/search?q=value`}>
              <button>Tìm kiếm</button>
            </Link>
          </Styled.HeroSearch>
        </Styled.HeroContent>
      </Styled.HomeContainer>
    </Styled.HomeHero>
  );
};

export default Search;
