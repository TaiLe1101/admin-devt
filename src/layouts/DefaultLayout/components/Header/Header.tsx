import { Link, NavLink } from "react-router-dom";
import header_nav from "./data/header_nav.json";

export default function Header() {
  return (
    <header className="flex items-center shadow-md bg-white w-full px-4">
      <section className="w-[15%]">
        <h1 className="text-blue-600 font-bold text-2xl">
          <Link to="/">DevT Admin</Link>
        </h1>
      </section>
      <nav className="w-[85%]">
        <ul className="flex gap-4">
          {header_nav.map((nav) => (
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
      </nav>
    </header>
  );
}
