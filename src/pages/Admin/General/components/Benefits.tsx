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
} from "antd";
import moment from "moment";

import * as Style from "./styles";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { benefitApi } from "../../../../api";
import { setGeneral } from "../generalAdminSlice";

type Props = {
  isShowModal: "create" | "update" | null;
  setIsShowModal: any;
  data: any;
};
function ModifyAccountModal({ data, isShowModal, setIsShowModal }: Props) {
  const [loading, setLoading] = useState(false);
  const [modifyAccountForm] = Form.useForm();

  const { places, benefits } = useAppSelector((state) => state.adminGeneral);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      modifyAccountForm.setFieldsValue(data);
    }
    return () => {
      modifyAccountForm.resetFields();
    };
  }, [data, modifyAccountForm]);

  const handleSubmitForm = (values: any) => {
    if (isShowModal === "update") {
      setLoading(true);
      benefitApi
        .updateBenefit(data._id, {
          ...data,
          ...values,
          places: values.places ? values.places : [],
        })
        .then((res: any) => {
          message.success("Cập nhật thành công!");
          setIsShowModal(null);
          setLoading(false);
          const result = [...benefits];
          const index = result.findIndex((item) => item._id === data._id);
          result.splice(index, 1, res.benefit);
          dispatch(
            setGeneral({
              benefits: result,
            })
          );
          modifyAccountForm.resetFields();
        })
        .catch(() => {
          setIsShowModal(null);
          message.error("Cập nhật không thành công!");
          setLoading(false);
          modifyAccountForm.resetFields();
        });
    } else if (isShowModal === "create") {
      setLoading(true);
      benefitApi
        .createBenefit({
          ...values,
          places: values.places ? values.places : [],
        })
        .then((res: any) => {
          message.success("tạo mới thành công!");
          setIsShowModal(null);
          setLoading(false);
          dispatch(
            setGeneral({
              benefits: [...benefits, res.benefit],
            })
          );
          modifyAccountForm.resetFields();
        })
        .catch(() => {
          setIsShowModal(null);
          message.error("tạo mới không thành công!");
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
        name="modify-benefits"
        layout="vertical"
        onFinish={(values) => handleSubmitForm(values)}
      >
        <Form.Item
          label="Tên tiện ích: "
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

function Benefits() {
  const { loading, benefits } = useAppSelector((state) => state.adminGeneral);

  const [isModalVisible, setIsModalVisible] = useState<
    "create" | "update" | null
  >(null);
  const [data, setData] = useState(null);

  const dispatch = useAppDispatch();

  const tableColumn = [
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
              title="Bạn có muốn xoá tiện ích này?"
              onConfirm={() => {
                benefitApi
                  .deleteBenefit(record._id)
                  .then(() => {
                    dispatch(
                      setGeneral({
                        benefits: [...benefits].filter(
                          (item) => item._id !== record._id
                        ),
                      })
                    );
                    message.success(`đã xoá tiện ích ${record.name}`);
                  })
                  .catch(() => {
                    message.error(`Xoá tiện ích thất bại!`);
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

  const tableData = benefits.map((item: any, index: any) => {
    return {
      key: index,
      ...item,
    };
  });

  return (
    <Style.AdminPlaceWrap>
      <Style.CustomSpaceBox>
        <Style.Title>Quản lý tiện ích</Style.Title>
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

export default Benefits;
