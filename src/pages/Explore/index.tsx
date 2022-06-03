import React, { useEffect } from "react";
import { Card, Col, Row, Spin, Avatar, Space } from "antd";
import { Container, Section } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getDiscover } from "./exploreSlice";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";

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
      <Container>
        <Styled.ExploreWrapper>
          <Row gutter={10}>
            <Col span={14}>
              {loading.getDiscover ? (
                <div className="center">
                  <Spin />
                </div>
              ) : posts.length > 0 ? (
                posts.map((item: any) => {
                  return (
                    <div
                      style={{
                        marginBottom: 10,
                      }}
                    >
                      <Card
                        style={{
                          borderRadius: 8,
                        }}
                        actions={[
                          <Space align="center">
                            <HeartOutlined key="like" />
                            <span>0</span>
                          </Space>,
                          <Space align="center">
                            <CommentOutlined key="comment" />
                            <span>0</span>
                          </Space>,
                        ]}
                      >
                        <Card.Meta
                          avatar={<Avatar src={item.user.avatar} />}
                          title={item.user.name}
                          description={item.content}
                        />
                        <div className="list-image">
                          {item.images.map((it: any) => (
                            <div className="list-item">
                              <img src={it.url} alt="" />
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  );
                })
              ) : (
                <div>Không có bài viết nào!</div>
              )}
            </Col>
            <Col span={10}>
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
            </Col>
          </Row>
        </Styled.ExploreWrapper>
      </Container>
    </Section>
  );
};

export default Explore;
