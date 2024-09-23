import { links } from "../data";
import { useInView } from "react-intersection-observer";
const Navbar = () => {
  const { ref: nav, inView: navVisible } = useInView();

  return (
    <nav className="nav" ref={nav}>
      <div className={navVisible ? "nav__logo animate delayNav" : ""}>
        <h3 className="nav__logo-text">
          Web<span>Dev</span>
        </h3>
      </div>
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
