import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import * as Styled from "./styles";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  return (
    <Styled.HomeHero>
      <Styled.HomeContainer>
        <Styled.HeroContent>
          <Styled.HeroContentTop>
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
          <Styled.HeroSearch
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?q=${value}`);
            }}
          >
            <div className="search-input">
              <input
                type="text"
                name="searchPlace"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete="off"
                placeholder="Tên quán, khu vực, kiểu quán,..."
              />
            </div>
            <div className="search-btn">
              <button>Tìm kiếm</button>
            </div>
          </Styled.HeroSearch>
        </Styled.HeroContent>
      </Styled.HomeContainer>
    </Styled.HomeHero>
  );
};

export default Search;
