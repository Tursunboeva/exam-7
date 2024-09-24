import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../../redux/api/authApi";
import { logIn } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginRequest, { data, isSuccess }] = useLogInMutation();

  const onFinish = (values) => {
    loginRequest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(logIn({ token: data.token }));
      notification.success({
        message: "Successfully logged in!",
      });
      navigate("/");
    }
  }, [isSuccess, dispatch, data, navigate]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-8">
      </div>

      <Form
        className="p-6 w-full max-w-md bg-white shadow-md rounded-lg"
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={2} className="text-center">Login</Title>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Text>
          Don't have an account? <Link to="/auth/signup" className="text-blue-500">Sign Up</Link>
        </Text>
      </Form>
    </div>
  );
};

export default Login;
