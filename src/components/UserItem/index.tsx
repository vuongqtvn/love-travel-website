import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { openAuth } from "../../pages/Auth/authSlice";
import { followUser, unFollowUser } from "../../pages/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ImageLazy from "../ImageLazy";

import * as Styled from "./styles";

const UserItem = ({ user }: { user: any }) => {
  const auth = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const [followed, setFollowed] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (auth?.user?.following) {
      if (auth?.user?.following?.find((item: any) => item._id === user._id)) {
        setFollowed(true);
      }
    }

    return () => {
      setFollowed(false);
    };
  }, [auth?.user?.following, user._id]);

  const handleFollow = () => {
    if (loading) return;

    if (!user) return;

    if (!auth.user) {
      return dispatch(openAuth());
    }

    setLoading(true);
    dispatch(followUser(user))
      .unwrap()
      .then(() => {
        setFollowed(true);
      })
      .finally(() => setLoading(false));
  };
  const handleUnFollow = () => {
    if (loading) return;

    if (!user) return;

    if (!auth.user) {
      return dispatch(openAuth());
    }

    setLoading(true);
    dispatch(unFollowUser(user))
      .unwrap()
      .then(() => {
        setFollowed(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Styled.UserItemWrap>
      <ImageLazy
        hover={false}
        src={user.avatar}
        alt={user.name}
        className="avatar"
      />
      <div className="info">
        <h4 className="name" onClick={() => navigate(`/profile/${user._id}`)}>
          {user.name || <Skeleton />}
          {user.role === "admin" && <i className="bx bxs-check-circle"></i>}
        </h4>
        <div className="desc">
          <span>
            <b>{user?.posts?.length || 0} </b>
            Đánh giá
            {auth.user?._id !== user?._id && (
              <React.Fragment>
                {followed ? (
                  <button className="active" onClick={handleUnFollow}>
                    <i className="bx bxs-user-check"></i> Đang theo dõi
                  </button>
                ) : (
                  <button onClick={handleFollow}>
                    <i className="bx bx-rss"></i> Theo dõi
                  </button>
                )}
              </React.Fragment>
            )}
          </span>
        </div>
      </div>
    </Styled.UserItemWrap>
  );
};

export default UserItem;
