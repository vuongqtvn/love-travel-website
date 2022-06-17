import {
  Anchor,
  Button,
  Col,
  Row,
  Skeleton,
  Space,
  Spin,
  Tag,
  Typography,
} from "antd";
import {
  ClockCircleOutlined,
  DollarCircleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  TagsOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  ImageLazy,
  MapModal,
  Place,
  PlaceSkeleton,
  ReviewModal,
  Section,
} from "../../components";
import path from "../../constants/path";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import PlaceTop from "./components/PlaceTop";
import { clearPlace, getPlace, getPlaceRelated } from "./placeSlice";
import PlaceReview from "./components/PlaceReview";
import * as Styled from "./styles";
import { images } from "../../assets";
import ReviewItem from "./components/ReviewItem";
import { IReview } from "../../types";
import { openAuth } from "../Auth/authSlice";

type Props = {};

const PlaceDetail = (props: Props) => {
  const { id } = useParams();
  const { place, placesRelated, api } = useAppSelector((state) => state.place);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showMap, setShowMap] = useState<boolean>(false);
  const [addReview, setAddReview] = useState<boolean>(false);

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getPlace(id));
      dispatch(getPlaceRelated());
    }

    return () => {
      dispatch(clearPlace());
    };
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
              <PlaceReview place={place} />
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
                  <Typography.Text>
                    {api.getPlace.status === "pending" ? (
                      <Skeleton.Input active size="small" block />
                    ) : (
                      `${place?.price.from.toLocaleString()}đ - ${place?.price.to.toLocaleString()}đ`
                    )}
                  </Typography.Text>
                </Space>
                <Space align="center">
                  <ClockCircleOutlined className="icon" />
                  <Space>
                    <Typography.Text className="status time-close">
                      Đang mở cửa
                    </Typography.Text>

                    <Typography.Text strong className="ant-dropdown-link">
                      {api.getPlace.status === "pending" ? (
                        <Skeleton.Input active size="small" block />
                      ) : (
                        ` - ${place?.time.from} - ${place?.time.to}`
                      )}
                    </Typography.Text>
                  </Space>
                </Space>
                <Space align="center">
                  <PhoneOutlined className="icon" />
                  <a href={place?.phone ? `tel:${place.phone}` : "#"}>
                    <Typography.Text strong>
                      {api.getPlace.status === "pending" ? (
                        <Skeleton.Input active size="small" block />
                      ) : place?.phone ? (
                        place.phone
                      ) : (
                        "Chưa cập nhật"
                      )}
                    </Typography.Text>
                  </a>
                </Space>
                <Space align="center">
                  <FacebookOutlined className="icon" />
                  <a
                    href={
                      place?.facebook
                        ? place.facebook
                        : "https://www.facebook.com/"
                    }
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
                    href={
                      place?.instagram
                        ? place.instagram
                        : "https://www.instagram.com/"
                    }
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
                <Space className="info-tags" align="start">
                  <TagsOutlined size={18} className="icon" />

                  <Space wrap>
                    {api.getPlace.status === "pending" ? (
                      <Skeleton.Input active size="small" block />
                    ) : (
                      <React.Fragment>
                        {place?.categories.map((category: any) => (
                          <Link
                            key={category?._id}
                            to={`/search?categories=${category?._id}`}
                          >
                            {category?.name}
                          </Link>
                        ))}
                        {place?.purposes.map((purpose: any) => (
                          <Link
                            key={purpose?._id}
                            to={`/search?purposes=${purpose?._id}`}
                          >
                            {purpose?.name}
                          </Link>
                        ))}
                        <Link to={`/search?regions=${place?.region?._id}`}>
                          {place?.region?.name}
                        </Link>
                      </React.Fragment>
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
                    {api.getPlace.status === "pending" ? (
                      <Skeleton.Input active size="small" block />
                    ) : (
                      place?.address
                    )}
                  </a>
                </div>
              </Styled.PlaceMap>
            </Styled.PlaceDetailAddress>
          </Styled.PlaceDetail>
          <Styled.PlaceBenefit id="benefit">
            {api.getPlace.status === "pending" ? (
              <Box justifyContent="center">
                <Spin />
              </Box>
            ) : (
              <Box flexWrap="wrap" gap="10px" justifyContent="center">
                {place?.tags &&
                  place.tags.map((tag: any) => (
                    <Tag
                      onClick={() => {
                        navigate(`/search?tags=${tag?._id}`);
                      }}
                      key={tag._id}
                      icon={<CheckCircleOutlined />}
                      style={{
                        padding: "6px 12px",
                        margin: 0,
                        fontSize: 15,
                      }}
                      color="geekblue"
                    >
                      {tag.name}
                    </Tag>
                  ))}
                {place?.benefits &&
                  place.benefits.map((benefit: any) => (
                    <Tag
                      onClick={() => {
                        navigate(`/search?benefits=${benefit?._id}`);
                      }}
                      key={benefit._id}
                      icon={<CheckCircleOutlined />}
                      style={{ padding: "6px 12px", margin: 0, fontSize: 15 }}
                      color="geekblue"
                    >
                      {benefit.name}
                    </Tag>
                  ))}
              </Box>
            )}
          </Styled.PlaceBenefit>
          <Styled.PlaceReview id="review">
            <div className="review-container">
              <div className="review-container-top">
                <h2>
                  Đánh giá từ cộng đồng
                  <span>{` (${
                    place?.posts.length > 0 ? place?.posts.length : 0
                  })`}</span>
                </h2>
                <Button
                  type="primary"
                  shape="round"
                  onClick={() => {
                    if (!user) {
                      dispatch(openAuth());
                    } else {
                      setAddReview(true);
                    }
                  }}
                >
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
                {api.getPlace.status === "pending" ? (
                  <div className="review-list-empty">
                    <p>đang tải...</p>
                  </div>
                ) : (
                  <React.Fragment>
                    {place?.posts.length === 0 ? (
                      <div className="review-list-empty">
                        <p>{`Chưa có đánh giá nào cho ${place?.name}. Hãy là người đầu tiên làm chuyện ấy!`}</p>
                      </div>
                    ) : (
                      place?.posts.map((review: IReview, key: number) => (
                        <ReviewItem
                          key={`review-item-${key}`}
                          review={review}
                        />
                      ))
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="review-ads">
              <div className="review-ads-box">
                <PlaceReview place={place} />
              </div>
              <div className="review-ads-box">
                <ImageLazy
                  src={images.ads}
                  alt="ads"
                  width="100%"
                  height="100%"
                />
              </div>
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

      {addReview && place && (
        <ReviewModal
          mode="add"
          place={place}
          onClose={() => setAddReview(false)}
        />
      )}
    </Section>
  );
};

export default PlaceDetail;
