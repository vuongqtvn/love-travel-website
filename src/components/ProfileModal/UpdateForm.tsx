import { Button, Input, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import { updateUser } from "../../pages/Profile/profileSlice";
import { useAppDispatch } from "../../redux/hooks";
import * as Styled from "./styles";

const UpdateForm = ({ profile, onClose }: { profile: any; onClose: any }) => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    address: "",
    story: "",
    gender: "male",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (profile) {
      setData({
        name: profile.name,
        mobile: profile.mobile,
        address: profile.address,
        story: profile.story,
        gender: profile.gender,
      });
    }
    return () => {
      setData({
        name: "",
        mobile: "",
        address: "",
        story: "",
        gender: "male",
      });
      setLoading(false);
    };
  }, [profile]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!data.name) {
      return message.error("Vui lòng nhập tên!");
    }
    setLoading(true);

    dispatch(updateUser(data))
      .unwrap()
      .then(() => {
        message.success("Chỉnh sửa thông tin cá nhân thành công.");
      })
      .finally(() => {
        setLoading(false);
        onClose();
      });
  };
  return (
    <React.Fragment>
      <Styled.ModalHeader>
        <div className="title">
          <h2>Cập nhật hồ sơ</h2>
        </div>
        <div className="close" onClick={onClose}>
          <i className="bx bx-x"></i>
        </div>
      </Styled.ModalHeader>
      <Styled.ModalBody>
        <Styled.ReviewForm>
          <div className="review-input">
            <h3 className="title">Tên hiển thị</h3>
            <Input
              value={data.name}
              onChange={(e: any) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
              placeholder="Nhập tên..."
            />
          </div>
          <div className="review-input">
            <h3 className="title">Số điện thoại</h3>
            <Input
              value={data.mobile}
              onChange={(e: any) =>
                setData({
                  ...data,
                  mobile: e.target.value,
                })
              }
              placeholder="Nhập số điện thoại..."
            />
          </div>
          <div className="review-input">
            <h3 className="title">Địa chỉ</h3>
            <Input
              value={data.address}
              onChange={(e: any) =>
                setData({
                  ...data,
                  address: e.target.value,
                })
              }
              placeholder="Nhập địa chỉ"
            />
          </div>
          <div className="review-input">
            <h3 className="title">Mô tả bản thân</h3>
            <Input.TextArea
              value={data.story}
              onChange={(e: any) =>
                setData({
                  ...data,
                  story: e.target.value,
                })
              }
              placeholder="Nhập nội dung đánh giá"
              autoSize={{ minRows: 4, maxRows: 6 }}
            />
          </div>
          <div className="review-input">
            <h3 className="title">Giới tính</h3>
            <Select
              value={data.gender}
              onChange={(value: any) =>
                setData({
                  ...data,
                  gender: value,
                })
              }
              style={{
                width: "100%",
              }}
              placeholder="Chọn giới tính"
            >
              <Select.Option key="male">Nam</Select.Option>
              <Select.Option key="female">Nữ</Select.Option>
            </Select>
          </div>
        </Styled.ReviewForm>
      </Styled.ModalBody>
      <Styled.ModalFooter>
        <Button
          onClick={handleSubmit}
          loading={loading}
          type="primary"
          shape="round"
        >
          Cập nhật thông tin
        </Button>
      </Styled.ModalFooter>
    </React.Fragment>
  );
};

export default UpdateForm;
