import { useEffect, useMemo } from "react";
import { Checkbox, Collapse, Skeleton } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getCategories, getPurposes, getRegions } from "../../savedSlice";
import * as Styled from "./styles";

type Props = {
  search: any;
  setSearch: any;
};

type SearchPlaceType = "regions" | "purposes" | "categories";

const FilterSearch = ({ search, setSearch }: Props) => {
  const { api, regions, categories, purposes } = useAppSelector(
    (state) => state.saved
  );

  const dispatch = useAppDispatch();

  const checkboxSelect = useMemo(() => {
    const result = {
      regionsSelect: [],
      categoriesSelect: [],
      purposesSelect: [],
    };
    if (search.regions?.trim()) {
      result.regionsSelect = search.regions.split("-");
    }
    if (search.purposes?.trim()) {
      result.purposesSelect = search.purposes.split("-");
    }
    if (search.categories?.trim()) {
      result.categoriesSelect = search.categories.split("-");
    }
    return result;
  }, [search]);

  useEffect(() => {
    dispatch(getPurposes());
    dispatch(getRegions());
    dispatch(getCategories());
  }, [dispatch]);

  const onchangeCheckbox = (
    value: CheckboxValueType[],
    key: SearchPlaceType
  ) => {
    switch (key) {
      case "purposes": {
        if (value.length > 0) {
          const purposes = value.join("-");
          setSearch({
            ...search,
            purposes,
            page: 1,
          });
        } else {
          delete search?.purposes;
          delete search?.page;
          setSearch({
            ...search,
          });
        }
        break;
      }
      case "categories": {
        if (value.length > 0) {
          const categories = value.join("-");
          setSearch({
            ...search,
            categories,
            page: 1,
          });
        } else {
          delete search?.categories;
          delete search?.page;
          setSearch({
            ...search,
          });
        }
        break;
      }
      case "regions": {
        if (value.length > 0) {
          const regions = value.join("-");
          setSearch({
            ...search,
            regions,
            page: 1,
          });
        } else {
          delete search?.regions;
          delete search?.page;
          setSearch({
            ...search,
          });
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <Styled.SearchFilter>
      <div className="filter-title">
        <h2>Bộ lọc địa điểm</h2>
        <p>Hiển thị kết quả theo ưu tiên của bạn</p>
      </div>
      <Styled.FilterCollapse
        defaultActiveKey={["1", "2", "3"]}
        expandIconPosition="right"
        ghost
      >
        <Collapse.Panel header="Khu vực" key="1">
          <div className="search__filter-list">
            {api.getRegions.status === "pending" ? (
              <Skeleton active />
            ) : (
              <Checkbox.Group
                value={checkboxSelect.regionsSelect}
                onChange={(value: any) => onchangeCheckbox(value, "regions")}
              >
                {regions.map((region) => (
                  <div className="search__filter-item" key={region._id}>
                    <Checkbox value={region._id}>{region.name}</Checkbox>
                  </div>
                ))}
              </Checkbox.Group>
            )}
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Mục đích" key="2">
          <div className="search__filter-list">
            {api.getPurposes.status === "pending" ? (
              <Skeleton active />
            ) : (
              <Checkbox.Group
                value={checkboxSelect.purposesSelect}
                onChange={(value: any) => onchangeCheckbox(value, "purposes")}
              >
                {purposes.map((purpose) => (
                  <div className="search__filter-item" key={purpose._id}>
                    <Checkbox value={purpose._id}>{purpose.name}</Checkbox>
                  </div>
                ))}
              </Checkbox.Group>
            )}
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Kiểu quán" key="3">
          <div className="search__filter-list">
            {api.getCategories.status === "pending" ? (
              <Skeleton active />
            ) : (
              <Checkbox.Group
                value={checkboxSelect.categoriesSelect}
                onChange={(value: any) => onchangeCheckbox(value, "categories")}
              >
                {categories.map((category) => (
                  <div className="search__filter-item" key={category._id}>
                    <Checkbox value={category._id}>{category.name}</Checkbox>
                  </div>
                ))}
              </Checkbox.Group>
            )}
          </div>
        </Collapse.Panel>
      </Styled.FilterCollapse>
    </Styled.SearchFilter>
  );
};

export default FilterSearch;
