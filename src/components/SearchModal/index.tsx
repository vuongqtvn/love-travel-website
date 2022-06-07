import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { placeApi } from "../../api";
import { setPlaceReview } from "../../pages/Review/reviewSlice";
import { useAppDispatch } from "../../redux/hooks";
import { PlaceType } from "../../types";
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
  const [data, setData] = useState<PlaceType[] | []>([]);

  useEffect(() => {
    placeApi
      .getPlaces({
        limit: 5,
        page: 1,
      })
      .then((res: any) => setData(res.places))
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
          .then((res: any) => setData(res.places))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }
    }, 1000);

    if (!search) {
      setData([]);
      setLoading(false);
    }

    return () => {
      clearTimeout(timer);
      setData([]);
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
                  {data.length > 0 &&
                    data.map((item) => (
                      <div
                        className="search-item"
                        onClick={() => {
                          dispatch(setPlaceReview(item));
                          onClose();
                        }}
                        key={item._id}
                      >
                        <div className="search-image">
                          <img
                            src={item.thumbnail}
                            loading="lazy"
                            alt={item.name}
                          />
                        </div>
                        <div className="search-info">
                          <div className="info-name">{item.name}</div>
                          <div className="info-desc">{item.address}</div>
                        </div>
                      </div>
                    ))}
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
