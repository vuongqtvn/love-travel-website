import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileModal, Section } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Info from "./components/Info";
import LeftPane from "./components/LeftPane";
import { clearProfile, getProfile } from "./profileSlice";
import * as Styled from "./styles";
import classNames from "classnames";
import Posts from "./components/Posts";
import Places from "./components/Places";
import Saved from "./components/Saved";
import Followers from "./components/Followers";
import Following from "./components/Following";
import { followUser, openAuth, unFollowUser } from "../Auth/authSlice";
import { images } from "../../assets";

const Profile = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.auth);
  const { socket } = useAppSelector((state) => state.socket);
  const { profile, error } = useAppSelector((state) => state.profile);

  const [tab, setTab] = useState<
    "review" | "place" | "saved" | "followers" | "following"
  >("review");

  const [isModal, setIsModal] = useState<boolean>(false);

  const [followed, setFollowed] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProfile(id));
    }
    return () => {
      dispatch(clearProfile());
    };
  }, [id, dispatch]);

  React.useEffect(() => {
    if (user?.following) {
      if (user?.following?.find((item: any) => item._id === profile?._id)) {
        setFollowed(true);
      }
    }

    return () => {
      setFollowed(false);
    };
  }, [user?.following, profile?._id]);

  const handleFollow = () => {
    if (loading) return;

    if (!user) return;

    if (!user) {
      return dispatch(openAuth());
    }

    setLoading(true);
    dispatch(
      followUser({
        user: profile,
        socket: socket,
      })
    )
      .unwrap()
      .then(() => {
        setFollowed(true);
      })
      .finally(() => setLoading(false));
  };
  const handleUnFollow = () => {
    if (loading) return;

    if (!user) return;

    if (!user) {
      return dispatch(openAuth());
    }

    setLoading(true);
    dispatch(
      unFollowUser({
        user: profile,
        socket: socket,
      })
    )
      .unwrap()
      .then(() => {
        setFollowed(false);
      })
      .finally(() => setLoading(false));
  };

  const renderPanel = (
    tab: "review" | "place" | "saved" | "followers" | "following"
  ) => {
    switch (tab) {
      case "review":
        return <Posts id={id} />;
      case "place":
        return <Places id={id} />;
      case "saved":
        return <Saved id={id} />;
      case "followers":
        return <Followers id={id} />;
      case "following":
        return <Following id={id} />;
      default:
        return null;
    }
  };

  if (error) {
    return (
      <Section>
        <Styled.PlaceError>
          <img src={images.empty} alt="empty" />
          <p>Opps, người dùng này không tồn tại!</p>
        </Styled.PlaceError>
      </Section>
    );
  }

  return (
    <Section>
      <Styled.ProfileWrapper>
        <Info
          followed={followed}
          follow={handleFollow}
          unFollow={handleUnFollow}
          showEdit={() => setIsModal(true)}
        />

        <Styled.ProfileNavigationWrap>
          <Styled.ProfileNavigation>
            <ul>
              <li
                onClick={() => setTab("review")}
                className={classNames({ active: tab === "review" })}
              >
                <span>Đánh giá</span>
              </li>
              <li
                onClick={() => setTab("place")}
                className={classNames({ active: tab === "place" })}
              >
                <span>Địa điểm</span>
              </li>
              <li
                onClick={() => setTab("saved")}
                className={classNames({ active: tab === "saved" })}
              >
                <span>Đã lưu</span>
              </li>
              <li
                onClick={() => setTab("following")}
                className={classNames({ active: tab === "following" })}
              >
                <span>Đang theo dõi</span>
              </li>
              <li
                onClick={() => setTab("followers")}
                className={classNames({ active: tab === "followers" })}
              >
                <span>Người theo dõi</span>
              </li>
            </ul>
            <ul>
              {user?._id !== profile?._id &&
                (followed ? (
                  <li>
                    <button className="active" onClick={handleUnFollow}>
                      <i className="bx bxs-user-check"></i>
                      Đang theo dõi
                    </button>
                  </li>
                ) : (
                  <li>
                    <button className="follow" onClick={handleFollow}>
                      <i className="bx bx-rss"></i>
                      Theo dõi
                    </button>
                  </li>
                ))}
              {user?._id === profile?._id && (
                <li>
                  <button onClick={() => setIsModal(true)}>
                    <i className="bx bx-pencil"></i> Chỉnh sửa
                  </button>
                </li>
              )}
            </ul>
          </Styled.ProfileNavigation>
        </Styled.ProfileNavigationWrap>

        <Styled.ProfileContainer>
          <LeftPane />
          <Styled.ProfileRight>{renderPanel(tab)}</Styled.ProfileRight>
        </Styled.ProfileContainer>
      </Styled.ProfileWrapper>
      {isModal && user && (
        <ProfileModal
          profile={user}
          onClose={() => setIsModal(false)}
          mode="update"
        />
      )}
    </Section>
  );
};

export default Profile;
