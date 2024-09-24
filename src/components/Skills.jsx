import { skills } from "../data";
import Title from "./Title";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref: skillsRef, inView: skillsVisible } = useInView();
  return (
    <section id="skills" className="skills container">
      <Title title="tech stack" />
      <div className="skills__grid grid-3-cols" ref={skillsRef}>
        {skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return (
            <article key={id}>
              <span
                className={
                  skillsVisible
                    ? "skills__icon animate delayShortest"
                    : "skills__icon"
                }
              >
                {icon}
              </span>
              <h5 className={skillsVisible ? " animate delayShort mb-xs" : ""}>
                {title}
              </h5>
              <p className={skillsVisible ? " animate delayLong" : ""}>
                {text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
