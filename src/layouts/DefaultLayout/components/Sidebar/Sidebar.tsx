import { Menu } from "antd";
import { Menu as MenuType } from "../../../../pages/SystemConfig/data/menu";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  menu?: MenuType[];
}

export default function Sidebar({ menu }: SidebarProps) {
  const nav = useNavigate();

  const handleNavigate = (path: string) => {
    nav(path);
  };

  if (!menu) {
    return <></>;
  }

  return (
    <div className="w-[15%] pl-4">
      <Menu
        defaultOpenKeys={[menu[0].key]}
        defaultSelectedKeys={[
          menu[0].children ? menu[0].children[0].key : menu[0].key,
        ]}
        items={menu}
        mode="inline"
        onClick={(e) => handleNavigate(e.key)}
      />
    </div>
  );
}
