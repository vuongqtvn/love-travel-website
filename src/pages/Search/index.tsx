/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MapGL, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { Section } from "../../components";
import FilterSearch from "./components/FilterSearch";
import FilterSelectedTag from "./components/FilterSelectedTag";
import MapSearch from "./components/MapSearch";
import SearchAction from "./components/SearchAction";
import SearchResult from "./components/SearchResult";
import SortSearch from "./components/SortSearch";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useQuery from "../../hooks/useQuery";
import { getPlaceSearch } from "./searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as Styled from "./styles";

const TOKEN =
  "pk.eyJ1IjoiZHVvbmd2dW9uZyIsImEiOiJjbDEwNmdocmoyMXJ1M2Jsemo4dGNmZHZtIn0.vUbeGtlCol6CmBoCBVPSyA";

type Props = {};

const Search = (props: Props) => {
  const [showMap, setShowMap] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const openMapModal = () => {
    setShowMap(true);
  };
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
      <Styled.SearchWrapper>
        <Styled.SearchContainer>
          <Styled.SearchLeft>
            <MapSearch openMapModal={openMapModal} />
            <FilterSearch search={search} setSearch={setSearch} />
          </Styled.SearchLeft>
          <Styled.SearchRight>
            <SortSearch search={search} setSearch={setSearch} />
            <FilterSelectedTag search={search} />
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
        <Styled.MapModalWrap>
          <Styled.MapModal>
            <div className="container">
              <div className="map-header">
                <div className="map-info">
                  <h1>Tìm kiếm địa điểm</h1>
                </div>
                <div className="map-close">
                  <Button
                    onClick={() => setShowMap(false)}
                    shape="circle"
                    icon={<CloseOutlined />}
                  />
                </div>
              </div>
              <div className="map-body">
                <MapGL
                  initialViewState={{
                    latitude: 40,
                    longitude: -100,
                    zoom: 3.5,
                    bearing: 0,
                    pitch: 0,
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken={TOKEN}
                >
                  <GeolocateControl position="top-left" />
                  <FullscreenControl position="top-right" />
                  <NavigationControl position="top-left" />
                  <ScaleControl />
                </MapGL>
              </div>
            </div>
          </Styled.MapModal>
        </Styled.MapModalWrap>
      )}
    </Section>
  );
};

export default Search;
