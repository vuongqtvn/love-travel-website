import React, { useEffect, useMemo, useState } from "react";
import { Checkbox, Collapse, Radio, Slider } from "antd";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import * as Styled from "./styles";
import { getCategories, getPurposes, getRegions } from "../../searchSlice";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

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
  const [radio, setRadio] = useState<any>(1);
  const [price, setPrice] = useState<[number, number]>([0, 300000]);

  const checkboxSelect = useMemo(() => {
    const result = {
      purposesSelect: [],
      categoriesSelect: [],
      regionsSelect: [],
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
          });
        } else {
          delete search?.purposes;
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
          });
        } else {
          delete search?.categories;
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
          });
        } else {
          delete search?.regions;
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

  const onChangePrice = (value: any) => {
    setPrice(value);
  };

  const onAfterChange = (value: any) => {
    console.log("onAfterChange: ", value);
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
        <Collapse.Panel header="Giờ mở cửa" key="1">
          <div className="search__filter-list">
            <Radio.Group size="large" value={radio}>
              <div className="search__filter-item">
                <Radio value={1}>Tất cả</Radio>
              </div>
              <div className="search__filter-item">
                <Radio value={2}>Đang mở cửa</Radio>
              </div>
            </Radio.Group>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Khu vực" key="2">
          <div className="search__filter-list">
            <Checkbox.Group
              value={checkboxSelect.regionsSelect}
              onChange={(value) => onchangeCheckbox(value, "regions")}
            >
              {regions.map((region) => (
                <div className="search__filter-item" key={region._id}>
                  <Checkbox value={region._id}>{region.name}</Checkbox>
                </div>
              ))}
            </Checkbox.Group>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Mục đích" key="3">
          <div className="search__filter-list">
            <Checkbox.Group
              value={checkboxSelect.purposesSelect}
              onChange={(value) => onchangeCheckbox(value, "purposes")}
            >
              {purposes.map((purpose) => (
                <div className="search__filter-item" key={purpose._id}>
                  <Checkbox value={purpose._id}>{purpose.name}</Checkbox>
                </div>
              ))}
            </Checkbox.Group>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Kiểu quán" key="4">
          <div className="search__filter-list">
            <Checkbox.Group
              value={checkboxSelect.categoriesSelect}
              onChange={(value) => onchangeCheckbox(value, "categories")}
            >
              {categories.map((category) => (
                <div className="search__filter-item" key={category._id}>
                  <Checkbox value={category._id}>{category.name}</Checkbox>
                </div>
              ))}
            </Checkbox.Group>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Khoảng giá" key="5">
          <div className="search__filter-item">
            <span className="price-number">
              {price[0].toLocaleString()}~{price[1].toLocaleString()} VNĐ
            </span>

            <Slider
              min={0}
              max={300000}
              range
              step={10000}
              defaultValue={[0, 300000]}
              value={price}
              onChange={onChangePrice}
              onAfterChange={onAfterChange}
              tooltipVisible={false}
            />
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Tiện ích" key="6">
          <div className="search__filter-list">
            {tags.map((_, key) => (
              <div className="search__filter-item" key={key}>
                <Checkbox>Checkbox</Checkbox>
              </div>
            ))}
          </div>
        </Collapse.Panel>
      </Styled.FilterCollapse>
    </Styled.SearchFilter>
  );
};

export default FilterSearch;
