/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";

import { Skeleton } from "antd";
import { useKeenSlider } from "keen-slider/react";
import { LightBoxImages, MapModal } from "../../../../components";
import { showMapModal } from "../../../../components/MapModal/mapModalSlice";
import path from "../../../../constants/path";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import * as Styled from "./styles";

type Props = {};

const PlaceTop = (props: Props) => {
  const { place, api } = useAppSelector((state) => state.place);
  const [loaded, setLoaded] = React.useState<boolean[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

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
      {api.getPlace.status === "pending" ? (
        <Skeleton active />
      ) : (
        <>
          <Styled.PlaceTopInfo>
            <h1>{place?.name}</h1>

            <div className="place-action">
              <div className="place-saved">
                <i className="bx bx-bookmark"></i>
              </div>
            </div>
          </Styled.PlaceTopInfo>
          <Styled.PlaceTopAddress>
            <p className="place-intro">{place?.description}</p>
            <p>
              <i className="bx bx-map"></i>
              {place?.address}
              <span>{" — "}</span>
              <i
                style={{
                  display: "none",
                }}
                className="bx bx-street-view"
              ></i>
              <a onClick={() => dispatch(showMapModal())}>Hiển thị bản đồ</a>
              {" — "}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${place?.location?.lat},${place?.location?.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                Xem đường đi
              </a>
              {" — "}
              <a>Xem menu</a>
            </p>
          </Styled.PlaceTopAddress>
        </>
      )}

      <Styled.PlaceTopGallery id="gallery">
        <div
          className="place-one"
          onClick={() => setIsOpen(true)}
          style={{
            backgroundImage:
              api.getPlace.status === "pending"
                ? `url("")`
                : `url(${place?.images?.[0]?.url})`,
          }}
        ></div>
        <div
          className="place-two"
          onClick={() => setIsOpen(true)}
          style={{
            backgroundImage:
              api.getPlace.status === "pending"
                ? `url("")`
                : `url(${place?.images?.[1]?.url})`,
          }}
        ></div>
        <div className="place-three">
          <div
            className="place-three-one"
            onClick={() => setIsOpen(true)}
            style={{
              backgroundImage:
                api.getPlace.status === "pending"
                  ? `url("")`
                  : `url(${place?.images?.[2]?.url})`,
            }}
          ></div>
          <div className="place-three-two">
            <div
              onClick={() => setIsOpen(true)}
              style={{
                backgroundImage:
                  api.getPlace.status === "pending"
                    ? `url("")`
                    : `url(${place?.images?.[3]?.url})`,
              }}
            ></div>
            <div
              onClick={() => setIsOpen(true)}
              style={{
                backgroundImage:
                  api.getPlace.status === "pending"
                    ? `url("")`
                    : `url(${place?.images?.[4]?.url})`,
              }}
            >
              <span>{`+${
                Number(place?.images?.length) <= 5
                  ? 0
                  : Number(place?.images?.length) - 5
              } ảnh`}</span>
            </div>
          </div>
        </div>
        <Link to={`${path.place}/jouri-dessert-tea/photo`}>
          <span className="contributePhoto">
            <i className="bx bx-image"></i>
            {` Xem tất cả ảnh (${place?.images.length})`}
          </span>
        </Link>
      </Styled.PlaceTopGallery>
      <Styled.PlaceTopGalleryMobile>
        <div ref={sliderRef} className="keen-slider">
          {place?.images.map((image, idx) => (
            <div key={idx} className="keen-slider__slide lazy__slide">
              <div className="place__image">
                <img src={loaded[idx] ? image?.url : ""} alt="" />
              </div>
            </div>
          ))}
        </div>
        <Link to={`${path.place}/jouri-dessert-tea/photo`}>
          <span className="view-all">Xem tất cả</span>
        </Link>
        <span className="total-photo">{`5/9`}</span>
      </Styled.PlaceTopGalleryMobile>
      <LightBoxImages
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
        images={place?.images}
      />
      <MapModal place={place} title={place?.name} />
    </Styled.PlaceTop>
  );
};

export default PlaceTop;
