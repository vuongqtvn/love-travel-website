/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { placeApi } from "../../api";
import { setPlaceReview } from "../../pages/Review/reviewSlice";
import { useAppDispatch } from "../../redux/hooks";
import { PlaceType } from "../../types";
import PlaceItem from "../PlaceItem";
import PlaceItemLoading from "../PlaceItemLoading";
import * as Styled from "./styles";

const SearchModal = ({
  title = "Chọn địa điểm đánh giá",
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<PlaceType[] | []>([]);

  useEffect(() => {
    placeApi
      .getPlaces({
        limit: 5,
        page: 1,
      })
      .then((res: any) => setSearchData(res.places))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        setLoading(true);
        placeApi
          .getPlaces({
            q: search,
            limit: 5,
            page: 1,
          })
          .then((res: any) => setSearchData(res.places))
          .finally(() => setLoading(false));
      }
    }, 1000);

    if (!search) {
      setSearchData([]);
      setLoading(false);
    }

    return () => {
      clearTimeout(timer);
      setSearchData([]);
      setLoading(false);
    };
  }, [search]);
  return (
    <Styled.SearchModalOverlay>
      <Styled.SearchModalWrapper>
        <Styled.SearchModal>
          <Styled.ModalHeader>
            <div className="modal-title">
              <h2>{title}</h2>
            </div>
            <div className="modal-close" onClick={onClose}>
              <i className="bx bx-x"></i>
            </div>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <div className="search">
              <div className="search-header">
                <div className="search-box">
                  <div className="search-input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Tìm kiếm địa điểm"
                    />
                  </div>
                  {loading ? (
                    <div className="spin">
                      <Spin size="small" />
                    </div>
                  ) : (
                    search && (
                      <button onClick={() => setSearch("")}>
                        <i className="bx bx-x"></i>
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="search-content">
                <div>
                  {loading ? (
                    [1, 2, 3, 4, 5].map((key) => <PlaceItemLoading key={key} />)
                  ) : searchData.length === 0 ? (
                    <div style={{ padding: 15, textAlign: "center" }}>
                      <p>Không tìm thấy địa điểm nào!</p>
                    </div>
                  ) : (
                    searchData.map((item) => (
                      <PlaceItem
                        place={item}
                        key={item._id}
                        onClick={(place) => {
                          dispatch(setPlaceReview(place));
                          onClose();
                        }}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </Styled.ModalBody>
        </Styled.SearchModal>
      </Styled.SearchModalWrapper>
    </Styled.SearchModalOverlay>
  );
};

export default SearchModal;
