import React, { useCallback, useMemo, useRef, useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
import { Button } from "antd";
import { getCenter } from "geolib";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hideMapModal } from "./mapModalSlice";
import { CloseOutlined, EnvironmentFilled } from "@ant-design/icons";
import * as Styled from "./styles";
import { MAP_TOKEN } from "../../constants/map";
import { PlaceType } from "../../types";
import { colors } from "../../theme/colors";
import { images } from "../../assets";

type Props = {
  data: PlaceType[];
  title: string;
};

const MapModal = ({ data, title }: Props) => {
  const { show } = useAppSelector((state) => state.mapModal);
  const dispatch = useAppDispatch();

  const mapRef = useRef<any>();

  const [popupInfo, setPopupInfo] = useState<PlaceType | null>(null);

  const center: any = useMemo(() => {
    const newData = data.map((place) => {
      return {
        latitude: place.location.lat,
        longitude: place.location.lng,
      };
    });
    return getCenter(newData);
  }, [data]);

  const onSelectCity = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 500 });
  }, []);

  const markers = useMemo(
    () =>
      data.map((place) => (
        <Marker
          color={colors.primary}
          key={place._id}
          longitude={place.location.lng}
          latitude={place.location.lat}
          anchor="bottom"
        >
          <EnvironmentFilled
            style={{
              fontSize: 24,
              color: colors.primary,
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setPopupInfo(place);
              onSelectCity({
                longitude: place.location.lng,
                latitude: place.location.lat,
              });
            }}
          />
        </Marker>
      )),
    [data]
  );

  if (!show) return null;
  return (
    <Styled.MapModalWrap>
      <Styled.MapModal>
        <div className="container">
          <div className="map-header">
            <div className="map-info">
              <h1>{title}</h1>
            </div>
            <div className="map-close">
              <Button
                onClick={() => dispatch(hideMapModal())}
                shape="circle"
                icon={<CloseOutlined />}
              />
            </div>
          </div>
          <div className="map-body">
            <Map
              ref={mapRef}
              initialViewState={{
                longitude: center.longitude,
                latitude: center.latitude,
                zoom: 14,
              }}
              style={{
                height: "100%",
                width: "100%",
              }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxAccessToken={MAP_TOKEN}
            >
              <GeolocateControl position="top-left" />
              <FullscreenControl position="top-right" />
              <NavigationControl position="top-left" />
              <ScaleControl />

              {markers}

              {popupInfo !== null && (
                <Popup
                  anchor="top"
                  longitude={popupInfo.location.lng}
                  latitude={popupInfo.location.lat}
                  closeOnClick={true}
                  onClose={() => setPopupInfo(null)}
                >
                  <div>{popupInfo.name}</div>
                  <div>{popupInfo.address}</div>
                </Popup>
              )}
            </Map>
          </div>
        </div>
      </Styled.MapModal>
    </Styled.MapModalWrap>
  );
};

export default MapModal;
