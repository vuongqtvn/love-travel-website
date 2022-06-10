import React from "react";
import Skeleton from "react-loading-skeleton";
import { useAppSelector } from "../../redux/hooks";
import ImageLazy from "../ImageLazy";

import * as Styled from "./styles";

const UserItem = ({ user }: { user: any }) => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <Styled.UserItemWrap>
      <ImageLazy
        hover={false}
        src={user.avatar}
        alt={user.name}
        className="avatar"
      />
      <div className="info">
        <h4 className="name">
          {user.name || <Skeleton />}
          {user.role === "admin" && <i className="bx bxs-check-circle"></i>}
        </h4>
        <div className="desc">
          <span>
            <b>{user?.posts?.length || 0} </b>
            Đánh giá
            {auth.user?._id !== user?._id && (
              <button>
                <i className="bx bx-rss"></i> Theo dõi
              </button>
            )}
          </span>
        </div>
      </div>
    </Styled.UserItemWrap>
  );
};

export default UserItem;
