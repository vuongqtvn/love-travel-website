import React, { useEffect } from "react";

import { Empty, Slider, SliderSkeleton } from "../../../components";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import path from "../../../constants/path";
import { SlideItemType } from "../../../types";
import { getCategories } from "../homeSlice";
import * as Styled from "./styles";
import { Grid } from "antd";

type Props = {};

const Categories = (props: Props) => {
  const { api, categories } = useAppSelector((state) => state.home);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClickCategory = (category: SlideItemType) => {
    navigate(`${path.prefixCategory}=${category._id}`);
  };

  const renderContent = (category: SlideItemType) => {
    return (
      <Styled.RegionContent>
        <h3>{category.name}</h3>
        <span>{`${category.places?.length} địa điểm`}</span>
      </Styled.RegionContent>
    );
  };

  const renderCategories = () => {
    if (api.getCategories.status === "pending") {
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

    if (categories.length === 0) {
      return <Empty text="Không có loại hình nào!" />;
    }

    if (categories.length > 0) {
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
          data={categories}
          onClick={handleClickCategory}
          renderContent={renderContent}
        />
      );
    }
  };

  return (
    <Styled.HomeSection>
      <Styled.HomeContainer>
        <Styled.HomeTitle>Loại hình bạn cần ?</Styled.HomeTitle>
        {renderCategories()}
      </Styled.HomeContainer>
    </Styled.HomeSection>
  );
};

export default Categories;
