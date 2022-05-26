import React, { useRef, useState } from "react";
import { Form, Input, Button, message, Row, Col, Space } from "antd";
import { CameraOutlined, CloseOutlined } from "@ant-design/icons";
import { imageShow, videoShow } from "../../../../../utils/mediaShow";
import { Scrollbars } from "react-custom-scrollbars-2";
import * as Styled from "./styles";
import MapBox from "./components/MapBox";
import Upload from "antd/lib/upload/Upload";

const AddPlace = () => {
  const fileRef = useRef<any>();
  const [thumbnail, setThumbnail] = useState<any>(null);
  const [thumbnailMessage, setThumbnailMessage] = useState("");
  const [images, setImages] = useState<any>([]);

  const [form] = Form.useForm();

  const handleUploadThumbnail = (value: any) => {
    if (!["image/png", "image/jpeg"].includes(value.file.type)) {
      return setThumbnailMessage("Ảnh bìa không đúng định dạng!");
    }
    if (value.file.size > 1024 * 1024 * 5) {
      return setThumbnailMessage("File ảnh quá nặng!");
    }

    setThumbnailMessage("");
    setThumbnail([value.file]);
  };

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

  const onFinish = () => {
    if (!thumbnail) {
      return setThumbnailMessage("Vui lòng chọn ảnh bìa!");
    }
    const values = form.getFieldsValue();

    const action = "create";

    if (action === "create") {
      // dispatch(
      //   createBlogAction({
      //     data: {
      //       ...values,
      //       thumb: uploadImages,
      //     },
      //   })
      // );
      console.log({
        ...values,
        thumbnail: thumbnail,
        images: images,
      });
    } else {
      // dispatch(
      //   editBlogAction({
      //     id: id,
      //     data: {
      //       ...values,
      //       thumb: uploadImages,
      //     },
      //   })
      // );
    }
  };

  return (
    <Styled.AddPlace>
      <Row style={{ height: "100%" }} gutter={15}>
        <Col span={12}>
          <Scrollbars
            style={{ height: "100%", background: "red", overflow: "scroll" }}
          ></Scrollbars>
        </Col>
        {/* <Col span={12}>
          <Form
            layout="vertical"
            name="place-add"
            onFinish={onFinish}
            form={form}
            // initialValues={id ? blogDetail.data : {}}
          >
            <Form.Item
              name="name"
              label="Tên địa điểm"
              rules={[
                { required: true, message: "Vui lòng nhập tên địa điểm!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Vị trí"
              rules={[{ required: true, message: "Vui lòng chọn vị trí!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Mô tả địa điểm">
              <Input />
            </Form.Item>
            <div style={{ marginBottom: 16 }}>
              <div style={{ marginBottom: 4 }}>
                <Space size={0}>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                      color: "#ff4d4f",
                      fontSize: "14px",
                      fontFamily: "SimSun, sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    *
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Ảnh ảnh bìa địa điểm:
                  </div>
                </Space>
              </div>
              <Upload
                accept="image/*"
                listType="picture"
                beforeUpload={() => false}
                onChange={(value) => handleUploadThumbnail(value)}
                showUploadList={false}
              >
                <Button icon={<CameraOutlined />}>Thêm ảnh</Button>
              </Upload>

              {thumbnail && (
                <div className="show_images">
                  {thumbnail.map((img: any, index: number) => (
                    <div key={index} className="media-show">
                      {img.url ? (
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
                          onClick={() => setThumbnail(null)}
                          type="primary"
                          danger
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {thumbnailMessage && (
                <div style={{ color: "#ff4d4f", padding: "5px" }}>
                  {thumbnailMessage}
                </div>
              )}
            </div>
            <div>
              <div style={{ marginBottom: 4 }}>
                <Space size={0}>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                      color: "#ff4d4f",
                      fontSize: "14px",
                      fontFamily: "SimSun, sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    *
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Ảnh ảnh về địa điểm:
                  </div>
                </Space>
              </div>
              <Button
                onClick={() => {
                  if (fileRef.current) {
                    fileRef.current.click();
                  }
                }}
                icon={<CameraOutlined />}
              >
                Thêm ảnh địa điểm
              </Button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                multiple
                onChange={handleChangeImages}
              />

              <div className="show_images">
                {images.map((img: any, index: number) => (
                  <div key={index} className="media-show">
                    {img.url ? (
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
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: "Vui lòng nhập tên địa điểm!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button shape="round" type="primary" htmlType="submit">
                Thêm địa điểm
              </Button>
            </Form.Item>
          </Form>
        </Col> */}
        <Col span={12}>
          <MapBox />
        </Col>
      </Row>
    </Styled.AddPlace>
  );
};

export default AddPlace;
