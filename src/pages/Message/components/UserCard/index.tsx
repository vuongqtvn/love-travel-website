import classNames from "classnames";
import moment from "moment";
import React from "react";
import { Box } from "../../../../components";
import * as Styled from "./styles";

const UserCard = ({
  user,
  onClick,
  message,
  active = false,
}: {
  onClick: any;
  user: any;
  message?: boolean;
  active?: boolean;
}) => {
  return (
    <Styled.UserItemWrap
      className={classNames({ active: active })}
      onClick={onClick}
    >
      <img src={user.avatar} alt={user.name} className="avatar" />

      <div className="info">
        <h4 className="name">
          {user.name}
          {user.role === "admin" && <i className="bx bxs-check-circle"></i>}
        </h4>
        {message && (
          <Box alignItems="center">
            <small className="message">
              {user.media.length ? (
                <i className="bx bx-image-alt"></i>
              ) : (
                user.text
              )}
            </small>
            <small className="date">{moment(user.createdAt).fromNow()}</small>
          </Box>
        )}
      </div>
    </Styled.UserItemWrap>
  );
};

export default UserCard;
