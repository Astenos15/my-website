import { links } from "../data";
import { useGlobalContext } from "../context";
import { useRef } from "react";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const sidebarRef = useRef(null);

  const handleMouseLeave = (e) => {
    const sidebar = sidebarRef.current;
    const { left, right, bottom } = sidebar.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      closeSidebar();
    }
  };
  return (
    <div
      className={isSidebarOpen ? "sidebar sidebar-show" : "sidebar"}
      ref={sidebarRef}
      onMouseLeave={handleMouseLeave}
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
