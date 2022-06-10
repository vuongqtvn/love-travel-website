/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Button, Grid, message, Skeleton, Tooltip } from "antd";
import { useKeenSlider } from "keen-slider/react";
import { LightBoxImages } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { HeartFilled, HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import * as Styled from "./styles";
import { openAuth, setUser } from "../../../Auth/authSlice";
import { savePlace, unSavePlace } from "../../placeSlice";

type Props = {
  showMap: any;
};

const PlaceTop = (props: Props) => {
  const { place, api } = useAppSelector((state) => state.place);
  const { user, token } = useAppSelector((state) => state.auth);
  const [loaded, setLoaded] = React.useState<boolean[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const screens = Grid.useBreakpoint();

  const dispatch = useAppDispatch();

  const [saved, setSaved] = useState(false);
  const [loadSaved, setLoadSaved] = useState(false);

  useEffect(() => {
    if (user?.saved.find((placeSave: any) => placeSave._id === place?._id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [user?.saved, place?._id]);

  const handleSavePlace = () => {
    if (!token) {
      return dispatch(openAuth());
    }
    if (loadSaved) return;

    if (place) {
      setLoadSaved(true);
      dispatch(savePlace(place._id))
        .unwrap()
        .then(() => {
          dispatch(
            setUser({
              ...user,
              saved: [...user?.saved, place],
            })
          );
          message.success(`Đã lưu địa điểm ${place.name}`);
          setLoadSaved(false);
        })
        .catch((error) => {
          setLoadSaved(false);
        });
    }
  };
  const handleUnSavePlace = () => {
    if (!token) {
      return dispatch(openAuth());
    }
    if (loadSaved) return;

    if (place) {
      setLoadSaved(true);
      dispatch(unSavePlace(place._id))
        .unwrap()
        .then(() => {
          dispatch(
            setUser({
              ...user,
              saved: user?.saved.filter((item: any) => item._id !== place._id),
            })
          );
          setLoadSaved(false);
        })
        .catch((error) => {
          setLoadSaved(false);
        });
    }
  };

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
                <Tooltip
                  placement="bottom"
                  title={!saved ? "Lưu địa điểm này" : "Đã lưu địa điểm này"}
                >
                  {loadSaved ? (
                    <Button
                      size={screens.lg ? "middle" : "small"}
                      shape="circle"
                      icon={<LoadingOutlined />}
                      onClick={handleSavePlace}
                    />
                  ) : !saved ? (
                    <Button
                      size={screens.lg ? "middle" : "small"}
                      shape="circle"
                      icon={<HeartOutlined />}
                      onClick={handleSavePlace}
                    />
                  ) : (
                    <Button
                      size={screens.lg ? "middle" : "small"}
                      danger
                      shape="circle"
                      onClick={handleUnSavePlace}
                      icon={<HeartFilled />}
                    />
                  )}
                </Tooltip>
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
              <a onClick={props.showMap}>Hiển thị bản đồ</a>
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
                Number(place?.images?.length)
                  ? Number(place?.images?.length) <= 5
                    ? 0
                    : Number(place?.images?.length) - 5
                  : 0
              } ảnh`}</span>
            </div>
          </div>
        </div>
        {/* <Link to={`${path.place}/jouri-dessert-tea/photo`}> */}
        <a>
          <span className="contributePhoto" onClick={() => setIsOpen(true)}>
            <i className="bx bx-image"></i>
            {` Xem tất cả ảnh (${
              place?.images.length ? place?.images.length : 0
            })`}
          </span>
        </a>
        {/* </Link> */}
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
        {/* <Link to={`${path.place}/jouri-dessert-tea/photo`}>
          <span className="view-all">Xem tất cả</span>
        </Link> */}
        <a>
          <span className="view-all" onClick={() => setIsOpen(true)}>
            Xem tất cả
          </span>
        </a>
        {/* <span className="total-photo">{`${place?.images.length}`}</span> */}
      </Styled.PlaceTopGalleryMobile>
      {isOpen && (
        <LightBoxImages
          onClick={() => setIsOpen(false)}
          images={place?.images}
          caption={place?.name}
        />
      )}
    </Styled.PlaceTop>
  );
};

export default PlaceTop;
