import moment from "moment";
import React from "react";
import { images } from "../../assets";
import { Section } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import * as Styled from "./styles";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Section>
      <Styled.ProfileWrapper>
        <Styled.ProfileInfoBox>
          <Styled.ProfileInfoContainer>
            <Styled.ProfileInfoHeader>
              <Styled.ProfileInfo>
                <div className="avatar-wrap">
                  <div
                    className="avatar"
                    style={{
                      backgroundImage: `url(${user?.avatar})`,
                    }}
                  ></div>
                  <div className="upload">
                    <i className="bx bxs-camera"></i>
                  </div>
                </div>
                <h1 className="username">
                  {user?.name}
                  {user?.role === "admin" && (
                    <i className="bx bxs-check-circle"></i>
                  )}
                </h1>
                <div className="action">
                  <ul>
                    {/* <li>
                      <button className="follow">
                        <i className="bx bx-rss"></i>
                        Theo dõi
                      </button>
                    </li> */}
                    <li>
                      <button>
                        <i className="bx bx-pencil"></i> Chỉnh sửa
                      </button>
                    </li>
                  </ul>
                </div>
              </Styled.ProfileInfo>
            </Styled.ProfileInfoHeader>
          </Styled.ProfileInfoContainer>
        </Styled.ProfileInfoBox>
        <Styled.ProfileNavigationWrap>
          <Styled.ProfileNavigation>
            <ul>
              <li className="active">
                <span>Đánh giá</span>
              </li>
              <li>
                <span>Đã lưu</span>
              </li>
              <li>
                <span>Người theo dõi</span>
              </li>
              <li>
                <span>Đang theo dõi</span>
              </li>
            </ul>
            <ul>
              {/* <li>
                <button className="follow">
                  <i className="bx bx-rss"></i>
                  Theo dõi
                </button>
              </li> */}
              <li>
                <button>
                  <i className="bx bx-pencil"></i> Chỉnh sửa
                </button>
              </li>
            </ul>
          </Styled.ProfileNavigation>
        </Styled.ProfileNavigationWrap>
        <Styled.ProfileContainer>
          <Styled.ProfileLeft>
            <Styled.ProfileUserStats>
              <h3>Bảng thông tin</h3>
              <div>
                <span>
                  <i className="bx bx-edit"></i> Đánh giá
                </span>
                <span>25</span>
              </div>
              <div>
                <span>
                  <i className="bx bx-message-dots"></i> Thảo luận
                </span>
                <span>1</span>
              </div>
              <div>
                <span>
                  <i className="bx bxs-heart"></i> Yêu thích
                </span>
                <span>{user?.saved.length}</span>
              </div>
              <div>
                <span>
                  <i className="bx bx-rss"></i> Người theo dõi
                </span>
                <span>5</span>
              </div>
              <div>
                <span>
                  <i className="bx bx-calendar"></i> Ngày tham gia
                </span>
                <span>{moment(user?.createdAt).format("L")}</span>
              </div>
            </Styled.ProfileUserStats>
            <Styled.ProfileAds>
              <img src={images.ads} alt="ads - quảng cáo" />
            </Styled.ProfileAds>
            <Styled.ProfileAds>
              <img src={images.ads} alt="ads - quảng cáo" />
            </Styled.ProfileAds>
          </Styled.ProfileLeft>
          <Styled.ProfileRight>
            <Styled.ProfileUserReview>
              <Styled.ProfileEmpty>
                <img src={images.empty} alt="empty" />
                <span>Opps, chưa có bài đánh giá nào!</span>
              </Styled.ProfileEmpty>
            </Styled.ProfileUserReview>
          </Styled.ProfileRight>
        </Styled.ProfileContainer>
      </Styled.ProfileWrapper>
    </Section>
  );
};

export default Profile;
