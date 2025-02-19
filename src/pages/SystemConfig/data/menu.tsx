import { DashboardOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export interface Menu {
  key: string;
  label: string;
  icon?: ReactNode;
  children?: Menu[];
  path?: string;
}

export const systemConfigMenu: Menu[] = [
  {
    key: "#quan-ly-he-thong",
    label: "Quản lý hệ thống",
    icon: <DashboardOutlined />,
    children: [{ key: "/system-config", label: "Cấu hình hệ thống" }],
  },
];
