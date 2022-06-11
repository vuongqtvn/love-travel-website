import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import ImageLazy from "../ImageLazy";
import * as Styled from "./styles";

const ReplyItem = ({ comment }: { comment: any }) => {
  return (
    <Styled.ReplyItemWrap>
      <div className="left">
        <ImageLazy
          alt={comment?.user?.name || "avatar"}
          src={comment?.user?.avatar || ""}
        />
      </div>
      <div className="right">
        <div className="content">
          <div className="header">
            <Link to={`/profile/${comment?.user?._id}`}>
              {comment?.user?.name || ""}
            </Link>
            <span>{moment(comment?.createdAt).fromNow()}</span>
          </div>
          <div>
            <p>{comment?.content}</p>
          </div>
        </div>
        <div className="action">
          <div className="action-left">
            <button>
              <i className="bx bx-heart"></i>
              <span>
                {comment.likes.length
                  ? `${comment.likes.length} Thích`
                  : "Thích"}
              </span>
            </button>
            <button>Trả lời</button>
          </div>
        </div>
      </div>
    </Styled.ReplyItemWrap>
  );
};

export default ReplyItem;
