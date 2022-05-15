import React from "react";
import { Progress, Typography } from "antd";
import { Box } from "../../../../components";
import { colors } from "../../../../theme/colors";
import * as Styled from "./styles";

type Props = {};

const PlaceReview = (props: Props) => {
  return (
    <Styled.Review>
      <Box
        justifyContent="center"
        alignItems="center"
        gap="5px"
        className="place__review-score"
      >
        <strong>4.0</strong>
        <div>
          <Typography.Title level={4}>Chưa có đánh giá</Typography.Title>
          <span>{`/5 (0 đánh giá)`}</span>
        </div>
      </Box>
      <div className="place-votes">
        <div className="place-item">
          <span className="place-type">Vị trí</span>
          <div className="place_progress">
            <Progress
              strokeColor={colors.primary}
              percent={(4.5 / 5) * 100}
              status="active"
              showInfo={false}
            />
          </div>
          <span className="place-count">4.5</span>
        </div>
        <div className="place-item">
          <span className="place-type">Không gian</span>
          <div className="place_progress">
            <Progress
              strokeColor={colors.primary}
              percent={(4.1 / 5) * 100}
              status="active"
              showInfo={false}
            />
          </div>
          <span className="place-count">4.1</span>
        </div>
        <div className="place-item">
          <span className="place-type">Đồ uống</span>
          <div className="place_progress">
            <Progress
              strokeColor={colors.primary}
              percent={(3.5 / 5) * 100}
              status="active"
              showInfo={false}
            />
          </div>
          <span className="place-count">3.5</span>
        </div>
        <div className="place-item">
          <span className="place-type">Phục vụ</span>
          <div className="place_progress">
            <Progress
              strokeColor={colors.primary}
              percent={(5 / 5) * 100}
              status="active"
              showInfo={false}
            />
          </div>
          <span className="place-count">5.0</span>
        </div>
        <div className="place-item">
          <span className="place-type">Giá cả</span>
          <div className="place_progress">
            <Progress
              strokeColor={colors.primary}
              percent={(4.2 / 5) * 100}
              status="active"
              showInfo={false}
            />
          </div>
          <span className="place-count">4.2</span>
        </div>
      </div>
    </Styled.Review>
  );
};

export default PlaceReview;
