import { links } from "../data";
import { useInView } from "react-intersection-observer";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "../context";
import { useRef } from "react";

const Navbar = () => {
  const { ref: nav, inView: navVisible } = useInView();
  const { openSidebar, closeSidebar } = useGlobalContext();
  const toggleBtnContainer = useRef(null);

  const handleMouseLeave = (e) => {
    const toggle = toggleBtnContainer.current;
    const { left, right } = toggle.getBoundingClientRect();
    const { clientX } = e;

    if (clientX < left - 1 || clientX > right - 1) {
      closeSidebar();
    }
  };

  return (
    <nav className="nav" ref={nav}>
      <div className={navVisible ? "nav__logo animate delayShortest" : ""}>
        <h3 className="nav__logo-text">
          Web<span>Dev</span>
        </h3>
      </div>
      <div className="nav__toggle" ref={toggleBtnContainer}>
        <button onMouseOver={openSidebar} onMouseLeave={handleMouseLeave}>
          <GiHamburgerMenu />
        </button>
      </div>
      <Sidebar />
      <div className="links-container">
        <ul
          className={
            navVisible ? "nav__links animate delayShort" : "nav__links"
          }
        >
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
