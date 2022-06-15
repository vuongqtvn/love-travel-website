import React from "react";
import moment from "moment";
import { images } from "../../../../assets";
import * as Styled from "./styles";
import { useAppSelector } from "../../../../redux/hooks";

const LeftPane = () => {
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <Styled.ProfileLeft>
      <Styled.ProfileUserStats>
        <h3>Bảng thông tin</h3>
        <div>
          <span>
            <i className="bx bx-male-female"></i> Giới tính
          </span>
          <span>{profile?.gender === "male" ? "Nam" : "Nữ"}</span>
        </div>
        <div>
          <span>
            <i className="bx bx-edit"></i> Đánh giá
          </span>
          <span>{profile?.posts?.length || 0}</span>
        </div>
        <div>
          <span>
            <i className="bx bx-message-dots"></i> Thảo luận
          </span>
          <span>{profile?.posts?.comments?.length || 0}</span>
        </div>
        <div>
          <span>
            <i className="bx bxs-heart"></i> Đã lưu
          </span>
          <span>{profile?.saved?.length || 0}</span>
        </div>

        <div>
          <span>
            <i className="bx bxs-user-check"></i> Đang theo dõi
          </span>
          <span>{profile?.following?.length || 0}</span>
        </div>
        <div>
          <span>
            <i className="bx bx-rss"></i> Người theo dõi
          </span>
          <span>{profile?.followers?.length || 0}</span>
        </div>
        <div>
          <span>
            <i className="bx bx-calendar"></i> Ngày tham gia
          </span>
          <span>{moment(profile?.createdAt).format("L")}</span>
        </div>
      </Styled.ProfileUserStats>
      <Styled.ProfileAds>
        <img src={images.ads} alt="ads - quảng cáo" />
      </Styled.ProfileAds>
      <Styled.ProfileAds>
        <img src={images.ads} alt="ads - quảng cáo" />
      </Styled.ProfileAds>
    </Styled.ProfileLeft>
  );
};

export default LeftPane;
