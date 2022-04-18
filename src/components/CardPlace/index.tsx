import React, { useState } from "react";
import { Rate, Tooltip, Button, Grid } from "antd";
import { Link } from "react-router-dom";
import path from "../../constants/path";
import ImageLazy from "../ImageLazy";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import * as Styled from "./styles";
import { PlaceType } from "../../types";

type Props = {
  place: PlaceType;
};

const CardPlace = ({ place }: Props) => {
  const screens = Grid.useBreakpoint();

  const [saved, setSaved] = useState(false);
  return (
    <Styled.PlaceItem>
      <Styled.PlaceCard>
        <Link to={`${path.place}/${place._id}`} className="link-image">
          <ImageLazy
            width={screens.lg ? "270px" : "120px"}
            height={screens.lg ? "100%" : "110px"}
            radius="6px"
            alt="ca-phe-nha-kho"
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
            <span className="rate-num">5</span>
            <Rate className="star" disabled value={Math.round(5 * 2) / 2} />
            <span className="comment">- chưa có đánh giá</span>
          </div>
          <div className="place__body-text place__body-price">
            <i className="bx bx-dollar"></i> <span>35.000đ - 100.000đ</span>
          </div>
          <div className="place__body-text">
            <i className="bx bx-map"></i> <span>{place.address}</span>
          </div>
          <div className="place__body-text">
            <i className="bx bx-time-five"></i>
            <span>
              {<span className="time-open">Đang mở cửa</span>}
              {/* {id % 3 === 0 && (
                <span className="time-close">Đang đóng cửa</span>
              )}
              {id % 3 === 2 && (
                <span className="time-close-soon">Sắp đóng cửa</span>
              )} */}

              <span> - 07:00 - 23:00</span>
            </span>
          </div>
        </div>
      </Styled.PlaceCard>
      <Tooltip
        placement="bottom"
        title={!saved ? "Lưu địa điểm này" : "Đã lưu địa điểm này"}
      >
        <Styled.PlaceSaveButton>
          {!saved ? (
            <Button
              size={screens.lg ? "middle" : "small"}
              shape="circle"
              icon={<HeartOutlined />}
              onClick={() => setSaved(true)}
            />
          ) : (
            <Button
              size={screens.lg ? "middle" : "small"}
              danger
              shape="circle"
              onClick={() => setSaved(false)}
              icon={<HeartFilled />}
            />
          )}
        </Styled.PlaceSaveButton>
      </Tooltip>
    </Styled.PlaceItem>
  );
};

export default CardPlace;
