import React from "react";
import { Rate, Typography } from "antd";
import { Link } from "react-router-dom";
import { colors } from "../../theme/colors";
import ImageLazy from "../ImageLazy";
import * as Styled from "./styles";
import moment from "moment";
import LightboxImages from "../LightBoxImages";

type Props = {
  feed: any;
};

const FeedCard = ({ feed }: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
          <i className="bx bx-dots-horizontal-rounded option"></i>
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
        <span>đang tiến hành...</span>
      </Styled.FeedCardAction>
      <Styled.FeedCardNewReply>
        <span>đang tiến hành...</span>
      </Styled.FeedCardNewReply>
      <Styled.FeedCardListReply>
        <span>đang tiến hành...</span>
      </Styled.FeedCardListReply>
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
