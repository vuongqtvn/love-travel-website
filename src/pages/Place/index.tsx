import {
  ClockCircleOutlined,
  DollarCircleOutlined,
  DownOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import {
  Anchor,
  Button,
  Col,
  Dropdown,
  Menu,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Place, PlaceSkeleton, Section } from "../../components";
import path from "../../constants/path";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import PlaceTop from "./components/PlaceTop";
import { getPlace, getPlaceRelated } from "./placeSlice";
import * as Styled from "./styles";

type Props = {};

const menu = (
  <Menu>
    <Menu.Item>Hello</Menu.Item>
    <Menu.Item>Hello</Menu.Item>
    <Menu.Item>Hello</Menu.Item>
    <Menu.Item>Hello</Menu.Item>
    <Menu.Item>Hello</Menu.Item>
  </Menu>
);

const PlaceDetail = (props: Props) => {
  const { id } = useParams();
  const { place, placesRelated, api } = useAppSelector((state) => state.place);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getPlace(id));
      dispatch(getPlaceRelated());
    }
  }, [id, dispatch]);
  return (
    <Section>
      <Styled.PlaceWrapper>
        <Styled.PlaceContainer>
          <Styled.PlaceStickyBar className="hidden">
            <div className="place-sticky-body">
              <div className="place-sticky-menu">
                <Anchor className="place-anchor">
                  <Anchor.Link href="#gallery" title="Hình ảnh" />
                  <Anchor.Link href="#detail" title="Tổng quan" />
                  <Anchor.Link href="#benefit" title="Tiện ích" />
                  <Anchor.Link href="#review" title="Đánh giá" />
                  <Anchor.Link href="#related" title="Lân cận" />
                </Anchor>
              </div>
            </div>
          </Styled.PlaceStickyBar>
          <PlaceTop />
          <Styled.PlaceDetail id="detail">
            <div className="review">
              <Typography.Title level={3}>Đánh giá</Typography.Title>
              <Box
                justifyContent="center"
                alignItems="center"
                gap="5px"
                className="place__review-score"
              >
                <strong>0</strong>
                <div>
                  <Typography.Title level={4}>
                    Chưa có đánh giá
                  </Typography.Title>
                  <span>{`/5 (0 đánh giá)`}</span>
                </div>
              </Box>
            </div>
            <div className="detail-info">
              <Typography.Title level={3}>Thông tin chi tiết</Typography.Title>

              <Box
                style={{ marginTop: 12 }}
                flexDirection="column"
                gap="5px"
                alignItems="flex-start"
              >
                <Space align="center">
                  <DollarCircleOutlined className="icon" />
                  <Typography.Text>{`39.000đ - 129.000đ`}</Typography.Text>
                </Space>
                <Space align="center">
                  <ClockCircleOutlined className="icon" />
                  <Space>
                    <Typography.Text className="status time-close">
                      Đang đóng cửa
                    </Typography.Text>

                    <Dropdown overlay={menu} trigger={["click", "hover"]}>
                      <Typography.Text strong className="ant-dropdown-link">
                        {" - "} 08:00 - 21:00 <DownOutlined />
                      </Typography.Text>
                    </Dropdown>
                  </Space>
                </Space>
                <Space align="center">
                  <PhoneOutlined className="icon" />
                  <a href="tel:09494432443">
                    <Typography.Text strong>09494432443</Typography.Text>
                  </a>
                </Space>
                <Space align="center">
                  <FacebookOutlined className="icon" />
                  <a
                    href="https://www.facebook.com/JouriDessert"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {api.getPlace.status === "pending" ? (
                      <Skeleton.Input active size="small" block />
                    ) : (
                      place?.name
                    )}
                  </a>
                </Space>
                <Space align="center">
                  <InstagramOutlined className="icon" />
                  <a
                    href="https://www.facebook.com/JouriDessert"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {api.getPlace.status === "pending" ? (
                      <Skeleton.Input active size="small" block />
                    ) : (
                      place?.name
                    )}
                  </a>
                </Space>
                <Space className="info-tags">
                  <TagsOutlined className="icon" />
                  <Space>
                    <Link to="/search?q=&tags=cafe-view-dep">
                      Cafe View Đẹp
                    </Link>
                    <Link to="/search?q=&tags=cafe-view-dep">
                      Cafe Ngoài trời
                    </Link>
                  </Space>
                </Space>
              </Box>
            </div>
            <Box
              alignItems="center"
              justifyContent="center"
              className="detail-address"
            >
              <Button type="primary" shape="round">
                Xem chỉ đường
              </Button>
            </Box>
          </Styled.PlaceDetail>
          <Styled.PlaceBenefit id="benefit">
            <Typography.Title level={3}>Lợi ích</Typography.Title>
          </Styled.PlaceBenefit>
          <Styled.PlaceReview id="review"></Styled.PlaceReview>
          <Styled.PlaceRelated id="related">
            <Typography.Title level={3}>Gợi ý ở gần</Typography.Title>

            <Row style={{ marginTop: 12 }} gutter={[10, 10]}>
              {api.getPlaceRelated.status === "pending"
                ? Array(4)
                    .fill(0)
                    .map((_, key) => (
                      <Col span={6}>
                        <PlaceSkeleton />
                      </Col>
                    ))
                : placesRelated.map((place) => (
                    <Col span={6} key={place._id}>
                      <Place
                        place={place}
                        onClick={(place) => {
                          navigate(`${path.place}/${place._id}`);
                        }}
                      />
                    </Col>
                  ))}
            </Row>
          </Styled.PlaceRelated>
        </Styled.PlaceContainer>
      </Styled.PlaceWrapper>
    </Section>
  );
};

export default PlaceDetail;
