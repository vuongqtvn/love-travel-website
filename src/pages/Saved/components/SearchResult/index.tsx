import React from "react";
import { Pagination, Spin } from "antd";
import { CardPlace, CardPlaceSkeleton, Empty } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";

import * as Styled from "./styles";

type Props = {
  loading: boolean;
  search: any;
  setSearch: any;
};

const SearchResult = ({ setSearch, search, loading }: Props) => {
  const { api, places, placesOptions } = useAppSelector((state) => state.saved);

  const onChangePage = (page: number) => {
    setSearch({
      ...search,
      page,
    });
  };

  const renderPlaces = () => {
    if (loading) {
      return Array(10)
        .fill(0)
        .map((_, key) => <CardPlaceSkeleton key={key} />);
    }
    if (places.length === 0) {
      return <Empty text="Không có địa điểm nào!" />;
    }
    return (
      <Spin
        tip="Đang tải địa điểm..."
        size="large"
        delay={500}
        spinning={api.getPlaceSearch.status === "pending"}
      >
        {places.map((place) => (
          <CardPlace place={place} key={place._id} />
        ))}
      </Spin>
    );
  };
  return (
    <Styled.SearchResultWrapper>
      <div>{renderPlaces()}</div>

      {places.length > 0 && (
        <Styled.SearchPagination>
          <Pagination
            style={{ textAlign: "center" }}
            current={placesOptions.page}
            onChange={onChangePage}
            pageSize={placesOptions.limit}
            total={placesOptions.total}
          />
        </Styled.SearchPagination>
      )}
    </Styled.SearchResultWrapper>
  );
};

export default SearchResult;
