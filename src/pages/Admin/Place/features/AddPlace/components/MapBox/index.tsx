import React, { useCallback, useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import { colors } from "../../../../../../../theme/colors";

const MapBox = ({
  location,
}: {
  location?: {
    lng: number;
    lat: number;
  };
}) => {
  const mapRef = useRef<any>();
  const onSelectCity = useCallback(
    ({ longitude, latitude }: { longitude: number; latitude: number }) => {
      mapRef.current?.flyTo({ center: [longitude, latitude], duration: 500 });
    },
    []
  );

  useEffect(() => {
    if (location) {
      onSelectCity({
        longitude: location?.lng ? location?.lng : 108.21365565542143,
        latitude: location?.lat ? location?.lat : 16.077088582845033,
      });
    }
  }, [location, onSelectCity]);
  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: location?.lng ? location?.lng : 108.21365565542143,
        latitude: location?.lat ? location?.lat : 16.077088582845033,
        zoom: 14,
      }}
      style={{
        height: "100%",
        width: "100%",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {location && (
        <Marker
          color={colors.primary}
          longitude={location.lng}
          latitude={location.lat}
        ></Marker>
      )}
    </Map>
  );
};

export default MapBox;
