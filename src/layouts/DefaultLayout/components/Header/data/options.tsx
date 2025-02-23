import { LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../constants/routes";

export const options: MenuProps["items"] = [
  {
    key: "1",
    label: "My Account",
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "profile",
    label: <Link to={ROUTES.PROFILE}>Hồ sơ</Link>,
  },
  {
    type: "divider",
  },
  {
    key: "log-out",
    label: "Đăng xuất",
    icon: <LogoutOutlined />,
  },
];
