import { Pagination, PaginationProps } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets";
import {
  FeedCard,
  FeedCardLoading,
  PlaceItemLoading,
  Section,
  PlaceItem,
  UserItemLoading,
  UserItem,
  ImageLazy,
  ReviewModal,
} from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getDiscover, getPlaceHot, getUserPositive } from "./exploreSlice";

import * as Styled from "./styles";

type Props = {};

const Explore = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { posts, loading, places, users, total } = useAppSelector(
    (state) => state.explore
  );

  const [page, setPage] = useState<number>(1);
  const [firstLoading, setFirstLoading] = useState<boolean>(false);
  const [updateReview, setUpdateReview] = React.useState<any>(null);

  useEffect(() => {
    setFirstLoading(true);
    dispatch(getDiscover({ limit: 5, page: 1 }))
      .unwrap()
      .then(() => setFirstLoading(false))
      .catch(() => setFirstLoading(false));
    dispatch(getPlaceHot());
    dispatch(getUserPositive());

    return () => {
      setPage(1);
      setFirstLoading(false);
    };
  }, [dispatch]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(getDiscover({ page, limit: 5 }))
      .unwrap()
      .then(() => setPage(page));
  };

  const openUpdate = (review: any) => {
    setUpdateReview(review);
  };

  return (
    <Section>
      <Styled.ExploreWrapper>
        <Styled.ExploreHeader></Styled.ExploreHeader>
        {Boolean(updateReview) && (
          <ReviewModal
            mode="update"
            review={updateReview}
            onClose={() => {
              setUpdateReview(null);
            }}
          />
        )}
        <Styled.ExploreContainer>
          {firstLoading ? (
            <Styled.ExploreFeed>
              {[1, 2, 3, 4, 5].map((key) => (
                <FeedCardLoading key={key} />
              ))}
            </Styled.ExploreFeed>
          ) : posts.length === 0 ? (
            <Styled.ExploreFeed>
              <p>Không có bài viết nào!</p>
            </Styled.ExploreFeed>
          ) : (
            <Styled.ExploreFeed>
              {loading.getDiscover ? (
                <React.Fragment>
                  {[1, 2, 3, 4, 5].map((key) => (
                    <FeedCardLoading key={key} />
                  ))}
                </React.Fragment>
              ) : (
                posts.map((feed: any, key: any) => (
                  <FeedCard openUpdate={openUpdate} key={key} feed={feed} />
                ))
              )}
              {total >= 5 && (
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 30,
                  }}
                >
                  <Pagination
                    current={page}
                    pageSize={5}
                    disabled={loading.getDiscover}
                    onChange={onChange}
                    total={total}
                  />
                </div>
              )}
            </Styled.ExploreFeed>
          )}

          <Styled.ExploreSidebar>
            <Styled.ExploreSidebarBox>
              <div>
                <h3>Địa điểm nổi bật</h3>
              </div>
              <div>
                {loading.getDiscover ? (
                  <React.Fragment>
                    {[1, 2, 3, 4, 5].map((key) => (
                      <PlaceItemLoading key={key} />
                    ))}
                  </React.Fragment>
                ) : places?.length === 0 ? (
                  <div style={{ padding: "15px 0" }}>
                    <p>Không có địa điểm nào!</p>
                  </div>
                ) : (
                  <React.Fragment>
                    {places?.map((place: any, key: any) => (
                      <PlaceItem
                        onClick={(place) => navigate(`/place/${place?._id}`)}
                        key={key}
                        place={place}
                      />
                    ))}
                  </React.Fragment>
                )}
              </div>
            </Styled.ExploreSidebarBox>
            <Styled.ExploreSidebarBox>
              <div>
                <h3>Người dùng tích cực</h3>
              </div>
              <div>
                {loading.getUserPositive ? (
                  <React.Fragment>
                    {[1, 2, 3, 4, 5].map((key) => (
                      <UserItemLoading key={key} />
                    ))}
                  </React.Fragment>
                ) : users?.length === 0 ? (
                  <div style={{ padding: "15px 0" }}>
                    <p>Không có người dùng nào!</p>
                  </div>
                ) : (
                  <React.Fragment>
                    {users?.map((user: any, key: any) => (
                      <UserItem key={key} user={user} />
                    ))}
                  </React.Fragment>
                )}
              </div>
            </Styled.ExploreSidebarBox>
            <Styled.ExploreSidebarBox>
              <div>
                <h3>Quảng Cáo</h3>
              </div>
              <div className="ads-image">
                <div className="ads">
                  <ImageLazy hover={false} src={images.ads} alt="ads" />
                </div>
              </div>
            </Styled.ExploreSidebarBox>
          </Styled.ExploreSidebar>
        </Styled.ExploreContainer>
      </Styled.ExploreWrapper>
    </Section>
  );
};

export default Explore;
