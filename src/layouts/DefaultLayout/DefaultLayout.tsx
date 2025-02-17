import { ReactNode } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

export interface SidebarMenu {
  title: string;
  iconName: string;
  path: string;
  subMenus?: SidebarMenu[];
}

interface DefaultLayoutProps {
  children: ReactNode;
  menu: SidebarMenu[];
}

export default function DefaultLayout({ children, menu }: DefaultLayoutProps) {
  return (
    <section>
      <Header />
      <div className="flex">
        <Sidebar menu={menu} />
        <main className="w-[85%]">{children}</main>
      </div>
    </section>
  );
}
