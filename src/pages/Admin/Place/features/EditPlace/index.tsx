import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  Input,
  Button,
  message,
  Row,
  Col,
  Space,
  Select,
  Spin,
} from "antd";
import { CameraOutlined, CloseOutlined } from "@ant-design/icons";
import { imageShow, videoShow } from "../../../../../utils/mediaShow";
import { Scrollbars } from "react-custom-scrollbars-2";
import * as Styled from "./styles";
import MapBox from "../AddPlace/components/MapBox";
import Upload from "antd/lib/upload/Upload";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  getBenefits,
  getCategories,
  getPurposes,
  getRegions,
  getTags,
  getLocation,
  getPlace,
  editPlace,
  clearPlace,
} from "../../adminPlaceSlice";
import { imageUpload } from "../../../../../utils/imageUpload";
import path from "../../../../../constants/path";

const EditPlace = () => {
  const navigate = useNavigate();
  const { loading, benefits, categories, purposes, regions, tags, place } =
    useAppSelector((state) => state.adminPlace);
  const dispatch = useAppDispatch();
  const fileRef = useRef<any>();
  const [thumbnail, setThumbnail] = useState<any>(null);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [location, setLocation] = useState<any>(null);
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

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getRegions());
      dispatch(getCategories());
      dispatch(getTags());
      dispatch(getPurposes());
      dispatch(getBenefits());
      dispatch(getPlace(id))
        .unwrap()
        .then((data: any) => {
          setImages(data.place.images);
          setThumbnail([{ url: data.place.thumbnail }]);
          setLocation(data.place.location);
        });
    }
    return () => {
      setImages([]);
      setThumbnail(null);
      setLocation(null);
      dispatch(clearPlace());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (place) {
      form.setFieldsValue(place);
    }
  }, [form, place]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (address) {
        dispatch(getLocation(address))
          .unwrap()
          .then((data: any) => {
            const { location } = data;
            setLocation(location);
          });
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [address, dispatch]);

  const handleSubmitForm = async (values: any) => {
    if (!thumbnail) {
      return setThumbnailMessage("Vui lòng chọn ảnh bìa!");
    }
    let thumb: any = [];
    let media: any = [];

    const imgNewUrl = images?.filter((img: any) => !img.url);
    const imgOldUrl = images?.filter((img: any) => img.url);

    setIsAdd(true);

    if (imgNewUrl.length > 0) {
      media = await imageUpload(imgNewUrl);
    }

    if (thumbnail.length > 0) {
      thumb = Boolean(thumbnail?.[0].url)
        ? thumbnail
        : await imageUpload(thumbnail);
    }

    dispatch(
      editPlace({
        id,
        data: {
          ...values,
          tags: values.tags ? values.tags : [],
          benefits: values.benefits ? values.benefits : [],
          thumbnail: thumb?.[0]?.url,
          images: [...imgOldUrl, ...media],
          location,
        },
      })
    )
      .unwrap()
      .then(() => {
        message.success("Cập nhật địa điểm thành công!");
        navigate(path.admin.place);
      })
      .catch((error) => {
        message.error(error.message);
        form.resetFields();
      })
      .finally(() => setIsAdd(false));
  };

  return (
    <Styled.AddPlace>
      <Spin spinning={isAdd}>
        <Styled.CustomSpaceBox>
          <Styled.Title>Cập nhật địa điểm</Styled.Title>
          <Space>
            <Button type="default" onClick={() => navigate(-1)}>
              Hủy
            </Button>
            <Button type="primary" onClick={() => form.submit()}>
              Lưu
            </Button>
          </Space>
        </Styled.CustomSpaceBox>
        <div style={{ flex: 1 }}>
          <Row style={{ height: "100%" }} gutter={10}>
            <Col span={12}>
              {loading.get ? (
                <Spin />
              ) : (
                <Form
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  layout="vertical"
                  name="place-add"
                  form={form}
                  onFinish={handleSubmitForm}
                >
                  <Scrollbars style={{ flex: 1 }}>
                    <div style={{ paddingRight: 15 }}>
                      <Form.Item
                        name="name"
                        label="Tên địa điểm"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập tên địa điểm!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="region"
                        label="Khu vực"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn khu vực!",
                          },
                        ]}
                      >
                        <Select placeholder="Chọn khu vực">
                          {regions.map((region) => (
                            <Select.Option key={region._id} value={region._id}>
                              {region.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name="address"
                        label="Địa chỉ"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập địa chỉ!",
                          },
                        ]}
                      >
                        <Input onChange={(e) => setAddress(e.target.value)} />
                      </Form.Item>
                      <Form.Item name="description" label="Mô tả địa điểm">
                        <Input />
                      </Form.Item>
                      <Form.Item name="categories" label="Loại hình địa điểm">
                        <Select mode="multiple" placeholder="Chọn loại hình">
                          {categories.map((category) => (
                            <Select.Option
                              key={category._id}
                              value={category._id}
                            >
                              {category.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item name="purposes" label="Mục đích địa điểm">
                        <Select
                          mode="multiple"
                          placeholder="Chọn mục đích địa điểm"
                        >
                          {purposes.map((purpose) => (
                            <Select.Option
                              key={purpose._id}
                              value={purpose._id}
                            >
                              {purpose.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item name="tags" label="Kiểu địa điểm">
                        <Select
                          mode="multiple"
                          placeholder="Chọn kiểu địa điểm"
                        >
                          {tags.map((tag) => (
                            <Select.Option key={tag._id} value={tag._id}>
                              {tag.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item name="benefits" label="Tiện ích địa điểm">
                        <Select mode="multiple" placeholder="Chọn tiện ích">
                          {benefits.map((benefit) => (
                            <Select.Option
                              key={benefit._id}
                              value={benefit._id}
                            >
                              {benefit.name}
                            </Select.Option>
                          ))}
                        </Select>
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
                    </div>
                  </Scrollbars>
                </Form>
              )}
            </Col>

            <Col span={12}>
              {loading.get ? <Spin /> : <MapBox location={location} />}
            </Col>
          </Row>
        </div>
      </Spin>
    </Styled.AddPlace>
  );
};

export default EditPlace;
