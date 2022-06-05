import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Spin,
  Upload,
} from "antd";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { PlusOutlined, CameraOutlined } from "@ant-design/icons";

import * as Styled from "./styles";
import { addPlace, getAddPlaces, getLocation } from "../../addPlaceSlice";
import { imageUpload } from "../../../../utils/imageUpload";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay } from "../../../../components";
import { timeList } from "../../../../constants/time";

const InfoBasic = [
  {
    name: "name",
    label: "Tên quán",
    placeholder: "Nhập tên quán",
    option: false,
    require: true,
  },
  {
    name: "region",
    label: "Khu vực",
    placeholder: "Chọn 1 quận",
    option: true,
    require: true,
  },
  {
    name: "address",
    label: "Địa chỉ",
    placeholder: "Nhập địa chỉ cụ thể",
    option: false,
    require: true,
  },
  {
    name: "description",
    label: "Giới thiệu",
    placeholder: "Nhập giới thiệu về quán",
    option: false,
    require: false,
  },
];

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

const AddForm = () => {
  const { data, loading } = useAppSelector((state) => state.addPlace);

  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [fileList, setFileList] = useState<any>({
    thumbnail: [],
    images: [],
    menu: [],
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getAddPlaces());
  }, [dispatch]);

  const renderInfoField = () => {
    return InfoBasic.map((item, index) => (
      <Form.Item
        key={index}
        name={item.name}
        label={item.label}
        rules={[
          {
            required: item.require,
            message: "Trường này là bắt buộc",
          },
        ]}
      >
        {!item.option ? (
          <Input placeholder={item.placeholder} />
        ) : (
          <Select placeholder={item.placeholder}>
            {data?.regions.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        )}
      </Form.Item>
    ));
  };

  const renderContactField = () => {
    return Contact.map((item, index) => (
      <Form.Item key={index} name={item.name} label={item.label}>
        <Input placeholder={item.placeholder} />
      </Form.Item>
    ));
  };

  const handleUploadImages = (value: any, name: string) => {
    if (!["image/png", "image/jpeg"].includes(value.file.type)) {
      return message.error("Ảnh bìa không đúng định dạng!");
    }
    if (value.file.size > 1024 * 1024 * 5) {
      return message.error("File ảnh quá nặng!");
    }
    switch (name) {
      case "thumbnail":
        setFileList({
          ...fileList,
          thumbnail: value.fileList,
        });
        break;
      case "images":
        setFileList({
          ...fileList,
          images: value.fileList,
        });
        break;
      case "menu":
        setFileList({
          ...fileList,
          menu: value.fileList,
        });
        break;
    }
  };

  const onFinish = async (values: any) => {
    if (fileList.thumbnail.length === 0) {
      return message.error("Vui lòng chọn ảnh bìa!");
    }
    let thumbnail: any = [];
    let images: any = [];
    let menu: any = [];
    let location: any;

    setIsAdd(true);

    if (values.address) {
      dispatch(getLocation(values.address))
        .unwrap()
        .then((data: any) => {
          location = data.location;
        });
    }

    if (fileList.images.length > 0) {
      const media = fileList.images.map((item: any) => item.originFileObj);
      images = await imageUpload(media);
    }
    if (fileList.thumbnail.length > 0) {
      const media = fileList.thumbnail.map((item: any) => item.originFileObj);
      thumbnail = await imageUpload(media);
    }
    if (fileList.menu.length > 0) {
      const media = fileList.menu.map((item: any) => item.originFileObj);
      menu = await imageUpload(media);
    }

    dispatch(
      addPlace({
        ...values,
        tags: values.tags ? values.tags : [],
        benefits: values.benefits ? values.benefits : [],
        purposes: values.purposes ? values.purposes : [],
        categories: values.categories ? values.categories : [],
        thumbnail: thumbnail[0].url,
        images,
        menu,
        location,
      })
    )
      .unwrap()
      .then(() => {
        message.success("Thêm địa điểm thành công, chờ xét duyệt.");
        setIsAdd(false);
        setFileList({
          thumbnail: [],
          images: [],
          menu: [],
        });
        navigate("/");
      })
      .catch((error) => {
        message.error(error.message);
        form.resetFields();
        setFileList({
          thumbnail: [],
          images: [],
          menu: [],
        });
        setIsAdd(false);
      });
  };

  const layout = {
    labelCol: { xs: { span: 24 }, sm: { span: 4 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 20 } },
  };
  return (
    <React.Fragment>
      {isAdd && <LoadingOverlay />}

      <Spin spinning={loading}>
        <Form
          {...layout}
          labelAlign="left"
          form={form}
          name="add-place"
          onFinish={onFinish}
          initialValues={{
            time: {
              from: "08:00",
              to: "23:00",
            },
            price: {
              from: 10000,
              to: 100000,
            },
          }}
        >
          <Styled.FormSection>
            <div className="title">
              <h2>Thông tin cơ bản</h2>
            </div>
            <div className="content">{renderInfoField()}</div>
          </Styled.FormSection>
          <Styled.FormSection>
            <div className="title">
              <h2>Thông tin khác</h2>
            </div>
            <div className="content">
              <Form.Item label="Thời gian mở cửa" style={{ marginBottom: 0 }}>
                <Form.Item
                  name={["time", "from"]}
                  style={{ display: "inline-block", width: "calc(50% - 25px)" }}
                >
                  <Select placeholder="Chọn thời gian mở cửa">
                    {timeList.map((time) => (
                      <Select.Option key={time.key} value={time.key}>
                        {time.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <span className="center">đến</span>
                <Form.Item
                  name={["time", "to"]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 25px)",
                  }}
                >
                  <Select placeholder="Chọn thời gian đống cửa">
                    {timeList.map((time) => (
                      <Select.Option key={time.key} value={time.key}>
                        {time.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item>
              <Form.Item label="Khoảng giá" style={{ marginBottom: 0 }}>
                <Form.Item
                  name={["price", "from"]}
                  style={{ display: "inline-block", width: "calc(50% - 25px)" }}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Nhập giá thấp nhất"
                  />
                </Form.Item>
                <span className="center">đến</span>
                <Form.Item
                  name={["price", "to"]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 25px)",
                  }}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Nhập giá cao nhất"
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item name="categories" label="Loại hình địa điểm">
                <Select mode="multiple" placeholder="Chọn loại hình">
                  {data?.categories.map((category) => (
                    <Select.Option key={category._id} value={category._id}>
                      {category.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="purposes" label="Mục đích địa điểm">
                <Select mode="multiple" placeholder="Chọn mục đích địa điểm">
                  {data?.purposes.map((purpose) => (
                    <Select.Option key={purpose._id} value={purpose._id}>
                      {purpose.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="tags" label="Kiểu địa điểm">
                <Select mode="multiple" placeholder="Chọn kiểu địa điểm">
                  {data?.tags.map((tag) => (
                    <Select.Option key={tag._id} value={tag._id}>
                      {tag.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="benefits" label="Tiện ích địa điểm">
                <Select mode="multiple" placeholder="Chọn tiện ích">
                  {data?.benefits.map((benefit) => (
                    <Select.Option key={benefit._id} value={benefit._id}>
                      {benefit.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Styled.FormSection>
          <Styled.FormSection>
            <div className="title">
              <h2>Thông tin liên hệ</h2>
            </div>
            <div className="content">{renderContactField()}</div>
          </Styled.FormSection>
          <Styled.FormSection>
            <div className="title">
              <h2>Ảnh bìa</h2>
            </div>
            <div className="content">
              <Upload
                accept="image/*"
                beforeUpload={() => false}
                onChange={(value) => handleUploadImages(value, "thumbnail")}
                onPreview={() => false}
                listType="picture-card"
                fileList={fileList.thumbnail}
                maxCount={1}
              >
                <div>
                  <CameraOutlined />
                  <div style={{ marginTop: 8 }}>Thêm ảnh</div>
                </div>
              </Upload>
            </div>
          </Styled.FormSection>
          <Styled.FormSection>
            <div className="title">
              <h2>Hình ảnh</h2>
            </div>
            <div className="content">
              <Upload
                accept="image/*"
                multiple
                beforeUpload={() => false}
                onChange={(value) => handleUploadImages(value, "images")}
                onPreview={() => false}
                listType="picture-card"
                fileList={fileList.images}
                maxCount={10}
              >
                <div>
                  <CameraOutlined />
                  <div style={{ marginTop: 8 }}>Thêm ảnh</div>
                </div>
              </Upload>
            </div>
          </Styled.FormSection>
          <Styled.FormSection>
            <div className="title">
              <h2>Menu</h2>
            </div>
            <div className="content">
              <Upload
                accept="image/*"
                multiple
                beforeUpload={() => false}
                onChange={(value) => handleUploadImages(value, "menu")}
                onPreview={() => false}
                listType="picture-card"
                fileList={fileList.menu}
                maxCount={10}
              >
                <div>
                  <CameraOutlined />
                  <div style={{ marginTop: 8 }}>Thêm ảnh</div>
                </div>
              </Upload>
            </div>
          </Styled.FormSection>
          <Form.Item style={{ marginTop: 16 }} wrapperCol={{ span: 24 }}>
            <Button
              size="large"
              block
              shape="round"
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
            >
              Thêm địa điểm
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </React.Fragment>
  );
};

export default AddForm;
