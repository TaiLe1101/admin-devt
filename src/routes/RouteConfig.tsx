/* eslint-disable @typescript-eslint/no-explicit-any */
import { DashboardOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
import { ROUTES } from "../constants/routes";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import SystemConfig from "../pages/SystemConfig/SystemConfig";
import { Link } from "react-router-dom";
import Login from "../pages/Login/Login";

export interface Menu {
  key: string;
  label: string;
  icon?: ReactNode;
  children?: Menu[];
  path?: string;
}

export interface Breadcrumb {
  title: ReactNode | string;
}

export interface RouteConfig {
  path: string;
  title: string;
  name: string;
  layout: any;
  component: any;
  private: boolean;
  menus?: Menu[];
  breadcrumb?: Breadcrumb[];
}

const routesConfig: RouteConfig[] = [
  {
    path: ROUTES.LOGIN,
    title: "Đăng nhập",
    name: "Login",
    layout: null,
    component: Login,
    private: false,
  },
  {
    path: ROUTES.ADMIN,
    title: "Admin Dashboard",
    name: "Admin",
    layout: DefaultLayout,
    component: Home,
    private: true,
  },
  {
    path: ROUTES.SYSTEM_CONFIG,
    title: "System Config",
    name: "SystemConfig",
    layout: DefaultLayout,
    component: SystemConfig,
    private: true,
    menus: [
      {
        key: "#quan-ly-he-thong",
        label: "Quản lý hệ thống",
        icon: <DashboardOutlined />,
        children: [{ key: "/system-config", label: "Cấu hình hệ thống" }],
      },
    ],
    breadcrumb: [
      {
        title: <Link to={ROUTES.ADMIN}>Trang chủ</Link>,
      },
      {
        title: "Cấu hình hệ thống",
      },
    ],
  },
];

export default routesConfig;
