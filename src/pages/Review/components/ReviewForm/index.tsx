import React, { useRef, useState } from "react";
import { CloseOutlined, CameraOutlined } from "@ant-design/icons";
import * as Styled from "./styles";
import { Button, Input, message, Rate } from "antd";
import { colors } from "../../../../theme/colors";
import { imageShow, videoShow } from "../../../../utils/mediaShow";

const ReviewForm = () => {
  const desc = ["Tệ", "Khá tệ", "Trung bình", "Tốt", "Tuyệt vời"];

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
    if (images.length === 0) {
      return;
    }
    setContent("");
    setImages([]);
  };
  return (
    <Styled.ReviewForm>
      <div className="review-input">
        <h3>Xếp hạng của bạn</h3>
        <div className="rate-item">
          <div className="rate-item-cate">Vị trí</div>
          <Rate
            style={{ color: colors.primary, fontSize: 32 }}
            onChange={(value: number) => handleChange("ratePosition", value)}
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
          Thêm ảnh hoặc video
        </Button>
        <input
          ref={fileRef}
          type="file"
          multiple
          accept="video/*,image/*"
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
      <div>
        <Button
          onClick={handleSubmit}
          size="large"
          type="primary"
          shape="round"
        >
          Gửi đánh giá của bạn
        </Button>
      </div>
    </Styled.ReviewForm>
  );
};

export default ReviewForm;
