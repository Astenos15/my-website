import { socialLinks } from "../data";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const date = new Date().getFullYear();
  const { ref: footerBox, inView: footerBoxVisible } = useInView();
  return (
    <section ref={footerBox}>
      <div className="footer">
        <p className={footerBoxVisible ? "animate delayShortest" : ""}>
          Let&apos;s build something amazing together
        </p>
        <ul
          className={
            footerBoxVisible
              ? "footer__links animate delayShort"
              : "footer__links"
          }
        >
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a href={href}>{icon}</a>
              </li>
            );
          })}
        </ul>
        <span className={footerBoxVisible ? "animate delayLong" : ""}>
          &#64;{date}
        </span>
      </div>
    </section>
  );
};

export default Footer;
