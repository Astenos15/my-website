import heroImg from "../assets/images/hero.svg";
import { socialLinks } from "../data";
const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__grid grid-2-cols">
        <div className="hero__grid-text">
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
                    <a href={href}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="hero__grid-img">
          <img src={heroImg} alt="sketch of a web developer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
