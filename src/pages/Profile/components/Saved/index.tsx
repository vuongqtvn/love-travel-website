import { Pagination, PaginationProps } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { images } from "../../../../assets";
import { CardPlace, CardPlaceSkeleton } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getUserSavedPlaces } from "../../profileSlice";
import * as Styled from "./styles";

const Saved = ({ id }: { id: any }) => {
  const { saved } = useAppSelector((state) => state.profile);
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getUserSavedPlaces({ id, params: { page: 1, limit: 5 } }));
    }
  }, [id, dispatch]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(getUserSavedPlaces({ id, params: { page, limit: 5 } }))
      .unwrap()
      .then(() => setPage(page));
  };

  return (
    <Styled.ProfileUserReview>
      <React.Fragment>
        {saved.data.length === 0 ? (
          <Styled.ProfileEmpty>
            <img src={images.empty} alt="empty" />
            <span>Opps, chưa có lưu địa điểm nào!</span>
          </Styled.ProfileEmpty>
        ) : (
          <React.Fragment>
            {saved.loading
              ? [1, 2, 3, 4, 5].map((item) => <CardPlaceSkeleton key={item} />)
              : saved.data.map((place: any, key: any) => (
                  <CardPlace place={place} key={key} />
                ))}
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Pagination
                current={page}
                pageSize={5}
                disabled={saved.loading}
                onChange={onChange}
                total={saved.total}
              />
              ;
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    </Styled.ProfileUserReview>
  );
};

export default Saved;
