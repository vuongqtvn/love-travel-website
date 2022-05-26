import React, { useRef } from "react";
import Map from "react-map-gl";

const MapBox = () => {
  const mapRef = useRef<any>();
  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: 108.21365565542143,
        latitude: 16.077088582845033,
        zoom: 14,
      }}
      style={{
        height: "100%",
        width: "100%",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {/* <Marker
        color={colors.primary}
        key={place?._id}
        longitude={place?.location?.lng}
        latitude={place?.location?.lat}
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
              longitude: place?.location?.lng,
              latitude: place?.location?.lat,
            });
          }}
        />
      </Marker> */}
    </Map>
  );
};

export default MapBox;
