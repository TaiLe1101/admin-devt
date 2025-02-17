import { SidebarMenu } from "../../DefaultLayout";

interface SidebarProps {
  menu: SidebarMenu[];
}

export default function Sidebar({ menu }: SidebarProps) {
  return <div className="w-[15%] pl-4">Sidebar</div>;
}
