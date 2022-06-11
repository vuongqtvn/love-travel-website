import React, { useLayoutEffect } from "react";
import { images } from "../../../../assets";
import { useAppSelector } from "../../../../redux/hooks";

import * as Styled from "./styles";

const Following = ({ id }: { id?: any }) => {
  const { profile } = useAppSelector((state) => state.profile);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled.ProfileUserReview>
      <React.Fragment>
        {profile?.following?.length === 0 ? (
          <Styled.ProfileEmpty>
            <img src={images.empty} alt="empty" />
            <span>Opps, chưa theo dõi người dùng nào!</span>
          </Styled.ProfileEmpty>
        ) : (
          <React.Fragment>
            {profile?.following?.data.map((user: any, key: any) => (
              <div key={key}>{user}</div>
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    </Styled.ProfileUserReview>
  );
};

export default Following;
