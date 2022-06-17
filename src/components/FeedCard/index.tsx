import React, { useEffect, useState } from "react";
import { Dropdown, Input, message, Modal, Rate, Typography } from "antd";
import { Link } from "react-router-dom";
import { colors } from "../../theme/colors";
import ImageLazy from "../ImageLazy";
import * as Styled from "./styles";
import moment from "moment";
import LightboxImages from "../LightBoxImages";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ReplyItem from "./ReplyItem";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  createReviewComment,
  deleteReview,
  likeReview,
  unlikeReview,
} from "../../pages/Explore/exploreSlice";
import classNames from "classnames";
import { openAuth } from "../../pages/Auth/authSlice";

type Props = {
  feed: any;
  openUpdate: any;
};

const Setting = ({
  user,
  review,
  openUpdate,
}: {
  user: any;
  review: any;
  openUpdate: any;
}) => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const showPromiseConfirm = () => {
    Modal.confirm({
      zIndex: 10000,
      title: "Bạn có chắc chắn muốn xoá bài viết này?",
      icon: <ExclamationCircleOutlined />,
      cancelText: "Không",
      okText: "Có",
      onOk() {
        return dispatch(deleteReview({ id: review._id, socket: null }))
          .unwrap()
          .then(() => message.success("Xoá bài đánh giá thành công!"));
      },
      onCancel() {},
    });
  };

  return (
    <Styled.SettingDropdown>
      {user._id === auth.user?._id && (
        <span className="item" onClick={() => openUpdate(review)}>
          <i className="bx bx-message-alt-edit"></i>
          Cập nhật bài viết
        </span>
      )}
      {user._id === auth.user?._id && (
        <span className="item" onClick={showPromiseConfirm}>
          <i className="bx bx-message-x"></i>
          Xoá bài viết
        </span>
      )}

      <span className="item">
        <i className="bx bx-link"></i>
        Sao chép liên kết
      </span>
    </Styled.SettingDropdown>
  );
};

const FeedCard = ({ feed, openUpdate }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const { socket } = useAppSelector((state) => state.socket);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [showComment, setShowComment] = React.useState<boolean>(false);

  const renderImages = (images: any) => {
    if (images.length === 1) {
      return (
        <div className="images-1">
          {images.map((image: any, index: number) => (
            <div className="image" key={index} onClick={() => setIsOpen(true)}>
              <ImageLazy hover={false} alt={feed?.name} src={image.url} />
            </div>
          ))}
        </div>
      );
    }
    if (images.length === 2) {
      return (
        <div className="images-2">
          {images.map((image: any, index: number) => (
            <div className="image" key={index} onClick={() => setIsOpen(true)}>
              <ImageLazy hover={false} alt={feed?.name} src={image.url} />
            </div>
          ))}
        </div>
      );
    }
    if (images.length === 3) {
      return (
        <div className="images-3">
          {images.map((image: any, index: number) => (
            <div className="image" key={index} onClick={() => setIsOpen(true)}>
              <ImageLazy hover={false} alt={feed?.name} src={image.url} />
            </div>
          ))}
        </div>
      );
    }
    if (images.length === 4) {
      return (
        <div className="images-4">
          {images.map((image: any, index: number) => (
            <div className="image" key={index} onClick={() => setIsOpen(true)}>
              <ImageLazy hover={false} alt={feed?.name} src={image.url} />
            </div>
          ))}
        </div>
      );
    }
    if (images.length === 5) {
      return (
        <div className="images-5">
          {images.map((image: any, index: number) => (
            <div className="image" key={index} onClick={() => setIsOpen(true)}>
              <ImageLazy hover={false} alt={feed?.name} src={image.url} />
            </div>
          ))}
        </div>
      );
    }
    if (images.length > 5) {
      return (
        <div className="images-more">
          {images?.map((image: any, index: number) => {
            if (index <= 3) {
              return (
                <div
                  className="image"
                  key={index}
                  onClick={() => setIsOpen(true)}
                >
                  <ImageLazy hover={false} alt={feed?.name} src={image.url} />
                </div>
              );
            }
            if (index === 4) {
              return (
                <div
                  key={index}
                  className="image more"
                  onClick={() => setIsOpen(true)}
                >
                  <ImageLazy hover={false} alt={feed?.name} src={image.url}>
                    <div className="overlay">
                      <span>+{images?.length - 5 || 0}</span>
                    </div>
                  </ImageLazy>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    }

    return null;
  };

  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);
  // const [isShare, setIsShare] = useState(false);

  useEffect(() => {
    if (feed?.likes && user?._id) {
      if (feed.likes.find((like: any) => like._id === user._id)) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    }
  }, [feed?.likes, user?._id]);

  const handleLikeReview = async () => {
    if (!user) {
      return dispatch(openAuth());
    }
    if (loadLike) return;
    setLoadLike(true);
    await dispatch(likeReview({ review: feed, socket: socket, user: user }));
    setLoadLike(false);
  };

  const handleUnlikeReview = async () => {
    if (!user) {
      return dispatch(openAuth());
    }
    if (loadLike) return;
    setLoadLike(true);
    await dispatch(unlikeReview({ review: feed, socket: socket, user: user }));
    setLoadLike(false);
  };

  const handleAddComment = async () => {
    if (!content.trim()) {
      return;
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
      createReviewComment({
        review: feed,
        comment: newComment,
        socket: socket,
        user: user,
      })
    );

    setContent("");
  };

  return (
    <Styled.FeedCardWrap>
      <Styled.FeedCardHeader>
        <Styled.FeedHeaderInfo>
          <ImageLazy
            hover={false}
            className="avatar"
            alt={feed.user.name}
            src={feed.user.avatar}
          />
          <div className="content">
            <div className="author">
              <Link to={`/profile/${feed.user._id}`}>
                {feed.user.name}
                {feed.user.role === "admin" && (
                  <i className="bx bxs-check-circle"></i>
                )}
              </Link>
              <i className="bx bx-caret-right"></i>
              <Link to={`/place/${feed.place._id}`}>{feed.place.name}</Link>
            </div>
            <div className="rate-time">
              <span className="star">
                <b>{feed.rateAvg.toFixed(1)}</b>
                <Rate
                  style={{
                    fontSize: 14,
                    color: colors.primary,
                  }}
                  disabled
                  value={feed.rateAvg}
                />
              </span>
              <i className="dot">●</i>
              <span className="time">
                <span>{moment(feed.createdAt).fromNow()}</span>
              </span>
            </div>
          </div>
          <Dropdown
            trigger={["click"]}
            overlay={
              <Setting review={feed} user={feed.user} openUpdate={openUpdate} />
            }
            placement="bottomRight"
          >
            <i className="bx bx-dots-horizontal-rounded option"></i>
          </Dropdown>
        </Styled.FeedHeaderInfo>
      </Styled.FeedCardHeader>
      <Styled.FeedCardBody>
        <div className="text">
          <Typography.Paragraph
            ellipsis={
              true ? { rows: 4, expandable: true, symbol: "Xem thêm" } : false
            }
          >
            {feed.content}
          </Typography.Paragraph>
        </div>
        <div className="images-wrap">{renderImages(feed.images)}</div>
      </Styled.FeedCardBody>
      <Styled.FeedCardAction>
        {isLike ? (
          <button onClick={handleUnlikeReview} className="active">
            <i className="bx bxs-heart"></i>
            <span>
              {feed?.likes?.length ? `${feed?.likes?.length} Thích` : "Thích"}
            </span>
          </button>
        ) : (
          <button onClick={handleLikeReview}>
            <i className="bx bx-heart"></i>
            <span>
              {feed?.likes?.length ? `${feed?.likes?.length} Thích` : "Thích"}
            </span>
          </button>
        )}
        <button>
          <i className="bx bx-comment"></i>
          <span>Bình luận</span>
        </button>
        <button>
          <i className="bx bx-share"></i>
          <span>Chia sẽ</span>
        </button>
      </Styled.FeedCardAction>
      {user && (
        <Styled.FeedCardNewReply>
          <ImageLazy className="avatar" src={user.avatar} alt={user.name} />
          <div className="reply-input">
            <Input.TextArea
              onPressEnter={(e) => {
                e.preventDefault();
                handleAddComment();
              }}
              autoSize
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Viết bình luận..."
            />
            <i
              className={classNames("bx bxs-paper-plane", { active: content })}
              onClick={() => {
                if (!content) return;
                handleAddComment();
              }}
            />
          </div>
        </Styled.FeedCardNewReply>
      )}
      {showComment && (
        <Styled.FeedCardReplies>
          {feed?.comments?.map((comment: any, key: any) => (
            <ReplyItem comment={comment} key={key} />
          ))}
        </Styled.FeedCardReplies>
      )}
      {feed?.comments?.length > 0 && (
        <Styled.FeedCardListReply
          onClick={() => setShowComment((isShow) => !isShow)}
        >
          <span>
            {showComment
              ? "Ẩn tất cả bình luận"
              : `Xem tất cả ${feed.comments.length || 0} bình luận...`}
          </span>
        </Styled.FeedCardListReply>
      )}
      {isOpen && (
        <LightboxImages
          title={`Đánh giá của ${feed?.user?.name} về ${feed?.place?.name}`}
          caption={feed?.content}
          onClick={() => setIsOpen(false)}
          images={feed.images}
        />
      )}
    </Styled.FeedCardWrap>
  );
};

export default FeedCard;
