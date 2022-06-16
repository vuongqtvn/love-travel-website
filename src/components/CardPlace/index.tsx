import React, { useCallback, useEffect, useState } from "react";
import { Rate, Tooltip, Button, Grid, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import path from "../../constants/path";
import ImageLazy from "../ImageLazy";
import {
  HeartOutlined,
  HeartFilled,
  LoadingOutlined,
  EditOutlined,
} from "@ant-design/icons";

import * as Styled from "./styles";
import { PlaceType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { savePlace, unSavePlace } from "../../pages/Place/placeSlice";
import { openAuth, setUser } from "../../pages/Auth/authSlice";

type Props = {
  place: PlaceType;
  edit?: boolean;
};

const CardPlace = ({ place, edit = false }: Props) => {
  const { user, token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const screens = Grid.useBreakpoint();
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  const [close, setClose] = useState(true);
  const [loadSaved, setLoadSaved] = useState(false);

  const openPlace = useCallback(() => {
    var d = new Date();
    var currentTime = d.getHours() * 60 * 60 + d.getMinutes() * 60;
    const [hoursFrom, minutesFrom] = place.time.from.split(":");
    const [hoursTo, minutesTo] = place.time.to.split(":");
    const totalSecondsFrom = Number(hoursFrom * 60 * 60 + minutesFrom * 60);
    const totalSecondsTo = Number(hoursTo * 60 * 60 + minutesTo * 60);

    if (totalSecondsFrom < currentTime && totalSecondsTo > currentTime) {
      setClose(true);
    } else {
      setClose(false);
    }
  }, [place.time.from, place.time.to]);

  useEffect(() => {
    openPlace();
  }, [openPlace]);

  useEffect(() => {
    if (user?.saved.find((placeSave: any) => placeSave._id === place._id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [user?.saved, place._id]);

  const handleSavePlace = () => {
    if (!token) {
      return dispatch(openAuth());
    }
    if (loadSaved) return;

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
        setLoadSaved(false);
        message.success(`Đã lưu địa điểm ${place.name}`);
      })
      .catch((error) => {
        setLoadSaved(false);
      });
  };

  const handleUnSavePlace = () => {
    if (!token) {
      return dispatch(openAuth());
    }
    if (loadSaved) return;

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
  };
  return (
    <Styled.PlaceItem>
      <Styled.PlaceCard>
        <Link to={`${path.place}/${place._id}`} className="link-image">
          <ImageLazy
            width={screens.lg ? "270px" : "120px"}
            height={screens.lg ? "100%" : "110px"}
            radius="6px"
            alt={place.name}
            src={place.thumbnail}
          />
        </Link>
        <div className="place-body">
          <Link to={`${path.place}/${place._id}`}>
            <div className="place__body-name">
              <h4>{place.name}</h4>
            </div>
          </Link>
          <div className="place__body-rate">
            {/* <span className="rate-num">{place.rateAvg}</span> */}
            <Rate
              className="star"
              disabled
              value={Math.round(place.rateAvg * 2) / 2}
            />
            <span className="comment">
              -{" "}
              {place.posts.length > 0
                ? `có ${place.posts.length} đánh giá`
                : `chưa có đánh giá`}
            </span>
          </div>
          <div className="place__body-text place__body-price">
            <i className="bx bx-dollar"></i>{" "}
            <span>{`${place.price.from.toLocaleString()}đ - ${place.price.to.toLocaleString()}đ`}</span>
          </div>
          <div className="place__body-text">
            <i className="bx bx-map"></i> <span>{place.address}</span>
          </div>
          <div className="place__body-text">
            <i className="bx bx-time-five"></i>
            <span>
              {close ? (
                <span className="time-open">Đang mở cửa </span>
              ) : (
                <span className="time-close">Đang đóng cửa</span>
              )}
              {/* <span className="time-close">Đang đóng cửa</span> */}

              {/* {id % 3 === 0 && (
                <span className="time-close">Đang đóng cửa</span>
              )}
              {id % 3 === 2 && (
                <span className="time-close-soon">Sắp đóng cửa</span>
              )} */}

              <span>{` - ${place.time.from} - ${place.time.to}`}</span>
            </span>
          </div>
        </div>
      </Styled.PlaceCard>
      {edit && user?._id === place.user._id ? (
        <Tooltip placement="bottom" title={`Chỉnh sửa địa điểm`}>
          <Styled.PlaceSaveButton>
            <Button
              disabled={user?._id !== place.user._id}
              size={screens.lg ? "middle" : "small"}
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => navigate(`/edit-place/${place._id}`)}
            />
          </Styled.PlaceSaveButton>
        </Tooltip>
      ) : (
        <Tooltip
          placement="bottom"
          title={!saved ? "Lưu địa điểm này" : "Đã lưu địa điểm này"}
        >
          <Styled.PlaceSaveButton>
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
          </Styled.PlaceSaveButton>
        </Tooltip>
      )}
    </Styled.PlaceItem>
  );
};

export default CardPlace;
