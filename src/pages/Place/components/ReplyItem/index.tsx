import { Button, Typography, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImageLazy } from "../../../../components";
import * as Styled from "./styles";

const ReplyItem = () => {
  const [reply, setReply] = useState(false);
  return (
    <Styled.ReviewReplyItem>
      <div className="left-reply">
        <Link to="/">
          <ImageLazy
            className="avatar"
            alt="avatar"
            src="https://nguoinoitieng.tv/images/nnt/97/0/bb65.jpg"
          />
        </Link>
      </div>
      <div className="right-reply">
        <div className="content">
          <div className="header">
            <div className="info">
              <Link to="/">
                <ImageLazy
                  className="avatar"
                  alt="avatar"
                  src="https://nguoinoitieng.tv/images/nnt/97/0/bb65.jpg"
                />
              </Link>
            </div>
            <div className="text">
              <Link to="/">Hoàng Cao</Link>
              <span>một tháng trước</span>
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
                MOA là một tổ hợp mới mở với diện tích không gian lên đến 1500
                mét vuông. Nếu các bạn còn nhớ thì trước đây, vị trí này từng là
                quán Trill Bistro Không gian rất rộng, rất nhiều chỗ ngồi, khu
                vực chính giữa còn có mái kính đón ánh sáng để các bạn tha hồ
                chụp ảnh sống ảo. Mình chụp ảnh để review mà chỉnh mãi không hết
                vì góc nào cũng đẹp quá, ngay cả khi mình lên bài cũng không thể
                up hết được cho mọi người coi. Ban ngày quán bán cafe, đến tối
                thì chuyển qua cocktail. Các bạn muốn negồi buổi tối nhớ book
                lịch trước khi qua nhé. Còn đợi chờ gì nữa nhanh chân lên M.O.A
                98 Hàng Buồm ngay thôi nào!!
              </Typography.Paragraph>
            </div>
          </div>
        </div>
        <Styled.ReviewAction>
          <div className="left">
            <button>
              <i className="bx bx-heart"></i>
              {/* <i className="bx bxs-heart"></i> */}
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
        )}
      </div>
    </Styled.ReviewReplyItem>
  );
};

export default ReplyItem;
