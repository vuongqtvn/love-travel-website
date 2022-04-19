import React, { useMemo } from "react";
import { Space } from "antd";
import * as Styled from "./styles";
import { useAppSelector } from "../../../../redux/hooks";
import { SearchArrayType } from "../../../../types";

type Props = {
  search: any;
  setSearch: any;
};

const FilterSelectedTag = ({ search, setSearch }: Props) => {
  const { categories, tags, benefits, purposes, regions } = useAppSelector(
    (state) => state.search
  );

  const arrayTag: SearchArrayType = [
    ...categories,
    ...tags,
    ...benefits,
    ...purposes,
    ...regions,
  ];
  const searchTag = useMemo(() => {
    let ids: string[] | [] = [];
    for (const key in search) {
      if (search[key]?.trim()) {
        ids = [...ids, ...search[key].split("-")];
      }
    }
    return ids;
  }, [search]);

  const combineArray = (array1: SearchArrayType, array2: string[]) => {
    return array1.filter((itemArray1) => {
      return array2.indexOf(itemArray1._id) !== -1;
    });
  };

  const removeTag = (id: string) => {
    const obj: any = {};
    for (const key in search) {
      if (search[key]?.trim()) {
        const temp = search[key]
          .split("-")
          .filter((item: string) => item !== id)
          .join("-");
        if (temp) {
          obj[key] = temp;
        }
      }
    }
    setSearch(obj);
  };

  if (searchTag.length === 0) {
    return null;
  } else {
    return (
      <Styled.FilterSelect>
        <Space size={[0, 4]} wrap>
          {combineArray(arrayTag, searchTag).map((tagItem) => (
            <Styled.TagFilter
              closable
              onClose={() => removeTag(tagItem._id)}
              key={tagItem._id}
            >
              {tagItem.name}
            </Styled.TagFilter>
          ))}
        </Space>
      </Styled.FilterSelect>
    );
  }
};

export default FilterSelectedTag;
