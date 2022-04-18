import { Grid } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Empty, Slider, SliderSkeleton } from "../../../components";
import path from "../../../constants/path";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { SlideItemType } from "../../../types";
import { getRegions } from "../homeSlice";

import * as Styled from "./styles";

type Props = {};

const Regions = (props: Props) => {
  const { api, regions } = useAppSelector((state) => state.home);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  const handleClickRegion = (region: SlideItemType) => {
    navigate(`${path.prefixRegion}=${region._id}`);
  };

  const renderContent = (region: SlideItemType) => {
    return (
      <Styled.RegionContent>
        <h3>{region.name}</h3>
        <span>{`${region.places?.length} địa điểm`}</span>
      </Styled.RegionContent>
    );
  };

  const renderRegions = () => {
    if (api.getRegions.status === "pending") {
      return (
        <SliderSkeleton
          height={screens.lg ? "330px" : "300px"}
          item={{
            xs: 1.5,
            sm: 2,
            md: 2.5,
            lg: 4,
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

    if (regions.length === 0) {
      return <Empty text="Không có khu vực nào!" />;
    }

    if (regions.length > 0) {
      return (
        <Slider
          height={screens.lg ? "330px" : "300px"}
          item={{
            xs: 1.5,
            sm: 1.5,
            md: 2.5,
            lg: 4,
          }}
          spacing={{
            xs: 10,
            sm: 10,
            md: 10,
            lg: 20,
          }}
          data={regions}
          onClick={handleClickRegion}
          renderContent={renderContent}
        />
      );
    }
  };

  return (
    <Styled.HomeSection>
      <Styled.HomeContainer>
        <Styled.HomeTitle>Khu vực bạn cần ?</Styled.HomeTitle>
        {renderRegions()}
      </Styled.HomeContainer>
    </Styled.HomeSection>
  );
};

export default Regions;
