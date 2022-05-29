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
import {
  ClockCircleOutlined,
  DollarCircleOutlined,
  DownOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, MapModal, Place, PlaceSkeleton, Section } from "../../components";
import path from "../../constants/path";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import PlaceTop from "./components/PlaceTop";
import { getPlace, getPlaceRelated } from "./placeSlice";
import PlaceReview from "./components/PlaceReview";
import * as Styled from "./styles";
import { images } from "../../assets";

type Props = {};

const menu = (
  <Menu>
    <Menu.Item>08:00 - 21:00</Menu.Item>
    <Menu.Item>08:00 - 21:00</Menu.Item>
    <Menu.Item>08:00 - 21:00</Menu.Item>
    <Menu.Item>08:00 - 21:00</Menu.Item>
    <Menu.Item>08:00 - 21:00</Menu.Item>
  </Menu>
);

const PlaceDetail = (props: Props) => {
  const { id } = useParams();
  const { place, placesRelated, api } = useAppSelector((state) => state.place);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showMap, setShowMap] = useState<boolean>(false);

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
          <PlaceTop showMap={() => setShowMap(true)} />
          <Styled.PlaceDetail id="detail">
            <div className="review">
              <h2>Đánh giá</h2>
              <PlaceReview />
            </div>
            <div className="detail-info">
              <h2>Thông tin chi tiết</h2>
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
                <Space className="info-tags" wrap>
                  <TagsOutlined className="icon" />
                  <Space wrap>
                    {api.getPlace.status === "pending" ? (
                      <Skeleton.Input active size="small" block />
                    ) : (
                      place?.categories.map((category) => (
                        <Link
                          key={category?._id}
                          to={`/search?categories=${category?._id}`}
                        >
                          {category?.name}
                        </Link>
                      ))
                    )}
                  </Space>
                </Space>
              </Box>
            </div>
            <Styled.PlaceDetailAddress>
              <h2>Địa điểm cụ thể</h2>
              <Styled.PlaceMap>
                <div className="place-imageWrapper">
                  <img
                    onClick={() => setShowMap(true)}
                    src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-l+f74e4e(${place?.location.lng},${place?.location.lat})/${place?.location.lng},${place?.location.lat},13,0/400x210?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    alt={place?.name}
                  />
                </div>
                <div className="place-specific">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${place?.location?.lat},${place?.location?.lng}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {place?.address}
                  </a>
                </div>
              </Styled.PlaceMap>
            </Styled.PlaceDetailAddress>
          </Styled.PlaceDetail>
          <Styled.PlaceBenefit id="benefit">
            <h2>Lợi ích</h2>
          </Styled.PlaceBenefit>
          <Styled.PlaceReview id="review">
            <div className="review-container">
              <div className="review-container-top">
                <h2>
                  Đánh giá từ cộng đồng
                  <span>{` (${0})`}</span>
                </h2>
                <Button type="primary" shape="round">
                  Viết đánh giá
                </Button>
              </div>
              <div className="review-overview">
                <div className="review-overview-img">
                  <img src={images.review} alt="review" />
                </div>
                <div className="review-overview-slogan">
                  <h2>Bạn đã từng đến đây?</h2>
                  <span>
                    Chia sẻ trải nghiệm và cảm nhận của bản thân cho mọi người
                    cùng biết <i className="fas fa-heart"></i>
                  </span>
                  <span>
                    Những review chất lượng sẽ được xuất hiện ở bảng tin đấy!
                  </span>
                </div>
              </div>
              <div className="review-list">
                {true ? (
                  <div className="review-list-empty">
                    <p>{`
                     Chưa có đánh giá nào cho ${
                       api.getPlace.status === "pending"
                         ? "đang tải..."
                         : place?.name
                     }. Hãy là người đầu tiên làm chuyện ấy!
                   `}</p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="review-ads">
              <div className="review-ads-box">
                <PlaceReview />
              </div>
              <div className="review-ads-box">Quảng cáo</div>
            </div>
          </Styled.PlaceReview>
          <Styled.PlaceRelated id="related">
            <h2>Gợi ý ở gần</h2>

            <Row style={{ marginTop: 12 }} gutter={[10, 10]}>
              {api.getPlaceRelated.status === "pending"
                ? Array(4)
                    .fill(0)
                    .map((_, key) => (
                      <Col lg={6} md={8} sm={12} xs={24} key={key}>
                        <PlaceSkeleton />
                      </Col>
                    ))
                : placesRelated.map((place) => (
                    <Col lg={6} md={8} sm={12} xs={24} key={place._id}>
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

      {showMap && (
        <MapModal
          place={place}
          title={place?.name}
          onClose={() => setShowMap(false)}
        />
      )}
    </Section>
  );
};

export default PlaceDetail;
