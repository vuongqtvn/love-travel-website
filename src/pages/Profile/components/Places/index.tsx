import { Pagination, PaginationProps } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { images } from "../../../../assets";
import { CardPlace, CardPlaceSkeleton } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getUserPlaces } from "../../profileSlice";

import * as Styled from "./styles";

const Places = ({ id }: { id: any }) => {
  const { places } = useAppSelector((state) => state.profile);
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getUserPlaces({ id, params: { page: 1, limit: 5 } }));
    }
  }, [id, dispatch]);

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(getUserPlaces({ id, params: { page, limit: 5 } }))
      .unwrap()
      .then(() => setPage(page));
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Styled.ProfileUserReview>
      <React.Fragment>
        {places.data.length === 0 ? (
          <Styled.ProfileEmpty>
            <img src={images.empty} alt="empty" />
            <span>Opps, chưa có địa điểm nào!</span>
          </Styled.ProfileEmpty>
        ) : (
          <React.Fragment>
            {places.loading
              ? [1, 2, 3, 4, 5].map((item) => <CardPlaceSkeleton key={item} />)
              : places.data.map((place: any, key: any) => (
                  <CardPlace edit place={place} key={key} />
                ))}
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Pagination
                current={page}
                pageSize={5}
                disabled={places.loading}
                onChange={onChange}
                total={places.total}
              />
              ;
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    </Styled.ProfileUserReview>
  );
};

export default Places;
