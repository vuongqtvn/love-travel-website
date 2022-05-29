/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MapModal, Section } from "../../components";
import useQuery from "../../hooks/useQuery";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import FilterSearch from "./components/FilterSearch";
import FilterSelectedTag from "./components/FilterSelectedTag";
import MapSearch from "./components/MapSearch";
import SearchAction from "./components/SearchAction";
import SearchResult from "./components/SearchResult";
import SortSearch from "./components/SortSearch";
import { getPlaceSearch } from "./searchSlice";
import * as Styled from "./styles";

type Props = {};

const Search = (props: Props) => {
  const { places } = useAppSelector((state) => state.search);
  const [firstLoad, setFirstLoad] = useState(true);
  const [showMap, setShowMap] = useState(false);
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

  const openMapModal = () => {
    setShowMap(true);
  };

  return (
    <Section>
      <Styled.SearchWrapper>
        <Styled.SearchContainer>
          <Styled.SearchLeft>
            <MapSearch openMapModal={openMapModal} />
            <FilterSearch search={search} setSearch={setSearch} />
          </Styled.SearchLeft>
          <Styled.SearchRight>
            <SortSearch search={search} setSearch={setSearch} />
            <FilterSelectedTag setSearch={setSearch} search={search} />
            <SearchResult
              loading={firstLoad}
              search={search}
              setSearch={setSearch}
            />
            <SearchAction openMapModal={openMapModal} />
          </Styled.SearchRight>
        </Styled.SearchContainer>
      </Styled.SearchWrapper>
      {showMap && (
        <MapModal
          data={places}
          title="Tìm kiếm địa điểm"
          onClose={() => setShowMap(false)}
        />
      )}
    </Section>
  );
};

export default Search;
