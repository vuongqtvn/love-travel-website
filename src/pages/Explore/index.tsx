import React, { useEffect } from "react";
import { Card, Spin } from "antd";
import { Box, FeedCard, Section } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getDiscover } from "./exploreSlice";

import * as Styled from "./styles";

type Props = {};

const Explore = (props: Props) => {
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.explore);

  useEffect(() => {
    dispatch(getDiscover());
  }, [dispatch]);

  return (
    <Section>
      <Styled.ExploreWrapper>
        <Styled.ExploreHeader></Styled.ExploreHeader>
        <Styled.ExploreContainer>
          {loading.getDiscover ? (
            <Styled.ExploreFeed>
              <Box className="box" justifyContent="center">
                <Spin />
              </Box>
            </Styled.ExploreFeed>
          ) : posts.length === 0 ? (
            <Styled.ExploreFeed>
              <p>Không có bài viết nào!</p>
            </Styled.ExploreFeed>
          ) : (
            <Styled.ExploreFeed>
              {posts.map((feed, key) => (
                <FeedCard key={key} feed={feed} />
              ))}
            </Styled.ExploreFeed>
          )}

          <Styled.ExploreSidebar>
            <Card
              style={{
                borderRadius: 8,
              }}
              title="Địa điểm nổi bật"
            >
              <p>Đang tiến hành...</p>
            </Card>
            <div style={{ height: 15 }}></div>
            <Card
              style={{
                borderRadius: 8,
              }}
              title="Người dùng nổi bật"
            >
              <p>Đang tiến hành...</p>
            </Card>
            <div style={{ height: 15 }}></div>
            <Card
              style={{
                borderRadius: 8,
              }}
              title="Quảng cáo"
            >
              <p>Đang tiến hành...</p>
            </Card>
          </Styled.ExploreSidebar>
        </Styled.ExploreContainer>
      </Styled.ExploreWrapper>
    </Section>
  );
};

export default Explore;
