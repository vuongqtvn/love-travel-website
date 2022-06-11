import { CameraOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Space,
  Spin,
} from "antd";
import { useEffect, useRef, useState } from "react";

import * as Styled from "./styles";

import Upload from "antd/lib/upload/Upload";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "../../../../components";
import { timeList } from "../../../../constants/time";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { imageUpload } from "../../../../utils/imageUpload";
import { imageShow, videoShow } from "../../../../utils/mediaShow";
import MapBox from "../../../Admin/Place/features/AddPlace/components/MapBox";
import {
  clearPlace,
  editPlace,
  getAddPlaces,
  getLocation,
  getPlace,
} from "../../updatePlaceSlice";

const Contact = [
  {
    name: "phone",
    label: "Điện thoại",
    placeholder: "Nhập số điện thoại",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập địa chỉ email",
  },
  {
    name: "facebook",
    label: "Facebook",
    placeholder: "Nhập link Facebook",
  },
  {
    name: "instagram",
    label: "Instagram",
    placeholder: "Nhập link Instagram",
  },
  {
    name: "website",
    label: "Website",
    placeholder: "Nhập link Website",
  },
];

const EditPlace = () => {
  const navigate = useNavigate();
  const { loading, data, place } = useAppSelector((state) => state.updatePlace);
  const dispatch = useAppDispatch();
  const fileRef = useRef<any>();
  const [thumbnail, setThumbnail] = useState<any>(null);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [location, setLocation] = useState<any>(null);
  const [thumbnailMessage, setThumbnailMessage] = useState("");
  const [images, setImages] = useState<any>([]);
  const menuRef = useRef<any>();
  const [menu, setMenu] = useState<any>([]);

  const [form] = Form.useForm();

  const renderContactField = () => {
    return Contact.map((item, index) => (
      <Form.Item key={index} name={item.name} label={item.label}>
        <Input placeholder={item.placeholder} />
      </Form.Item>
    ));
  };

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

  const handleChangeImages = (e: any, type: "images" | "menu") => {
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

    switch (type) {
      case "images":
        setImages([...images, ...newImages]);
        break;
      case "menu":
        setMenu([...menu, ...newImages]);
        break;
      default:
        break;
    }
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
  const deleteMenu = (index: number) => {
    const newArr = [...menu];
    newArr.splice(index, 1);

    if (newArr.length === 0) {
      if (menuRef.current) {
        menuRef.current.value = null;
      }
    }

    setMenu(newArr);
  };

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getAddPlaces());
      dispatch(getPlace(id))
        .unwrap()
        .then((data: any) => {
          setImages(data.place.images);
          setMenu(data.place.menu);
          setThumbnail([{ url: data.place.thumbnail }]);
          setLocation(data.place.location);
        });
    }
    return () => {
      setImages([]);
      setMenu([]);
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
    let mediaMenu: any = [];

    const imgNewUrl = images?.filter((img: any) => !img.url);
    const imgOldUrl = images?.filter((img: any) => img.url);

    const menuNewUrl = menu?.filter((img: any) => !img.url);
    const menuOldUrl = menu?.filter((img: any) => img.url);

    setIsAdd(true);

    if (imgNewUrl.length > 0) {
      media = await imageUpload(imgNewUrl);
    }

    if (menuNewUrl.length > 0) {
      mediaMenu = await imageUpload(imgNewUrl);
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
          purposes: values.purposes ? values.purposes : [],
          categories: values.categories ? values.categories : [],
          thumbnail: thumb?.[0]?.url,
          images: [...imgOldUrl, ...media],
          menu: [...menuOldUrl, ...mediaMenu],
          location,
        },
      })
    )
      .unwrap()
      .then(() => {
        message.success("Cập nhật địa điểm thành công!");
        navigate("/");
        setIsAdd(false);
      })
      .catch((error: any) => {
        form.resetFields();
        setIsAdd(false);
      });
  };

  return (
    <Spin spinning={isAdd}>
      <Styled.AddPlace>
        <Box
          style={{
            position: "sticky",
            top: 0,
            padding: 15,
            background: "#fff",
            zIndex: 100,
            borderBottom: "1px solid #ddd",
            marginBottom: 30,
          }}
          justifyContent="space-between"
        >
          <Styled.Title>Cập nhật địa điểm</Styled.Title>
          <Space>
            <Button type="default" onClick={() => navigate(-1)}>
              Hủy
            </Button>
            <Button type="primary" onClick={() => form.submit()}>
              Lưu
            </Button>
          </Space>
        </Box>

        <Row gutter={10}>
          <Col span={12}>
            {loading ? (
              <Spin />
            ) : (
              <Form
                layout="vertical"
                name="place-add"
                form={form}
                onFinish={handleSubmitForm}
              >
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
                      {data?.regions.map((region: any) => (
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
                      {data?.categories.map((category: any) => (
                        <Select.Option key={category._id} value={category._id}>
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
                      {data?.purposes.map((purpose: any) => (
                        <Select.Option key={purpose._id} value={purpose._id}>
                          {purpose.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item name="tags" label="Kiểu địa điểm">
                    <Select mode="multiple" placeholder="Chọn kiểu địa điểm">
                      {data?.tags.map((tag: any) => (
                        <Select.Option key={tag._id} value={tag._id}>
                          {tag.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item name="benefits" label="Tiện ích địa điểm">
                    <Select mode="multiple" placeholder="Chọn tiện ích">
                      {data?.benefits.map((benefit: any) => (
                        <Select.Option key={benefit._id} value={benefit._id}>
                          {benefit.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Thời gian mở cửa">
                    <Box alignItems="center" gap="10px">
                      <Form.Item
                        style={{ marginBottom: 0, flex: 1 }}
                        name={["time", "from"]}
                      >
                        <Select placeholder="Chọn thời gian mở cửa">
                          {timeList.map((time: any) => (
                            <Select.Option key={time.key} value={time.key}>
                              {time.label}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <span className="center">đến</span>
                      <Form.Item
                        style={{ marginBottom: 0, flex: 1 }}
                        name={["time", "to"]}
                      >
                        <Select placeholder="Chọn thời gian đống cửa">
                          {timeList.map((time: any) => (
                            <Select.Option key={time.key} value={time.key}>
                              {time.label}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Box>
                  </Form.Item>
                  <Form.Item label="Khoảng giá">
                    <Box alignItems="center" gap="10px">
                      <Form.Item
                        name={["price", "from"]}
                        style={{ marginBottom: 0, flex: 1 }}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          placeholder="Nhập giá thấp nhất"
                        />
                      </Form.Item>
                      <span className="center">đến</span>
                      <Form.Item
                        name={["price", "to"]}
                        style={{ marginBottom: 0, flex: 1 }}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          placeholder="Nhập giá cao nhất"
                        />
                      </Form.Item>
                    </Box>
                  </Form.Item>
                  {renderContactField()}
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
                            {img?.url ? (
                              <>
                                {img?.url?.match(/video/i)
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
                      onChange={(e) => handleChangeImages(e, "images")}
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
                          Ảnh menu địa điểm (nếu có):
                        </div>
                      </Space>
                    </div>
                    <Button
                      onClick={() => {
                        if (menuRef.current) {
                          menuRef.current.click();
                        }
                      }}
                      icon={<CameraOutlined />}
                    >
                      Thêm ảnh menu
                    </Button>
                    <input
                      ref={menuRef}
                      type="file"
                      accept="image/*"
                      hidden
                      multiple
                      onChange={(e) => handleChangeImages(e, "menu")}
                    />

                    <div className="show_images">
                      {menu.map((img: any, index: number) => (
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
                              onClick={() => deleteMenu(index)}
                              type="primary"
                              danger
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Col>

          <Col span={12}>
            <div style={{ height: 700 }}>
              {loading ? <Spin /> : <MapBox location={location} />}
            </div>
          </Col>
        </Row>
      </Styled.AddPlace>
    </Spin>
  );
};

export default EditPlace;
