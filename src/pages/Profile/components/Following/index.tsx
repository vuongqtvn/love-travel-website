import React, { useLayoutEffect } from "react";
import { images } from "../../../../assets";
import { UserItem, UserItemLoading } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";

import * as Styled from "./styles";

const Following = ({ id }: { id?: any }) => {
  const { profile, loading } = useAppSelector((state) => state.profile);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled.ProfileUserReview>
      <div className="box">
        {loading ? (
          <React.Fragment>
            {[1, 2, 3, 4, 5].map((key: any) => (
              <UserItemLoading key={key} />
            ))}
          </React.Fragment>
        ) : profile?.following?.length === 0 ? (
          <Styled.ProfileEmpty>
            <img src={images.empty} alt="empty" />
            <span>Opps, chưa theo dõi người dùng nào!</span>
          </Styled.ProfileEmpty>
        ) : (
          <React.Fragment>
            {profile?.following?.map((user: any, key: any) => (
              <UserItem key={key} user={user} />
            ))}
          </React.Fragment>
        )}
      </div>
    </Styled.ProfileUserReview>
  );
};

export default Following;
