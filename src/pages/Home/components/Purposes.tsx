import React, { useEffect } from "react";

import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getPurposes } from "../homeSlice";
import { SlideItemType } from "../../../types";
import { Empty, Slider, SliderSkeleton } from "../../../components";
import path from "../../../constants/path";

type Props = {};

const Purposes = (props: Props) => {
  const { api, purposes } = useAppSelector((state) => state.home);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPurposes());
  }, [dispatch]);

  const handleClickPurposes = (purpose: SlideItemType) => {
    navigate(`${path.prefixPurpose}=${purpose._id}`);
  };

  const renderContent = (purpose: SlideItemType) => {
    return (
      <Styled.RegionContent>
        <h3>{purpose.name}</h3>
        <span>{`${purpose.places?.length} địa điểm`}</span>
      </Styled.RegionContent>
    );
  };

  const renderPurposes = () => {
    if (api.getPurposes.status === "pending") {
      return (
        <SliderSkeleton
          height="220px"
          item={{
            xs: 1.5,
            sm: 2,
            md: 2.5,
            lg: 3,
          }}
          spacing={{
            xs: 10,
            sm: 10,
            md: 10,
            lg: 20,
          }}
        />
      );
    }

    if (purposes.length === 0) {
      return <Empty text="Không có mục đích nào!" />;
    }

    if (purposes.length > 0) {
      return (
        <Slider
          height="220px"
          item={{
            xs: 1.5,
            sm: 1.5,
            md: 2.5,
            lg: 3,
          }}
          spacing={{
            xs: 10,
            sm: 10,
            md: 10,
            lg: 20,
          }}
          data={purposes}
          onClick={handleClickPurposes}
          renderContent={renderContent}
        />
      );
    }
  };

  return (
    <Styled.HomeSection>
      <Styled.HomeContainer>
        <Styled.HomeTitle>Mục đích bạn cần ?</Styled.HomeTitle>
        {renderPurposes()}
      </Styled.HomeContainer>
    </Styled.HomeSection>
  );
};

export default Purposes;
