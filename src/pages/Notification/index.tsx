import React from "react";
import { Modal, Typography } from "antd";
import { Box, ImageLazy, Section } from "../../components";
import {
  deleteAllNotifies,
  isReadNotify,
  setSound,
} from "../../redux/notifySlice";
import * as Icons from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import moment from "moment";
import { colors } from "../../theme/colors";
import { NotificationWrap } from "./styles";

const Notification = () => {
  const dispatch = useAppDispatch();
  const { data, sound } = useAppSelector((state) => state.notify);
  const navigate = useNavigate();

  const handleIsRead = (message: any) => {
    dispatch(isReadNotify({ message }));
  };

  const handleDeleteAll = () => {
    const newArr = data.filter((item: any) => item.isRead === false);
    if (newArr.length === 0) return;

    showPromiseConfirm();
  };

  const showPromiseConfirm = () => {
    Modal.confirm({
      zIndex: 10000,
      title: "Bạn có chắc chắn muốn xoá tất cả thông báo?",
      icon: <Icons.ExclamationCircleOutlined />,
      cancelText: "Không",
      okText: "Có",
      onOk() {
        return dispatch(deleteAllNotifies());
      },
      onCancel() {},
    });
  };

  return (
    <NotificationWrap>
      <Section>
        <Box flexDirection="column">
          <div className="header">
            <span className="title">Thông báo</span>
            <Box gap="10px" alignItems="center">
              <span className="check" onClick={handleDeleteAll}>
                <i className="bx bx-check-double"></i>
                {` Đánh dấu đã đọc`}
              </span>
              {sound ? (
                <span
                  style={{ color: colors.primary }}
                  className="check"
                  onClick={() => dispatch(setSound(false))}
                >
                  <i className="bx bxs-bell-ring"></i>
                </span>
              ) : (
                <span
                  style={{ color: colors.primary }}
                  className="check"
                  onClick={() => dispatch(setSound(true))}
                >
                  <i className="bx bxs-bell-off"></i>
                </span>
              )}
            </Box>
          </div>
          <Box flex={1} flexDirection="column">
            {data.length === 0 ? (
              <span className="empty">Không có thông báo nào</span>
            ) : (
              data.map((item: any, key: number) => (
                <Box
                  className={classNames("hover-item", {
                    "notify-not-read": item.isRead === false,
                  })}
                  style={{
                    padding: 10,
                    cursor: "pointer",
                    width: "100%",
                  }}
                  key={key}
                  gap="10px"
                  onClick={() => {
                    handleIsRead(item);
                    if (item.url) {
                      navigate(item.url);
                    }
                  }}
                >
                  <ImageLazy
                    hover={false}
                    src={item.user.avatar}
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "50%", flexShrink: 0 }}
                    alt={item.content}
                  />
                  <Box gap="10px" flex={1}>
                    <Box flexDirection="column" flex={1}>
                      <Typography.Title ellipsis level={5}>
                        {`${item.user.name} ${item.text}`}
                      </Typography.Title>
                      <Typography.Paragraph
                        style={{ marginBottom: 0 }}
                        ellipsis={{
                          rows: 2,
                        }}
                      >
                        {item.content}
                      </Typography.Paragraph>
                      <small>
                        <strong>
                          {item.createdAt
                            ? moment(item.createdAt).fromNow()
                            : moment(Date.now()).fromNow()}
                        </strong>
                      </small>
                    </Box>
                    {item.image && (
                      <ImageLazy
                        style={{ borderRadius: 5 }}
                        hover={false}
                        src={item.image}
                        width="70px"
                        height="70px"
                        alt={item.content}
                      />
                    )}
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Section>
    </NotificationWrap>
  );
};

export default Notification;
