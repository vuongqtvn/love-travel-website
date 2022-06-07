import React from "react";
import { Progress, Spin, Typography } from "antd";
import { Box } from "../../../../components";
import { colors } from "../../../../theme/colors";
import * as Styled from "./styles";
import { PlaceType } from "../../../../types";
import { useAppSelector } from "../../../../redux/hooks";

type Props = {
  place: PlaceType | null;
};

const PlaceReview = ({ place }: Props) => {
  const { api } = useAppSelector((state) => state.place);
  return (
    <Styled.Review>
      <Spin spinning={api.getPlace.status === "pending"}>
        <Box
          justifyContent="center"
          alignItems="center"
          gap="5px"
          className="place__review-score"
        >
          <strong>{place?.rateAvg ? place?.rateAvg.toFixed(1) : 0}</strong>
          <div>
            <Typography.Title level={4}>
              {place?.posts?.length > 0
                ? `Có ${place?.posts.length} đánh giá`
                : "Chưa có đánh giá"}
            </Typography.Title>
            <span>
              {place?.posts?.length > 0
                ? `/5 (${place?.posts.length} đánh giá)`
                : `/5 (0 đánh giá)`}
            </span>
          </div>
        </Box>
        <div className="place-votes">
          <div className="place-item">
            <span className="place-type">Vị trí</span>
            <div className="place_progress">
              {api.getPlace.status === "pending" ? (
                <Progress
                  strokeColor={colors.primary}
                  percent={0}
                  status="active"
                  showInfo={false}
                />
              ) : (
                <Progress
                  strokeColor={colors.primary}
                  percent={
                    ((place?.ratePosition ? place.ratePosition * 1.0 : 0) / 5) *
                    100
                  }
                  status="active"
                  showInfo={false}
                />
              )}
            </div>
            <span className="place-count">
              {place?.ratePosition ? place.ratePosition.toFixed(1) : 0}
            </span>
          </div>
          <div className="place-item">
            <span className="place-type">Không gian</span>
            <div className="place_progress">
              {api.getPlace.status === "pending" ? (
                <Progress
                  strokeColor={colors.primary}
                  percent={0}
                  status="active"
                  showInfo={false}
                />
              ) : (
                <Progress
                  strokeColor={colors.primary}
                  percent={
                    ((place?.rateView ? place.rateView * 1.0 : 0) / 5) * 100
                  }
                  status="active"
                  showInfo={false}
                />
              )}
            </div>
            <span className="place-count">
              {place?.rateView ? place.rateView.toFixed(1) : 0}
            </span>
          </div>
          <div className="place-item">
            <span className="place-type">Đồ uống</span>
            <div className="place_progress">
              {api.getPlace.status === "pending" ? (
                <Progress
                  strokeColor={colors.primary}
                  percent={0}
                  status="active"
                  showInfo={false}
                />
              ) : (
                <Progress
                  strokeColor={colors.primary}
                  percent={
                    ((place?.rateDrink ? place.rateDrink * 1.0 : 0) / 5) * 100
                  }
                  status="active"
                  showInfo={false}
                />
              )}
            </div>
            <span className="place-count">
              {place?.rateDrink ? place.rateDrink.toFixed(1) : 0}
            </span>
          </div>
          <div className="place-item">
            <span className="place-type">Phục vụ</span>
            <div className="place_progress">
              {api.getPlace.status === "pending" ? (
                <Progress
                  strokeColor={colors.primary}
                  percent={0}
                  status="active"
                  showInfo={false}
                />
              ) : (
                <Progress
                  strokeColor={colors.primary}
                  percent={
                    ((place?.rateService ? place.rateService * 1.0 : 0) / 5) *
                    100
                  }
                  status="active"
                  showInfo={false}
                />
              )}
            </div>
            <span className="place-count">
              {place?.rateService ? place.rateService.toFixed(1) : 0}
            </span>
          </div>
          <div className="place-item">
            <span className="place-type">Giá cả</span>
            <div className="place_progress">
              {api.getPlace.status === "pending" ? (
                <Progress
                  strokeColor={colors.primary}
                  percent={0}
                  status="active"
                  showInfo={false}
                />
              ) : (
                <Progress
                  strokeColor={colors.primary}
                  percent={
                    ((place?.ratePrice ? place.ratePrice * 1.0 : 0) / 5) * 100
                  }
                  status="active"
                  showInfo={false}
                />
              )}
            </div>
            <span className="place-count">
              {place?.ratePrice ? place.ratePrice.toFixed(1) : 0}
            </span>
          </div>
        </div>
      </Spin>
    </Styled.Review>
  );
};

export default PlaceReview;
