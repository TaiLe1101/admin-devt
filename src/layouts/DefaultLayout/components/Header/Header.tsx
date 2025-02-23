import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../../app/hooks";
import { logout } from "../../../../features/auth/authSlice";
import { headerNav } from "./data/headerNav";
import { options } from "./data/options";

export default function Header() {
  const dispatch = useAppDispatch();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "log-out") {
      dispatch(logout());
    }
  };

  const optionsList = {
    items: options,
    onClick: handleMenuClick,
  };

  return (
    <header className="flex items-center shadow-md bg-white w-full px-4">
      <section className="w-[15%]">
        <h1 className="text-blue-600 font-bold text-2xl">
          <Link to="/">DevT Admin</Link>
        </h1>
      </section>
      <nav className="w-[85%] flex justify-between items-center">
        <ul className="flex gap-4">
          {headerNav.map((nav) => (
            <li key={nav.title}>
              <NavLink
                to={nav.url}
                className={({ isActive }) =>
                  "p-4 block " + (isActive ? "text-blue-600" : "")
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          <Dropdown menu={optionsList}>
            <Space>
              <Avatar
                size="large"
                style={{ backgroundColor: "#1677ff", cursor: "pointer" }}
              >
                D
              </Avatar>
            </Space>
          </Dropdown>
        </div>
      </nav>
    </header>
  );
}
