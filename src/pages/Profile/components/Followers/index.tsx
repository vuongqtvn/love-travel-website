import React, { useLayoutEffect } from "react";
import { images } from "../../../../assets";
import { UserItem } from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";

import * as Styled from "./styles";

const Followers = ({ id }: { id?: any }) => {
  const { profile } = useAppSelector((state) => state.profile);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled.ProfileUserReview>
      <div className="box">
        {profile?.followers?.length === 0 ? (
          <Styled.ProfileEmpty>
            <img src={images.empty} alt="empty" />
            <span>Opps, chưa có người theo dõi nào!</span>
          </Styled.ProfileEmpty>
        ) : (
          <React.Fragment>
            {profile?.followers?.map((user: any, key: any) => (
              <UserItem key={key} user={user} />
            ))}
          </React.Fragment>
        )}
      </div>
    </Styled.ProfileUserReview>
  );
};

export default Followers;
