import { Button, Input, Popover, Space, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, ImageLazy, LightBoxImages } from "../../../../components";
import { colors } from "../../../../theme/colors";
import { StarFilled } from "@ant-design/icons";
import moment from "moment";
import * as Styled from "./styles";
import { IReview } from "../../../../types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import ReplyItem from "../ReplyItem";
import {
  createPlaceReviewComment,
  likePlaceReview,
  unlikePlaceReview,
} from "../../placeSlice";
import { openAuth } from "../../../Auth/authSlice";

const ReviewItem = ({ review }: { review: IReview }) => {
  const { user } = useAppSelector((state) => state.auth);
  const { place } = useAppSelector((state) => state.place);
  const [reply, setReply] = useState(false);
  const [content, setContent] = useState<string>("");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();
  const [showMore, setShowMore] = useState(false);

  const contentPopover = (
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

  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);

  useEffect(() => {
    if (review?.likes && user?._id) {
      if (review.likes.find((like: any) => like._id === user._id)) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    }
  }, [review?.likes, user?._id]);

  const handleLikeReview = async () => {
    if (!user) {
      return dispatch(openAuth());
    }
    if (loadLike) return;
    setLoadLike(true);
    await dispatch(likePlaceReview({ id: review._id, socket: null }));
    setLoadLike(false);
  };

  const handleUnlikeReview = async () => {
    if (!user) {
      return dispatch(openAuth());
    }
    if (loadLike) return;
    setLoadLike(true);
    await dispatch(unlikePlaceReview({ id: review._id, socket: null }));
    setLoadLike(false);
  };

  const handleAddComment = async () => {
    if (!content.trim()) {
      return setReply(false);
    }

    const newComment = {
      content,
      likes: [],
      user: user,
      createdAt: new Date().toISOString(),
      reply: null,
      tag: null,
    };

    await dispatch(
      createPlaceReviewComment({
        review: review,
        comment: newComment,
        socket: null,
      })
    );

    setContent("");
    setReply(false);
  };

  return (
    <Styled.ReviewItemWrap>
      <Styled.ReviewLeft>
        <Link to={`/profile/${review.user._id}`}>
          <ImageLazy
            hover={false}
            radius="50%"
            width="64px"
            height="64px"
            alt={review.user.name}
            src={review.user.avatar}
          />
        </Link>
        <Tooltip
          placement="right"
          title={`${review?.user?.posts?.length || 0} lần đánh giá`}
        >
          <div className="review-count">
            <span>
              <i className="bx bx-edit"></i>
            </span>
            <span>{review?.user?.posts?.length || 0}</span>
          </div>
        </Tooltip>
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
                <Link to={`/review/${review._id}`}>
                  <span>Đã đánh giá {moment(review.createdAt).fromNow()} </span>
                </Link>
              </div>
            </div>
            <div className="review-vote">
              <Popover content={contentPopover}>
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
                ? review.images.map((image: any, index: number) => (
                    <div onClick={() => setIsOpen(true)}>
                      <ImageLazy
                        key={index}
                        className="image"
                        radius="6px"
                        alt="avatar"
                        src={image.url}
                      />
                    </div>
                  ))
                : review.images.map((image: any, index: number) => {
                    if (index === 2) {
                      return (
                        <div onClick={() => setIsOpen(true)}>
                          <ImageLazy
                            key={index}
                            className="image"
                            radius="6px"
                            alt={review.content}
                            src={image.url}
                          >
                            <div className="overlay">
                              <span className="tag">
                                +{review.images.length - 3 || 0} ảnh
                              </span>
                            </div>
                          </ImageLazy>
                        </div>
                      );
                    } else if (index <= 1) {
                      return (
                        <div onClick={() => setIsOpen(true)}>
                          <ImageLazy
                            key={index}
                            className="image"
                            radius="6px"
                            alt={review.content}
                            src={image.url}
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
            </div>
          </div>
        </Styled.ReviewContent>
        <Styled.ReviewAction>
          <div className="left">
            {!isLike ? (
              <button onClick={handleLikeReview}>
                <i className="bx bx-heart"></i>
                <span>
                  {review.likes.length
                    ? `${review.likes.length} Thích`
                    : "Thích"}
                </span>
              </button>
            ) : (
              <button onClick={handleUnlikeReview} className="active">
                <i className="bx bxs-heart"></i>
                <span>
                  {review.likes.length
                    ? `${review.likes.length} Thích`
                    : "Thích"}
                </span>
              </button>
            )}

            {!reply ? (
              <button
                onClick={() => {
                  if (!user) {
                    return dispatch(openAuth());
                  }
                  setReply(true);
                }}
              >
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
                hover={false}
                className="avatar"
                alt="avatar"
                src={user?.avatar ? user?.avatar : ""}
              />
            </div>
            <div className="right">
              <div className="reply-user">
                <span>Đang trả lời {review?.user?.name || ""}</span>
              </div>
              <div className="content">
                <div className="input">
                  <Input.TextArea
                    autoSize
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onPressEnter={(e) => {
                      e.preventDefault();
                      handleAddComment();
                    }}
                  />
                </div>
                <div className="submit">
                  <Button
                    type="primary"
                    shape="round"
                    onClick={() => {
                      handleAddComment();
                    }}
                  >
                    Đăng
                  </Button>
                </div>
              </div>
            </div>
          </Styled.ReviewNewReply>
        )}
        <div>
          {review?.comments?.length > 0 && !showMore && (
            <Styled.ReviewReply onClick={() => setShowMore(true)}>
              <span>
                <i className="bx bx-comment-dots"></i>
                Xem {review.comments.length} trả lời cho Dương Vương
              </span>
            </Styled.ReviewReply>
          )}

          {showMore && (
            <Styled.ReviewReplyContainer>
              {review.comments.map((comment: any, key: any) => (
                <ReplyItem key={key} comment={comment} />
              ))}
            </Styled.ReviewReplyContainer>
          )}
        </div>
      </Styled.ReviewRight>
      {isOpen && (
        <LightBoxImages
          title={`Đánh giá của ${review?.user?.name} về ${place?.name}`}
          caption={review?.content}
          onClick={() => setIsOpen(false)}
          images={review?.images}
        />
      )}
    </Styled.ReviewItemWrap>
  );
};

export default ReviewItem;
