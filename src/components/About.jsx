import Title from "./Title";
import aboutImg from "../assets/images/about.svg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: aboutRef, inView: aboutVisible } = useInView();
  return (
    <section id="about" className="about container">
      <div className="about__grid grid-2-cols" ref={aboutRef}>
        <div className="about__grid-img">
          <img
            src={aboutImg}
            alt="sketch of a web developer"
            className={aboutVisible ? "animate delayShort" : ""}
          ></img>
        </div>
        <div className="about__grid-text">
          <Title title="code and coffee" />
          <p className={aboutVisible ? "animate delayLong" : ""}>
            I'm a passionate career-shifter developer who thrives on turning
            ideas into reality online. With a love for coding, tutorials, and
            coffee, I’m ready to bring your dream website or app to life. Let's
            transform your vision into a digital success, one line of code at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
