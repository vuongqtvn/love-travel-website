import { CloseOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import { getCenter } from "geolib";
import { useCallback, useMemo, useRef, useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
import { colors } from "../../theme/colors";
import { PlaceType } from "../../types";
import * as Styled from "./styles";

type Props = {
  data?: PlaceType[];
  place?: PlaceType | undefined;
  title?: string;
  onClose: any;
};

const MapModal = ({
  data,
  place,
  title = "Tìm kiếm địa điểm",
  onClose,
}: Props) => {
  const mapRef = useRef<any>();

  const [popupInfo, setPopupInfo] = useState<PlaceType | null>(null);

  const center: any = useMemo(() => {
    if (data) {
      const newData = data.map((place) => {
        return {
          latitude: place?.location?.lat,
          longitude: place?.location?.lng,
        };
      });
      return getCenter(newData);
    }
    if (place) {
      return getCenter([
        {
          latitude: place?.location?.lat,
          longitude: place?.location?.lng,
        },
      ]);
    }
  }, [data, place]);

  const onSelectCity = useCallback(
    ({ longitude, latitude }: { longitude: number; latitude: number }) => {
      mapRef.current?.flyTo({ center: [longitude, latitude], duration: 500 });
    },
    []
  );

  const markers = useMemo(() => {
    if (data) {
      return data.map((place) => (
        <Marker
          color={colors.primary}
          key={place?._id}
          longitude={place?.location?.lng}
          latitude={place?.location?.lat}
          anchor="top"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
            onSelectCity({
              longitude: place?.location?.lng,
              latitude: place?.location?.lat,
            });
          }}
        ></Marker>
      ));
    }
    if (place) {
      return (
        <Marker
          color={colors.primary}
          key={place?._id}
          longitude={place?.location?.lng}
          latitude={place?.location?.lat}
          anchor="top"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
            onSelectCity({
              longitude: place?.location?.lng,
              latitude: place?.location?.lat,
            });
          }}
        ></Marker>
      );
    }
  }, [data, place, onSelectCity]);

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
                onClick={onClose}
                shape="circle"
                icon={<CloseOutlined />}
              />
            </div>
          </div>
          <Styled.MapContent>
            <div className="map-list">
              <div className="map-desc">
                {data
                  ? `Đang hiển thị ${data.length} kết quả:`
                  : `Đang hiển thị 1 kết quả:`}
              </div>
              {place && (
                <>
                  <Styled.PlaceItem
                    className="hide"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      setPopupInfo(place);
                      onSelectCity({
                        longitude: place?.location?.lng,
                        latitude: place?.location?.lat,
                      });
                    }}
                  >
                    <div className="place-info">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`/place/${place._id}`}
                      >
                        <h4>{place.name}</h4>
                      </a>
                      <div className="place-rate">
                        <Rate
                          style={{
                            fontSize: 14,
                            color: colors.primary,
                          }}
                          disabled
                          defaultValue={2}
                        />
                        chưa có đánh giá
                      </div>
                      <div className="place-address">{place.address}</div>
                    </div>
                    <div className="place-image">
                      <img
                        src={place.thumbnail}
                        alt={place.name}
                        loading="lazy"
                      />
                    </div>
                  </Styled.PlaceItem>
                  <div
                    style={{ padding: 15, textAlign: "center" }}
                    className="hide"
                  >
                    <Button
                      type="primary"
                      shape="round"
                      onClick={() => {
                        window.open(
                          `https://www.google.com/maps/dir/?api=1&destination=${place?.location?.lat},${place?.location?.lng}`,
                          "_blank"
                        );
                      }}
                    >
                      Xem chỉ đường
                    </Button>
                  </div>
                </>
              )}
              {data &&
                data.map((item) => (
                  <Styled.PlaceItem
                    onClick={(e: any) => {
                      e.stopPropagation();
                      setPopupInfo(item);
                      onSelectCity({
                        longitude: item?.location?.lng,
                        latitude: item?.location?.lat,
                      });
                    }}
                  >
                    <div className="place-info">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`/place/${item._id}`}
                      >
                        <h4>{item.name}</h4>
                      </a>
                      <div className="place-rate">
                        <Rate
                          style={{
                            fontSize: 14,
                            color: colors.primary,
                          }}
                          disabled
                          defaultValue={2}
                        />
                        chưa có đánh giá
                      </div>
                      <div className="place-address">{item.address}</div>
                    </div>
                    <div className="place-image">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                  </Styled.PlaceItem>
                ))}
            </div>
            <div className="map-view">
              <Map
                ref={mapRef}
                initialViewState={{
                  longitude: center?.longitude || 108.21365565542143,
                  latitude: center?.latitude || 16.077088582845033,
                  zoom: 14,
                }}
                style={{
                  height: "100%",
                  width: "100%",
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              >
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-right" />
                <NavigationControl position="top-left" />
                <ScaleControl />

                {markers}

                {popupInfo !== null && (
                  <Popup
                    // anchor="bottom"
                    longitude={popupInfo?.location?.lng}
                    latitude={popupInfo?.location?.lat}
                    closeOnClick={true}
                    onClose={() => setPopupInfo(null)}
                  >
                    <Styled.MapPopup>
                      {popupInfo?.thumbnail && (
                        <div className="map-avatar">
                          <img src={popupInfo.thumbnail} alt="" />
                        </div>
                      )}
                      <div className="map-info">
                        <h3>{popupInfo?.name}</h3>
                        <div className="address">
                          <span>{popupInfo.address}</span>
                        </div>
                        <div className="rate">
                          <span className="avg-rate">4.6</span>
                          <Rate
                            style={{
                              fontSize: 12,
                              color: colors.primary,
                            }}
                            disabled
                            defaultValue={4.6}
                          />
                          <span className="rate-total">{`(4)`}</span>
                        </div>
                      </div>
                    </Styled.MapPopup>
                  </Popup>
                )}
              </Map>
            </div>
          </Styled.MapContent>
        </div>
      </Styled.MapModal>
    </Styled.MapModalWrap>
  );
};

export default MapModal;
