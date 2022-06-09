import { Button, Input, Popover, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, ImageLazy } from "../../../../components";
import { colors } from "../../../../theme/colors";
import { StarFilled } from "@ant-design/icons";
// import ReplyItem from "../ReplyItem";
import moment from "moment";
import * as Styled from "./styles";
import { IReview } from "../../../../types";

const ReviewItem = ({ review }: { review: IReview }) => {
  const [reply, setReply] = useState(false);
  // const [showMore, setShowMore] = useState(false);

  const content = (
    <Box flexDirection="column">
      <Space>
        <span>Vị trí</span>
        <Space size={2}>
          <span>{review.ratePosition.toFixed(1)}</span>
          <StarFilled
            style={{
              color: colors.primary,
            }}
          />
        </Space>
      </Space>
      <Space>
        <span>Không gian</span>
        <Space size={2}>
          <span>{review.rateView.toFixed(1)}</span>
          <StarFilled
            style={{
              color: colors.primary,
            }}
          />
        </Space>
      </Space>
      <Space>
        <span>Đồ uống</span>
        <Space size={2}>
          <span>{review.rateDrink.toFixed(1)}</span>
          <StarFilled
            style={{
              color: colors.primary,
            }}
          />
        </Space>
      </Space>
      <Space>
        <span>Phục vụ</span>
        <Space size={2}>
          <span>{review.rateService.toFixed(1)}</span>
          <StarFilled
            style={{
              color: colors.primary,
            }}
          />
        </Space>
      </Space>
      <Space>
        <span>Giá cả</span>
        <Space size={2}>
          <span>{review.ratePrice.toFixed(1)}</span>
          <StarFilled
            style={{
              color: colors.primary,
            }}
          />
        </Space>
      </Space>
    </Box>
  );

  return (
    <Styled.ReviewItemWrap>
      <Styled.ReviewLeft>
        <Link to={`/profile/${review.user._id}`}>
          <ImageLazy
            radius="50%"
            width="64px"
            height="64px"
            alt={review.user.name}
            src={review.user.avatar}
          />
        </Link>
        <div className="review-count">
          <span>
            <i className="bx bx-edit"></i>
          </span>
          {/* <span>1</span> */}
        </div>
      </Styled.ReviewLeft>
      <Styled.ReviewRight>
        <Styled.ReviewContent>
          <div className="header">
            <div className="info">
              <Link to={`/profile/${review.user._id}`} className="info-avatar">
                <ImageLazy
                  radius="50%"
                  width="40px"
                  height="40px"
                  alt={review.user.name}
                  src={review.user.avatar}
                />
              </Link>
              <div className="text">
                <Link to={`/profile/${review.user._id}`}>
                  {review.user.name}
                  {review.user.role === "admin" && (
                    <i className="bx bxs-check-circle"></i>
                  )}
                </Link>
                <Link to={`/profile/${review.user._id}`}>
                  <span>Đã đánh giá {moment(review.createdAt).fromNow()} </span>
                </Link>
              </div>
            </div>
            <div className="review-vote">
              <Popover content={content}>
                <span className="star">
                  <b>{review.rateAvg.toFixed(1)}</b>
                </span>
              </Popover>
            </div>
          </div>
          <div className="body">
            <div className="text">
              <Typography.Paragraph
                ellipsis={
                  true
                    ? { rows: 4, expandable: true, symbol: "Xem thêm" }
                    : false
                }
              >
                {review.content}
              </Typography.Paragraph>
            </div>
            <div className="images">
              {review.images.length <= 3
                ? review.images.map((image: any) => (
                    <ImageLazy
                      key={image.public_id}
                      className="image"
                      radius="6px"
                      alt="avatar"
                      src={image.url}
                    />
                  ))
                : review.images.map((image: any, index: number) => {
                    if (index === 2) {
                      return (
                        <ImageLazy
                          key={image.public_id}
                          className="image"
                          radius="6px"
                          alt={review.content}
                          src={image.url}
                        >
                          <div className="overlay">
                            <span className="tag">+2 ảnh</span>
                          </div>
                        </ImageLazy>
                      );
                    } else if (index <= 1) {
                      return (
                        <ImageLazy
                          key={image.public_id}
                          className="image"
                          radius="6px"
                          alt={review.content}
                          src={image.url}
                        />
                      );
                    }
                    return null;
                  })}
            </div>
          </div>
        </Styled.ReviewContent>
        <Styled.ReviewAction>
          <div className="left">
            <button>
              <i className="bx bx-heart"></i>
              {/* <i className="bx bxs-heart"></i> */}
              <span>{review.comments.length} thích</span>
            </button>
            {!reply ? (
              <button onClick={() => setReply(true)}>
                <span>Trả lời</span>
              </button>
            ) : (
              <button onClick={() => setReply(false)} className="cancel">
                <span>Huỷ</span>
              </button>
            )}
          </div>
        </Styled.ReviewAction>
        {reply && (
          <Styled.ReviewNewReply>
            <div className="left">
              <ImageLazy
                className="avatar"
                alt="avatar"
                src="https://nguoinoitieng.tv/images/nnt/97/0/bb65.jpg"
              />
            </div>
            <div className="right">
              <div className="reply-user">
                <span>Đang trả lời Dương Vương</span>
              </div>
              <div className="content">
                <div className="input">
                  <Input.TextArea autoSize />
                </div>
                <div className="submit">
                  <Button type="primary" shape="round">
                    Đăng
                  </Button>
                </div>
              </div>
            </div>
          </Styled.ReviewNewReply>
        )}
        {/* <div>
          {!showMore ? (
            <Styled.ReviewReply onClick={() => setShowMore(true)}>
              <span>
                <i className="bx bx-comment-dots"></i>
                Xem 1 trả lời cho Dương Vương
              </span>
            </Styled.ReviewReply>
          ) : (
            <Styled.ReviewReplyContainer>
              <ReplyItem />
            </Styled.ReviewReplyContainer>
          )}
        </div> */}
      </Styled.ReviewRight>
    </Styled.ReviewItemWrap>
  );
};

export default ReviewItem;
