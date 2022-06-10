import React from "react";
import { Select } from "antd";

import * as Styled from "./styles";
import { useAppSelector } from "../../../../redux/hooks";

type Props = {
  setSearch: any;
  search: any;
};

const SortSearch = ({ search, setSearch }: Props) => {
  const {
    placesOptions: { total },
  } = useAppSelector((state) => state.search);
  const handleChange = (value: any) => {
    const newSearch = { ...search, sort: value };
    delete newSearch?.page;
    setSearch(newSearch);
  };
  return (
    <Styled.SortSearchWrapper>
      <span className="search-title">
        <strong>{total}</strong>
        {` địa điểm khớp với tìm kiếm của bạn`}
        {Object.keys(search).length > 0 && (
          <small onClick={() => setSearch({})}>Xóa tất cả bộ lọc</small>
        )}
      </span>
      <div className="search-sort">
        <span>Sắp xếp: </span>
        <Select
          style={{ width: 150 }}
          value={["-price.to", "price.to", "-createdAt", "createdAt"].find(
            (item) => item === search?.sort
          )}
          onChange={handleChange}
          placeholder="Chọn sắp xếp"
        >
          <Select.Option value="-price.to">Giá cao đến thấp</Select.Option>
          <Select.Option value="price.to">Giá thấp đến cao</Select.Option>
          <Select.Option value="-createdAt">Mới nhất</Select.Option>
          <Select.Option value="createdAt">Cũ nhất</Select.Option>
        </Select>
      </div>
    </Styled.SortSearchWrapper>
  );
};

export default SortSearch;
