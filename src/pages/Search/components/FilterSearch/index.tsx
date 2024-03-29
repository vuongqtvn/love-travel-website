import { useEffect, useMemo } from "react";
import { Checkbox, Collapse, Radio, RadioChangeEvent, Skeleton } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  getBenefits,
  getCategories,
  getPurposes,
  getRegions,
  getTags,
} from "../../searchSlice";
import * as Styled from "./styles";

type Props = {
  search: any;
  setSearch: any;
};

type SearchPlaceType =
  | "regions"
  | "purposes"
  | "tags"
  | "categories"
  | "benefits";

const FilterSearch = ({ search, setSearch }: Props) => {
  const { api, categories, tags, benefits, purposes, regions } = useAppSelector(
    (state) => state.search
  );

  const dispatch = useAppDispatch();

  const checkboxSelect = useMemo(() => {
    const result = {
      purposesSelect: [],
      categoriesSelect: [],
      regionsSelect: [],
      tagsSelect: [],
      benefitsSelect: [],
    };
    if (search.purposes?.trim()) {
      result.purposesSelect = search.purposes.split("-");
    }
    if (search.categories?.trim()) {
      result.categoriesSelect = search.categories.split("-");
    }
    if (search.regions?.trim()) {
      result.regionsSelect = search.regions.split("-");
    }
    if (search.benefits?.trim()) {
      result.benefitsSelect = search.benefits.split("-");
    }
    if (search.tags?.trim()) {
      result.tagsSelect = search.tags.split("-");
    }
    return result;
  }, [search]);

  useEffect(() => {
    dispatch(getPurposes());
    dispatch(getRegions());
    dispatch(getCategories());
    dispatch(getBenefits());
    dispatch(getTags());
  }, [dispatch]);

  const onChangeRate = (e: RadioChangeEvent) => {
    if (e.target.value === undefined) {
      const newSearch = { ...search };
      delete newSearch?.sort;
      return setSearch(newSearch);
    } else {
      const newSearch = { ...search, sort: e.target.value };
      delete newSearch?.page;
      setSearch(newSearch);
    }
  };

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
      case "benefits": {
        if (value.length > 0) {
          const benefits = value.join("-");
          setSearch({
            ...search,
            benefits,
            page: 1,
          });
        } else {
          delete search?.benefits;
          delete search?.page;
          setSearch({
            ...search,
          });
        }
        break;
      }
      case "tags": {
        if (value.length > 0) {
          const tags = value.join("-");
          setSearch({
            ...search,
            page: 1,
            tags,
          });
        } else {
          delete search?.tags;
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
        <h2>Lọc kết quả</h2>
      </div>
      <Styled.FilterCollapse
        defaultActiveKey={["1", "2", "3", "4", "5", "6"]}
        expandIconPosition="right"
        ghost
      >
        <Collapse.Panel header="Đánh giá" key="1">
          <div className="search__filter-list">
            <Radio.Group
              onChange={onChangeRate}
              size="large"
              value={["-posts", "posts"].find((item) => item === search?.sort)}
            >
              <div className="search__filter-item">
                <Radio value={undefined}>Tất cả</Radio>
              </div>
              <div className="search__filter-item">
                <Radio value="-posts">Đánh giá cao đến thấp</Radio>
              </div>
              <div className="search__filter-item">
                <Radio value="posts">Đánh giá thấp đến cao</Radio>
              </div>
            </Radio.Group>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Khu vực" key="2">
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
        <Collapse.Panel header="Mục đích" key="3">
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
        <Collapse.Panel header="Kiểu quán" key="4">
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
        <Collapse.Panel header="Tiện ích" key="5">
          <div className="search__filter-list">
            {api.getBenefits.status === "pending" ? (
              <Skeleton active />
            ) : (
              <Checkbox.Group
                value={checkboxSelect.benefitsSelect}
                onChange={(value: any) => onchangeCheckbox(value, "benefits")}
              >
                {benefits.map((benefit) => (
                  <div className="search__filter-item" key={benefit._id}>
                    <Checkbox value={benefit._id}>{benefit.name}</Checkbox>
                  </div>
                ))}
              </Checkbox.Group>
            )}
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Kiểu địa điểm" key="6">
          <div className="search__filter-list">
            {api.getTags.status === "pending" ? (
              <Skeleton active />
            ) : (
              <Checkbox.Group
                value={checkboxSelect.tagsSelect}
                onChange={(value: any) => onchangeCheckbox(value, "tags")}
              >
                {tags.map((tag) => (
                  <div className="search__filter-item" key={tag._id}>
                    <Checkbox value={tag._id}>{tag.name}</Checkbox>
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
