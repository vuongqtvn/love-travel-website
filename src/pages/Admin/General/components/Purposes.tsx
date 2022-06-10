import { useEffect, useState } from "react";
import * as Icon from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Select,
  Space,
  Upload,
} from "antd";
import moment from "moment";

import * as Style from "./styles";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { purposeApi } from "../../../../api";
import { setGeneral } from "../generalAdminSlice";
import { imageUpload } from "../../../../utils/imageUpload";
import { imageShow, videoShow } from "../../../../utils/mediaShow";
import { Wrapper } from "../styles";

type Props = {
  isShowModal: "create" | "update" | null;
  setIsShowModal: any;
  data: any;
};
function ModifyAccountModal({ data, isShowModal, setIsShowModal }: Props) {
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<any>(null);
  const [modifyAccountForm] = Form.useForm();

  const { places, purposes } = useAppSelector((state) => state.adminGeneral);

  const dispatch = useAppDispatch();

  const handleUploadThumbnail = (value: any) => {
    if (!["image/png", "image/jpeg"].includes(value.file.type)) {
      return message.error("Ảnh bìa không đúng định dạng!");
    }
    if (value.file.size > 1024 * 1024 * 5) {
      return message.error("File ảnh quá nặng!");
    }

    setThumbnail([value.file]);
  };

  useEffect(() => {
    if (data && isShowModal === "update") {
      modifyAccountForm.setFieldsValue(data);
      setThumbnail([{ url: data.image }]);
    } else {
      setThumbnail(null);
      modifyAccountForm.resetFields();
    }
    return () => {
      modifyAccountForm.resetFields();
    };
  }, [data, isShowModal, modifyAccountForm]);

  const handleSubmitForm = async (values: any) => {
    if (isShowModal === "update") {
      if (!thumbnail) {
        return message.error("Vui lòng chọn ảnh!");
      }
      let thumb: any = [];

      setLoading(true);

      if (thumbnail.length > 0) {
        thumb = Boolean(thumbnail?.[0].url)
          ? thumbnail
          : await imageUpload(thumbnail);
      }

      purposeApi
        .updatePurpose(data._id, {
          ...data,
          ...values,
          places: values.places ? values.places : [],
          image: thumb?.[0]?.url,
        })
        .then((res: any) => {
          message.success("Cập nhật thành công!");
          setIsShowModal(null);
          setLoading(false);
          const result = [...purposes];
          const index = result.findIndex((item) => item._id === data._id);
          result.splice(index, 1, res.purpose);
          dispatch(
            setGeneral({
              purposes: result,
            })
          );
          modifyAccountForm.resetFields();
        })
        .catch(() => {
          setIsShowModal(null);
          setLoading(false);
          modifyAccountForm.resetFields();
        });
    } else if (isShowModal === "create") {
      if (!thumbnail) {
        return message.error("Vui lòng chọn ảnh!");
      }
      let thumb: any = [];

      setLoading(true);

      if (thumbnail.length > 0) {
        thumb = await imageUpload(thumbnail);
      }

      purposeApi
        .createPurpose({
          ...values,
          places: values.places ? values.places : [],
          image: thumb[0].url,
        })
        .then((res: any) => {
          message.success("tạo mới thành công!");
          setIsShowModal(null);
          setLoading(false);
          dispatch(
            setGeneral({
              purposes: [...purposes, res.purpose],
            })
          );
          modifyAccountForm.resetFields();
        })
        .catch(() => {
          setIsShowModal(null);
          setLoading(false);
          modifyAccountForm.resetFields();
        });
    }
  };

  return (
    <Modal
      title={isShowModal === "create" ? "Thêm mới" : "Cập nhật"}
      visible={Boolean(isShowModal)}
      destroyOnClose
      onCancel={() => setIsShowModal(null)}
      footer={[
        <Button key="back" onClick={() => setIsShowModal(null)}>
          Hủy
        </Button>,
        <Button
          key="back"
          type="primary"
          loading={loading}
          onClick={() => modifyAccountForm.submit()}
        >
          Lưu
        </Button>,
      ]}
    >
      <Form
        form={modifyAccountForm}
        name="modify-categories"
        layout="vertical"
        onFinish={(values) => handleSubmitForm(values)}
      >
        <Form.Item
          label="Tên mục đích: "
          name="name"
          rules={[
            {
              required: true,
              message: "vui lòng nhập trường này!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div style={{ marginBottom: 16 }}>
          <div style={{ marginBottom: 4 }}>
            <p>Ảnh</p>
          </div>
          <Upload
            accept="image/*"
            listType="picture"
            beforeUpload={() => false}
            onChange={(value) => handleUploadThumbnail(value)}
            showUploadList={false}
          >
            <Button icon={<Icon.CameraOutlined />}>Thêm ảnh</Button>
          </Upload>

          <Wrapper>
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
                        icon={<Icon.CloseOutlined />}
                        onClick={() => setThumbnail(null)}
                        type="primary"
                        danger
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Wrapper>
        </div>
        <Form.Item label="Mô tả: " name="description">
          <Input />
        </Form.Item>
        <Form.Item label="Địa điểm: " name="places">
          <Select mode="multiple">
            {places.map((place) => (
              <Select.Option key={place._id} value={place._id}>
                {place.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

function Purposes() {
  const { loading, purposes } = useAppSelector((state) => state.adminGeneral);

  const [isModalVisible, setIsModalVisible] = useState<
    "create" | "update" | null
  >(null);
  const [data, setData] = useState(null);

  const dispatch = useAppDispatch();

  const tableColumn = [
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (value: string) => (
        <Style.ShowImage src={value}></Style.ShowImage>
      ),
    },
    {
      title: "Tên tiện ích",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả tiện ích",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },

    {
      title: "Địa điểm",
      dataIndex: "places",
      key: "places",
      ellipsis: true,
      render: (value: any) => `có ${value.length} Địa điểm`,
    },

    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Ngày sửa",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (value: any) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },

    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Button
              icon={<Icon.FormOutlined />}
              type="primary"
              ghost
              onClick={() => {
                setIsModalVisible("update");
                setData(record);
              }}
            >
              Sửa
            </Button>
            <Popconfirm
              title="Bạn có muốn xoá mục dích này?"
              onConfirm={() => {
                purposeApi.deletePurpose(record._id).then(() => {
                  dispatch(
                    setGeneral({
                      purposes: [...purposes].filter(
                        (item) => item._id !== record._id
                      ),
                    })
                  );
                  message.success(`đã xoá mục dích ${record.name}`);
                });
              }}
              onCancel={() => null}
              okText="Có"
              cancelText="Không"
            >
              <Button icon={<Icon.DeleteOutlined />} danger>
                Xóa
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const tableData = purposes.map((item: any, index: any) => {
    return {
      key: index,
      ...item,
    };
  });

  return (
    <Style.AdminPlaceWrap>
      <Style.CustomSpaceBox>
        <Style.Title>Quản lý mục đích địa điểm</Style.Title>
        <Style.CustomSpace>
          <Style.CustomButton
            type="primary"
            onClick={() => {
              setIsModalVisible("create");
              setData(null);
            }}
          >
            Thêm mới
          </Style.CustomButton>
        </Style.CustomSpace>
      </Style.CustomSpaceBox>
      <div>
        <Style.CustomTable
          size="small"
          scroll={{ x: 1200 }}
          columns={tableColumn}
          dataSource={tableData}
          loading={loading}
        />
      </div>
      <ModifyAccountModal
        data={data}
        isShowModal={isModalVisible}
        setIsShowModal={setIsModalVisible}
      />
    </Style.AdminPlaceWrap>
  );
}

export default Purposes;
