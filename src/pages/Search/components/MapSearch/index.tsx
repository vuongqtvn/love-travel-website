import * as Styled from "./styles";

type Props = {
  openMapModal: any;
};

const MapSearch = (props: Props) => {
  return (
    <Styled.SearchViewMap>
      <button className="view-map-btn" onClick={props.openMapModal}>
        Xem bản đồ
      </button>
    </Styled.SearchViewMap>
  );
};

export default MapSearch;
