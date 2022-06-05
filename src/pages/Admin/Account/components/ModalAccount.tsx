import { useEffect } from "react";
import { Button, Form, message, Modal, Select } from "antd";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { updateAccount } from "../accountAdminSlice";

type Props = {
  isShowModal: any;
  setIsShowModal: any;
  data: any;
};
function ModifyAccountModal({ data, isShowModal, setIsShowModal }: Props) {
  const { user } = useAppSelector((state) => state.auth);
  const { loading } = useAppSelector((state) => state.adminAccount);
  const [modifyAccountForm] = Form.useForm();

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
    dispatch(
      updateAccount({
        id: data._id,
        data: {
          ...data,
          ...values,
        },
      })
    )
      .unwrap()
      .then(() => {
        message.success("Cập nhật thành công!");
        setIsShowModal(false);
      })
      .catch(() => {
        setIsShowModal(false);
        message.error("Cập nhật không thành công!");
      });
  };

  return (
    <Modal
      title="Cập nhật tài khoản"
      visible={isShowModal}
      destroyOnClose
      onCancel={() => setIsShowModal(false)}
      footer={[
        <Button key="back" onClick={() => setIsShowModal(false)}>
          Hủy
        </Button>,
        <Button
          disabled={user?._id === data?._id}
          key="back"
          type="primary"
          loading={loading.updateAccount}
          onClick={() => modifyAccountForm.submit()}
        >
          Lưu
        </Button>,
      ]}
    >
      <Form
        form={modifyAccountForm}
        name="modify-Account"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        onFinish={(values) => handleSubmitForm(values)}
      >
        <Form.Item label="Quyền: " name="role">
          <Select disabled={user?._id === data?._id}>
            <Select.Option value="user">User</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Trạng thái: " name="status">
          <Select disabled={user?._id === data?._id}>
            <Select.Option value={true}>Kích hoạt</Select.Option>
            <Select.Option value={false}>Khóa</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModifyAccountModal;
