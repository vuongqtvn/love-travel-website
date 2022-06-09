/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { images } from "../../assets";
import { Section } from "../../components";
import useQuery from "../../hooks/useQuery";
import { useAppDispatch } from "../../redux/hooks";
import FilterSearch from "./components/FilterSearch";
import SearchResult from "./components/SearchResult";
import { getPlaceSearch } from "./savedSlice";
import * as Styled from "./styles";

const Saved = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  const dispatch = useAppDispatch();
  const [search, setSearch] = useQuery();

  useEffect(() => {
    setFirstLoad(true);
    dispatch(getPlaceSearch(search))
      .unwrap()
      .finally(() => setFirstLoad(false));
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      dispatch(getPlaceSearch(search));
    }
  }, [dispatch, search]);

  return (
    <Section>
      <Styled.SaveContainer>
        <Styled.SaveHeader>
          <Styled.SaveHeaderContainer>
            <Styled.SaveHeaderContent>
              <h1>Danh sách đã lưu</h1>
              <span>
                <span>
                  <i className="bx bxs-sort-alt"></i> Lọc
                </span>
              </span>
              <p>
                Lập danh sách những quán cafe yêu thích để dễ dàng so sánh và
                theo dõi!
              </p>
              <p>Chúng tôi sẽ giúp bạn luôn theo dấu những địa điểm này.</p>
            </Styled.SaveHeaderContent>
            <Styled.SaveHeaderImage>
              <img src={images.bookmark} alt="yêu thích" />
            </Styled.SaveHeaderImage>
          </Styled.SaveHeaderContainer>
        </Styled.SaveHeader>
        <Styled.SaveBody>
          <Styled.SaveBodyLeft>
            <FilterSearch search={search} setSearch={setSearch} />
          </Styled.SaveBodyLeft>
          <Styled.SaveBodyRight>
            <SearchResult
              loading={firstLoad}
              search={search}
              setSearch={setSearch}
            />
          </Styled.SaveBodyRight>
        </Styled.SaveBody>
      </Styled.SaveContainer>
    </Section>
  );
};

export default Saved;
