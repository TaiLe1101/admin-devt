import { Button, Form, FormProps, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser, selectToken } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "../../constants/routes";
import { ApiErrorException } from "../../exceptions/ApiErrorException";
import { ApiResponse } from "../../types/ApiResponse";
import { useMessage } from "../../providers/MessageProvider";

interface FieldType {
  username: string;
  password: string;
}

export default function Login() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const navigate = useNavigate();
  const messageApi = useMessage();

  useEffect(() => {
    if (token) {
      navigate(ROUTES.ADMIN); // Chuyển hướng về trang chủ khi có token
    }
  }, [token, navigate]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const payload = {
        username: values.username,
        password: values.password,
      };
      await dispatch(loginUser(payload));
      messageApi.success("Đăng nhập thành công");
    } catch (error) {
      const apiError = error as ApiErrorException<ApiResponse<undefined>>;
      messageApi.error(apiError.data.message);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-80 shadow-2xl py-4 px-4 rounded">
        <h1 className="text-3xl text-center font-bold mb-4">Admin Login</h1>
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tài khoản của bạn" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu của bạn" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
