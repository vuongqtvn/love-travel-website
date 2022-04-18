import React, { useEffect } from "react";
import { Card, Grid, Skeleton, Typography } from "antd";
import SkeletonCard from "react-loading-skeleton";
import { Empty, ImageLazy } from "../../../components";
import * as Styled from "./styles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { getPlaceHot } from "../homeSlice";
import path from "../../../constants/path";
import { PlaceType } from "../../../types";

type Props = {};

const Place = (props: Props) => {
  const { api, places } = useAppSelector((state) => state.home);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    dispatch(getPlaceHot());
  }, [dispatch]);

  const handleClickPlace = (place: PlaceType) => {
    navigate(`${path.place}/${place._id}`);
  };
  const renderPlaces = () => {
    if (api.getPlaceHot.status === "pending") {
      return (
        <Styled.PlaceList>
          {Array(8)
            .fill(0)
            .map((_, key) => {
              return (
                <SkeletonCard
                  key={key}
                  height={screens.lg ? "240px" : "220px"}
                />
              );
            })}
        </Styled.PlaceList>
      );
    }

    if (places.length === 0) {
      return <Empty text="Không có địa điểm nào!" />;
    }

    return (
      <Styled.PlaceList>
        {places.map((place, key) => (
          <Card
            onClick={() => handleClickPlace(place)}
            key={key}
            size="small"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderRadius: 15,
              overflow: "hidden",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            }}
            bodyStyle={{
              flex: 1,
            }}
            cover={
              <ImageLazy
                src={place.thumbnail}
                alt={place.name}
                height={screens.lg ? "240px" : "220px"}
                radius="0"
              />
            }
          >
            <Skeleton loading={false} paragraph={{ rows: 1 }} active>
              <Card.Meta
                title={
                  <Typography.Text
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                    ellipsis
                  >
                    {place.name}
                  </Typography.Text>
                }
                description={
                  <Typography.Text ellipsis>{place.address}</Typography.Text>
                }
              />
            </Skeleton>
          </Card>
        ))}
      </Styled.PlaceList>
    );
  };
  return (
    <Styled.HomeSection>
      <Styled.HomeContainer>
        <Styled.HomeTitle>Địa điểm nổi bật</Styled.HomeTitle>
        {renderPlaces()}
      </Styled.HomeContainer>
    </Styled.HomeSection>
  );
};

export default Place;
