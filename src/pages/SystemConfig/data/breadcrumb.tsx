import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/routes";
import { ReactNode } from "react";

export interface Breadcrumb {
  title: ReactNode | string;
}

export const breadcrumbSystemConfig = [
  {
    title: <Link to={ROUTE.ADMIN}>Trang chủ</Link>,
  },
  {
    title: "Cấu hình hệ thống",
  },
];
