import React, { useEffect } from "react";
import { Card, Col, Row, Spin, Avatar } from "antd";
import { Container, Section } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getDiscover } from "./exploreSlice";

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
        <Row>
          <Col span={14}>
            {loading.getDiscover ? (
              <Spin />
            ) : posts.length > 0 ? (
              posts.map((item: any) => {
                return (
                  <div style={{ margin: "10px 0" }}>
                    <Card>
                      <Card.Meta
                        avatar={<Avatar src={item.user.avatar} />}
                        title={item.user.name}
                        description={item.content}
                      />
                      <div
                        style={{
                          marginTop: 20,
                          position: "relative",
                          paddingTop: "100%",
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="example"
                          src={item.images[0].url}
                        />
                      </div>
                    </Card>
                  </div>
                );
              })
            ) : (
              <div>Không có bài viết nào!</div>
            )}
          </Col>
          <Col span={10}></Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Explore;
