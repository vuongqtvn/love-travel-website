import React from "react";
import { message, Skeleton, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import * as Styled from "./styles";
import { updateUser } from "../../profileSlice";
import { imageUpload } from "../../../../utils/imageUpload";

const Info = ({
  showEdit,
  followed,
  follow,
  unFollow,
}: {
  showEdit: any;
  followed: any;
  follow: any;
  unFollow: any;
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const { profile } = useAppSelector((state) => state.profile);

  const dispatch = useAppDispatch();

  const handleUploadAvatar = (value: any) => {
    if (!["image/png", "image/jpeg"].includes(value.file.type)) {
      return message.error("Ảnh bìa không đúng định dạng!");
    }
    if (value.file.size > 1024 * 1024 * 5) {
      return message.error("File ảnh quá nặng!");
    }
    imageUpload([value.file]).then((data) => {
      dispatch(
        updateUser({
          avatar: data?.[0]?.url,
        })
      );
    });
  };

  return (
    <Styled.ProfileInfoBox>
      <Styled.ProfileInfoContainer>
        <Styled.ProfileInfoHeader>
          <Styled.ProfileInfo>
            <div className="avatar-wrap">
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${profile?.avatar})`,
                }}
              ></div>
              {profile?._id === user?._id && (
                <ImgCrop
                  shape="round"
                  modalTitle="Chỉnh sửa ảnh đại diện"
                  rotate
                >
                  <Upload
                    accept="image/*"
                    itemRender={() => null}
                    beforeUpload={() => false}
                    onChange={(value) => handleUploadAvatar(value)}
                    onPreview={() => false}
                    maxCount={1}
                  >
                    <div className="upload">
                      <i className="bx bxs-camera"></i>
                    </div>
                  </Upload>
                </ImgCrop>
              )}
            </div>
            <h1 className="username">
              {profile?.name || <Skeleton.Input />}

              {profile?.role === "admin" && (
                <i className="bx bxs-check-circle"></i>
              )}
            </h1>
            <div className="action">
              <ul>
                {user?._id !== profile?._id &&
                  (followed ? (
                    <li>
                      <button className="active" onClick={unFollow}>
                        <i className="bx bxs-user-check"></i>
                        Đang theo dõi
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button className="follow" onClick={follow}>
                        <i className="bx bx-rss"></i>
                        Theo dõi
                      </button>
                    </li>
                  ))}
                {user?._id === profile?._id && (
                  <li>
                    <button onClick={showEdit}>
                      <i className="bx bx-pencil"></i> Chỉnh sửa
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </Styled.ProfileInfo>
        </Styled.ProfileInfoHeader>
      </Styled.ProfileInfoContainer>
    </Styled.ProfileInfoBox>
  );
};

export default Info;
