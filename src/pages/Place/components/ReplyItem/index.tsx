import { Typography } from "antd";
import moment from "moment";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImageLazy } from "../../../../components";
import * as Styled from "./styles";

const ReplyItem = ({ comment }: { comment: any }) => {
  // const [reply, setReply] = useState(false);
  return (
    <Styled.ReviewReplyItem>
      <div className="left-reply">
        <Link to={comment?.user?._id ? `/profile/${comment?.user?._id}` : "/"}>
          <ImageLazy
            className="avatar"
            alt={comment?.user?.name || ""}
            src={comment?.user?.avatar || ""}
          />
        </Link>
      </div>
      <div className="right-reply">
        <div className="content">
          <div className="header">
            <div className="info">
              <Link
                to={comment?.user?._id ? `/profile/${comment?.user?._id}` : "/"}
              >
                <ImageLazy
                  className="avatar"
                  alt={comment?.user?.name || ""}
                  src={comment?.user?.avatar || ""}
                />
              </Link>
            </div>
            <div className="text">
              <Link
                to={comment?.user?._id ? `/profile/${comment?.user?._id}` : "/"}
              >
                {comment?.user?.name || ""}
              </Link>
              <span>{moment(comment?.createdAt || new Date()).fromNow()}</span>
            </div>
          </div>
          <div className="body">
            <div className="text">
              <Typography.Paragraph
                ellipsis={
                  true
                    ? { rows: 2, expandable: true, symbol: "Xem thêm" }
                    : false
                }
              >
                {comment?.content || ""}
              </Typography.Paragraph>
            </div>
          </div>
        </div>
        {/* <Styled.ReviewAction>
          <div className="left">
            <button>
              <i className="bx bx-heart"></i>
              <i className="bx bxs-heart"></i>
              <span>6 thích</span>
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
        </Styled.ReviewAction> */}
        {/* {reply && (
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
                <span>Đang trả lời Hoàng Cao</span>
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
        )} */}
      </div>
    </Styled.ReviewReplyItem>
  );
};

export default ReplyItem;
