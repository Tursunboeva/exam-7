import { Button, Form, Input, Typography, notification } from "antd";
import { useCreateUsersMutation } from "../../redux/api/productsApi";

const { Title } = Typography;

const Createuser = () => {
  const [createUsers] = useCreateUsersMutation();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    createUsers(values)
      .unwrap()
      .then(() => {
        notification.success({
          message: "User created successfully!",
        });
      })
      .catch((error) => {
        notification.error({
          message: "Failed to create user",
          description: error.message,
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Form
        className="p-8 w-full max-w-md bg-white shadow-lg rounded-lg"
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={2} className="text-center">
          Create User
        </Title>

        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Create User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Createuser;
