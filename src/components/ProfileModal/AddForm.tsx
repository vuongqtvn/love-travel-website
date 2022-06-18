import React, { useRef, useState } from "react";
import { CloseOutlined, CameraOutlined } from "@ant-design/icons";
import { Button, Input, message, Rate } from "antd";
import { PlaceType } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { imageUpload } from "../../utils/imageUpload";
import { reviewPlace } from "../../pages/Review/reviewSlice";
import * as Styled from "./styles";
import { colors } from "../../theme/colors";
import { imageShow, videoShow } from "../../utils/mediaShow";

const AddForm = ({ place, onClose }: { place: PlaceType; onClose: any }) => {
  const {
    auth,
    socket: { socket },
  } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const desc = ["Tệ", "Khá tệ", "Trung bình", "Tốt", "Tuyệt vời"];

  const [loading, setLoading] = useState<boolean>(false);
  const [rate, setRate] = useState({
    rateDrink: 5,
    ratePosition: 5,
    ratePrice: 5,
    rateService: 5,
    rateView: 5,
  });

  const handleChange = (name: string, value: number) => {
    setRate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fileRef = useRef<any>();
  const [content, setContent] = useState<any>("");
  const [images, setImages] = useState<any>([]);

  const handleChangeImages = (e: any) => {
    const files = [...e.target.files];
    let error = "";
    let newImages: any[] = [];
    files.forEach((file) => {
      if (!file) {
        error = "File không tồn tại.";
        return;
      }
      if (file.size > 1024 * 1024 * 5) {
        // 1mb
        error = "File có dùng lượng quá 5mb.";
        return;
      }

      return newImages.push(file);
    });

    if (error) {
      message.error(error);
    }
    setImages([...images, ...newImages]);
  };

  const deleteImages = (index: number) => {
    const newArr = [...images];
    newArr.splice(index, 1);

    if (newArr.length === 0) {
      if (fileRef.current) {
        fileRef.current.value = null;
      }
    }

    setImages(newArr);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (images.length === 0 && !content) {
      message.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (!place) {
      message.error("Vui lòng chọn địa điểm để review");
      return;
    }

    setLoading(true);
    const media = await imageUpload(images);
    dispatch(
      reviewPlace({
        data: {
          ...rate,
          place: place._id,
          images: media,
          content,
        },
        socket,
        user: auth.user,
      })
    )
      .unwrap()
      .then(() => {
        message.success("review địa điểm thành công!");
        setContent("");
        setImages([]);
        setLoading(false);
        onClose();
        navigate(0);
      })
      .catch((error: any) => {
        setLoading(false);
        onClose();
      });
  };
  return (
    <React.Fragment>
      <Styled.ModalHeader>
        <div className="title">
          <h2>Đánh giá {place.name || "địa điểm"}</h2>
        </div>
        <div className="close" onClick={onClose}>
          <i className="bx bx-x"></i>
        </div>
      </Styled.ModalHeader>
      <Styled.ModalBody>
        <Styled.ReviewForm>
          <div className="review-input">
            <h3>Xếp hạng của bạn</h3>
            <div className="rate-item">
              <div className="rate-item-cate">Vị trí</div>
              <Rate
                style={{ color: colors.primary, fontSize: 32 }}
                onChange={(value: number) =>
                  handleChange("ratePosition", value)
                }
                value={rate.ratePosition}
              />
              {rate.ratePosition ? (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>{desc[rate.ratePosition - 1]}</span>
                  </div>
                </div>
              ) : (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>Rất tệ</span>
                  </div>
                </div>
              )}
            </div>
            <div className="rate-item">
              <div className="rate-item-cate">Không gian</div>
              <Rate
                style={{ color: colors.primary, fontSize: 32 }}
                onChange={(value: number) => handleChange("rateView", value)}
                value={rate.rateView}
              />
              {rate.rateView ? (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>{desc[rate.rateView - 1]}</span>
                  </div>
                </div>
              ) : (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>Rất tệ</span>
                  </div>
                </div>
              )}
            </div>
            <div className="rate-item">
              <div className="rate-item-cate">Đồ uống</div>
              <Rate
                style={{ color: colors.primary, fontSize: 32 }}
                onChange={(value: number) => handleChange("rateDrink", value)}
                value={rate.rateDrink}
              />
              {rate.rateDrink ? (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>{desc[rate.rateDrink - 1]}</span>
                  </div>
                </div>
              ) : (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>Rất tệ</span>
                  </div>
                </div>
              )}
            </div>
            <div className="rate-item">
              <div className="rate-item-cate">Phục vụ</div>
              <Rate
                style={{ color: colors.primary, fontSize: 32 }}
                onChange={(value: number) => handleChange("rateService", value)}
                value={rate.rateService}
              />
              {rate.rateService ? (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>{desc[rate.rateService - 1]}</span>
                  </div>
                </div>
              ) : (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>Rất tệ</span>
                  </div>
                </div>
              )}
            </div>
            <div className="rate-item">
              <div className="rate-item-cate">Giá cả</div>
              <Rate
                style={{ color: colors.primary, fontSize: 32 }}
                onChange={(value: number) => handleChange("ratePrice", value)}
                value={rate.ratePrice}
              />
              {rate.ratePrice ? (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>{desc[rate.ratePrice - 1]}</span>
                  </div>
                </div>
              ) : (
                <div className="rate-type">
                  <div className="rate-type-text">
                    <span>Rất tệ</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="review-input">
            <h3 className="title">Đánh giá của bạn</h3>
            <Input.TextArea
              value={content}
              onChange={(e: any) => setContent(e.target.value)}
              placeholder="Nhập nội dung đánh giá"
              autoSize={{ minRows: 4, maxRows: 6 }}
            />
          </div>
          <div className="review-input">
            <Button
              onClick={() => {
                if (fileRef.current) {
                  fileRef.current.click();
                }
              }}
              icon={<CameraOutlined />}
            >
              Thêm ảnh
            </Button>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={handleChangeImages}
            />

            <div className="show_images">
              {images.map((img: any, index: number) => (
                <div key={index} className="media-show">
                  {img.camera ? (
                    imageShow(img.camera)
                  ) : img.url ? (
                    <>
                      {img.url.match(/video/i)
                        ? videoShow(img.url)
                        : imageShow(img.url)}
                    </>
                  ) : (
                    <>
                      {img.type.match(/video/i)
                        ? videoShow(URL.createObjectURL(img))
                        : imageShow(URL.createObjectURL(img))}
                    </>
                  )}
                  <div className="btn">
                    <Button
                      icon={<CloseOutlined />}
                      onClick={() => deleteImages(index)}
                      type="primary"
                      danger
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Styled.ReviewForm>
      </Styled.ModalBody>
      <Styled.ModalFooter>
        <Button
          onClick={handleSubmit}
          loading={loading}
          type="primary"
          shape="round"
          size="large"
        >
          Gửi đánh giá
        </Button>
      </Styled.ModalFooter>
    </React.Fragment>
  );
};

export default AddForm;
