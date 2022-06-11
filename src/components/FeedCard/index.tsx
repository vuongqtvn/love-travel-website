import React from "react";
import { Dropdown, Input, message, Modal, Rate, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../theme/colors";
import ImageLazy from "../ImageLazy";
import * as Styled from "./styles";
import moment from "moment";
import LightboxImages from "../LightBoxImages";
import { useAppSelector } from "../../redux/hooks";
import ReplyItem from "./ReplyItem";
import ReviewModal from "../ReviewModal";
import reviewApi from "../../api/reviewApi";
import { ExclamationCircleOutlined } from "@ant-design/icons";

type Props = {
  feed: any;
};

const Setting = ({ user, review }: { user: any; review: any }) => {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isOpenReview, setIsOpenReview] = React.useState<boolean>(false);

  const showPromiseConfirm = () => {
    Modal.confirm({
      zIndex: 10000,
      title: "Bạn có chắc chắn muốn xoá bài viết này?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        return reviewApi.deleteReviewUser(review._id).then(() => {
          navigate(0);
          message.success("Xoá bài viết thành công!");
        });
      },
      onCancel() {},
    });
  };

  return (
    <Styled.SettingDropdown>
      {user._id === auth.user?._id && (
        <span className="item" onClick={() => setIsOpenReview(true)}>
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

      {isOpenReview && (
        <ReviewModal
          mode="update"
          review={review}
          onClose={() => setIsOpenReview(false)}
        />
      )}
    </Styled.SettingDropdown>
  );
};

const FeedCard = ({ feed }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
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
            overlay={<Setting review={feed} user={feed.user} />}
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
        <button>
          <i className="bx bx-heart"></i>
          <span>
            {feed?.likes?.length ? `${feed?.likes?.length} Thích` : "Thích"}
          </span>
        </button>
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
              }}
              autoSize
              placeholder="Viết bình luận..."
            />
            <i className="bx bxs-paper-plane"></i>
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
