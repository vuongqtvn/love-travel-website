/* eslint-disable jsx-a11y/anchor-is-valid */

import Skeleton from "react-loading-skeleton";

import * as Styled from "./styles";

const FeedCardLoading = () => {
  return (
    <Styled.FeedCardWrap>
      <Styled.FeedCardHeader>
        <Styled.FeedHeaderInfo>
          <Skeleton className="avatar" />

          <div className="content">
            <div className="author">
              <a>
                <Skeleton width={100} />
              </a>
              <i className="bx bx-caret-right"></i>
              <a>
                <Skeleton width={100} />
              </a>
            </div>
            <div className="rate-time">
              <span className="star">
                <b>
                  <Skeleton width={30} />
                </b>
                <Skeleton width={50} />
              </span>
              <i className="dot">●</i>
              <span className="time">
                <span>
                  <Skeleton width={100} />
                </span>
              </span>
            </div>
          </div>
        </Styled.FeedHeaderInfo>
      </Styled.FeedCardHeader>
      <Styled.FeedCardBody>
        <p>
          <Skeleton count={4} />
        </p>
        <Skeleton className="images-wrap" />
      </Styled.FeedCardBody>
      <Styled.FeedCardAction>
        <Skeleton width={50} />
        <Skeleton width={50} />
        <Skeleton width={50} />
      </Styled.FeedCardAction>
    </Styled.FeedCardWrap>
  );
};

export default FeedCardLoading;
