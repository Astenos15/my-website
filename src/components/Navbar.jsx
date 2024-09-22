import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <h3 className="nav__logo-text">
          Web<span>Dev</span>
        </h3>
      </div>
      <div className="links-container">
        <ul className="nav__links">
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
