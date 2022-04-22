import React from "react";
import { Link } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react";
import * as Styled from "./styles";
import path from "../../../../constants/path";

type Props = {};

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];

const PlaceTop = (props: Props) => {
  const [loaded, setLoaded] = React.useState<boolean[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    animationEnded(s) {
      setCurrentSlide(s.track.details.rel);
    },
    loop: true,
    initial: 0,
  });

  React.useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide]);

  return (
    <Styled.PlaceTop>
      <Styled.PlaceTopInfo>
        <h1>Jouri Dessert & Tea</h1>
        <div className="place-action">
          <div className="place-saved">
            <i className="bx bx-bookmark"></i>
          </div>
        </div>
      </Styled.PlaceTopInfo>
      <Styled.PlaceTopAddress>
        <p className="place-intro">
          Delivering the best dessert & tea, fresh & unique decoration and good
          service in the heart of Hanoi.
        </p>
        <p>
          <i className="bx bx-map"></i>Số 10 Khúc Hạo, Ba Đình
          <span>{" — "}</span>
          <i
            style={{
              display: "none",
            }}
            className="bx bx-street-view"
          ></i>
          <a>Hiển thị bản đồ</a>
          {" — "}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=21.0317299,105.8369565"
            target="_blank"
            rel="noreferrer"
          >
            Xem đường đi
          </a>
          {" — "}
          <a>Xem menu</a>
        </p>
      </Styled.PlaceTopAddress>
      <Styled.PlaceTopGallery id="gallery">
        <div className="place-one"></div>
        <div className="place-two"></div>
        <div className="place-three">
          <div className="place-three-one"></div>
          <div className="place-three-two">
            <div></div>
            <div>
              <span>{`+4 ảnh`}</span>
            </div>
          </div>
        </div>
        <Link to={`${path.place}/jouri-dessert-tea/photo`}>
          <span className="contributePhoto">
            <i className="bx bx-image"></i>
            {` Xem tất cả ảnh (0)`}
          </span>
        </Link>
      </Styled.PlaceTopGallery>
      <Styled.PlaceTopGalleryMobile>
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide lazy__slide">
              <div className="place__image">
                <img src={loaded[idx] ? src : ""} alt="" />
              </div>
            </div>
          ))}
        </div>
        <Link to={`${path.place}/jouri-dessert-tea/photo`}>
          <span className="view-all">Xem tất cả</span>
        </Link>
        <span className="total-photo">{`5/9`}</span>
      </Styled.PlaceTopGalleryMobile>
    </Styled.PlaceTop>
  );
};

export default PlaceTop;
