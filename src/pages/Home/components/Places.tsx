import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Empty, Place, PlaceSkeleton } from "../../../components";
import path from "../../../constants/path";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { PlaceType } from "../../../types";
import { getPlaceHot } from "../homeSlice";
import * as Styled from "./styles";

type Props = {};

const Places = (props: Props) => {
  const { api, places } = useAppSelector((state) => state.home);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
              return <PlaceSkeleton key={key} />;
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
          <Place
            place={place}
            key={key}
            onClick={() => handleClickPlace(place)}
          />
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

export default Places;
