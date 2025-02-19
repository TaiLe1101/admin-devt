import { Breadcrumb } from "antd";
import { ReactNode } from "react";
import { Breadcrumb as BreadcrumbType } from "../../pages/SystemConfig/data/breadcrumb";
import { Menu } from "../../pages/SystemConfig/data/menu";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

interface DefaultLayoutProps {
  children: ReactNode;
  menu?: Menu[];
  breadcrumb?: BreadcrumbType[];
}

export default function DefaultLayout({
  children,
  menu,
  breadcrumb,
}: DefaultLayoutProps) {
  return (
    <section>
      <Header />
      <div className="flex mt-4">
        <Sidebar menu={menu} />
        <main className="w-[85%]">
          {breadcrumb && (
            <div className="px-4 py-2 shadow">
              <Breadcrumb items={breadcrumb} />
            </div>
          )}
          {menu ? (
            <div className="m-4 p-4 shadow-md rounded-md">{children}</div>
          ) : (
            <div>{children}</div>
          )}
        </main>
      </div>
    </section>
  );
}
