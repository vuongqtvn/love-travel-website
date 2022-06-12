import { Pagination, PaginationProps } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { images } from "../../../../assets";
import { FeedCard, FeedCardLoading } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getPostUser } from "../../profileSlice";
import * as Styled from "./styles";

const Posts = ({ id }: { id: any }) => {
  const { posts } = useAppSelector((state) => state.profile);
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPostUser({ id, params: { page: 1, limit: 5 } }));
    }
  }, [id, dispatch]);

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(getPostUser({ id, params: { page, limit: 5 } }))
      .unwrap()
      .then(() => setPage(page));
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Styled.ProfileUserReview>
      <React.Fragment>
        <React.Fragment>
          {posts.loading ? (
            [1, 2, 3, 4, 5].map((key) => <FeedCardLoading key={key} />)
          ) : posts.data.length === 0 ? (
            <Styled.ProfileEmpty>
              <img src={images.empty} alt="empty" />
              <span>Opps, chưa có bài đánh giá nào!</span>
            </Styled.ProfileEmpty>
          ) : (
            posts.data.map((feed: any, key: any) => (
              <FeedCard feed={feed} key={key} />
            ))
          )}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Pagination
              current={page}
              pageSize={5}
              disabled={posts.loading}
              onChange={onChange}
              total={posts.total}
            />
          </div>
        </React.Fragment>
      </React.Fragment>
    </Styled.ProfileUserReview>
  );
};

export default Posts;
