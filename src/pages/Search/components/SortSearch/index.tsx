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
    console.log(`selected ${value}`);
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
        <span>Sắp xếp theo</span>
        <Select
          defaultValue="Đánh giá cao"
          style={{ width: 150 }}
          onChange={handleChange}
        >
          <Select.Option value="rate[gte]">Đánh giá cao</Select.Option>
          <Select.Option value="rate[lte]">Đánh giá thấp</Select.Option>
        </Select>
      </div>
    </Styled.SortSearchWrapper>
  );
};

export default SortSearch;
