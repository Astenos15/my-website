import { links } from "../data";
import { useInView } from "react-intersection-observer";
const Navbar = () => {
  const { ref: navLogo, inView: navLogoVisible } = useInView();
  const { ref: navLinks, inView: navLinksVisible } = useInView();

  return (
    <nav className="nav">
      <div
        className={navLogoVisible ? "nav__logo animate delayNav" : ""}
        ref={navLogo}
      >
        <h3 className="nav__logo-text">
          Web<span>Dev</span>
        </h3>
      </div>
      <div className="links-container" ref={navLinks}>
        <ul className={navLinksVisible ? "nav__links animate delayShort" : ""}>
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
