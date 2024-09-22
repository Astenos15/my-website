import Title from "./Title";
import aboutImg from "../assets/images/about.svg";

const About = () => {
  return (
    <section className="about container">
      <div className="about__grid grid-2-cols">
        <div className="about__grid-img">
          <img src={aboutImg} alt="sketch of a web developer" />
        </div>
        <div className="about__grid-text">
          <Title title="code and coffee" />
          <p>
            I&apos;m a career shifter developer who enjoys creating things on
            the internet.I love coding, watching tutorials and coffee.Let me
            bring your dream website and apps to life.Code your vision into
            reality—your digital success, one line at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
