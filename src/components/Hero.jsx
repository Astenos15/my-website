import heroImg from "../assets/images/hero.svg";
import { socialLinks } from "../data";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner";
const Hero = () => {
  const { ref: heroBox, inView: heroBoxVisible } = useInView();

  return (
    <section className="hero container">
      <div className="hero__grid grid-2-cols" ref={heroBox}>
        <div
          className={heroBoxVisible ? "hero__grid-text animate delayShort" : ""}
        >
          <h1 className="heading-primary mb-xs">i&apos;m raffy</h1>
          <h2 className="heading-secondary mb-xs">Front-End Developer</h2>
          <p className="heading-subheading mb-sm">
            turning ideas into interactive reality
          </p>
          <div className="hero__social">
            <ul className="hero__social-links">
              {socialLinks.map((link) => {
                const { id, href, icon } = link;
                return (
                  <li key={id}>
                    <a href={href} target="_blank">
                      {icon}
                    </a>
                  </li>
                );
              })}
              <Spinner />
            </ul>
          </div>
        </div>
        <div className="hero__grid-img">
          <img
            src={heroImg}
            alt="sketch of a web developer"
            className={heroBoxVisible ? "animate delayLong" : ""}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
