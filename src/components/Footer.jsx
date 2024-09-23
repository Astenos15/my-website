import { socialLinks } from "../data";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <p>Let&apos;s build something amazing together</p>
      <ul className="footer__links">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a href={href}>{icon}</a>
            </li>
          );
        })}
      </ul>
      <span>&#64;{date}</span>
    </section>
  );
};

export default Footer;
