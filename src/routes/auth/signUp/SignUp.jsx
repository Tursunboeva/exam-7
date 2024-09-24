import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { signUp } from "../../../redux/slices/authSlice";
import { useSignUpMutation } from "../../../redux/api/authApi";

const { Title, Text } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpRequest, { data, isSuccess }] = useSignUpMutation();

  const onFinish = (values) => {
    signUpRequest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(signUp({ token: data.token }));
      notification.success({
        message: "Successfully registered!",
      });
      navigate("/auth/login");
    }
  }, [isSuccess, dispatch, data, navigate]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      

      <Form
        className="p-6 w-full max-w-md bg-white shadow-md rounded-lg"
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={2} className="text-center">
          Sign Up
        </Title>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>

        <Text>
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500">
            Log in
          </Link>
        </Text>
      </Form>
    </div>
  );
};

export default SignUp;
