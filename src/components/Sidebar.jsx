import { links } from "../data";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={isSidebarOpen ? "sidebar sidebar-show" : "sidebar"}
      onMouseLeave={closeSidebar}
    >
      <ul className="sidebar__links">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} onClick={closeSidebar}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
