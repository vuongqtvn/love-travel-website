import { Anchor, Dropdown, Menu, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components";
import path from "../../constants/path";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { DownOutlined } from "@ant-design/icons";

import * as Styled from "./styles";

type Props = {};

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];

const menu = (
  <></>
  // <Menu
  //   items={[
  //     {
  //       label: (
  //         <a
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           href="https://www.antgroup.com"
  //         >
  //           1st menu item
  //         </a>
  //       ),
  //     },
  //     {
  //       label: (
  //         <a
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           href="https://www.aliyun.com"
  //         >
  //           2nd menu item
  //         </a>
  //       ),
  //     },
  //     {
  //       label: (
  //         <a
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           href="https://www.luohanacademy.com"
  //         >
  //           3rd menu item
  //         </a>
  //       ),
  //     },
  //   ]}
  // />
);

const Place = (props: Props) => {
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
    <Section>
      <Styled.PlaceWrapper>
        <Styled.PlaceContainer>
          <Styled.PlaceStickyBar className="hidden">
            <div className="place-sticky-body">
              <div className="place-sticky-menu">
                <Anchor className="place-anchor">
                  <Anchor.Link href="#gallery" title="Hình ảnh" />
                  <Anchor.Link href="#detail" title="Tổng quan" />
                  <Anchor.Link href="#benefit" title="Tiện ích" />
                  <Anchor.Link href="#review" title="Đánh giá" />
                  <Anchor.Link href="#related" title="Lân cận" />
                </Anchor>
              </div>
            </div>
          </Styled.PlaceStickyBar>
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
                Delivering the best dessert & tea, fresh & unique decoration and
                good service in the heart of Hanoi.
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
          <Styled.PlaceDetail id="detail">
            <div className="review">
              <h2>Đánh giá</h2>
              <div className="place__review-score">
                <strong>0</strong>
                <div>
                  <h2>Chưa có đánh gía</h2>
                  <span>{`/5 (0 đánh giá)`}</span>
                </div>
              </div>
            </div>
            <div className="detail-info">
              <h2>Thông tin chi tiết</h2>
              <div>
                <div className="info">
                  <div>
                    <i className="bx bx-dollar"></i>
                    {`39.000đ - 129.000đ`}
                  </div>
                  <div>
                    <i className="bx bx-time"></i>
                    <div>
                      <span className="status time-close">Đang đóng cửa</span>{" "}
                      {" - "}
                      <Dropdown overlay={menu}>
                        <strong className="ant-dropdown-link">
                          08:00 - 21:00 <DownOutlined />
                        </strong>
                      </Dropdown>
                    </div>
                  </div>
                  <div>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:09494432443">09494432443</a>
                  </div>
                  <div className="info-link">
                    <i className="bx bxl-facebook-square"></i>
                    <a href="https://www.facebook.com/JouriDessert">
                      Jouri Dessert & Tea
                    </a>
                  </div>
                  <div className="info-link">
                    <i className="bx bxl-instagram"></i>
                    <a href="https://www.facebook.com/JouriDessert">
                      Jouri Dessert & Tea
                    </a>
                  </div>
                  <div className="info-tags">
                    <i className="bx bx-purchase-tag"></i>
                    <Space>
                      <Link to="/search?q=&tags=cafe-view-dep">
                        Cafe View Đẹp
                      </Link>
                      <Link to="/search?q=&tags=cafe-view-dep">
                        Cafe Ngoài trời
                      </Link>
                    </Space>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-address"></div>
          </Styled.PlaceDetail>
          <Styled.PlaceBenefit id="benefit"></Styled.PlaceBenefit>
          <Styled.PlaceReview id="review"></Styled.PlaceReview>
          <Styled.PlaceRelated id="related"></Styled.PlaceRelated>
        </Styled.PlaceContainer>
      </Styled.PlaceWrapper>
    </Section>
  );
};

export default Place;
