import { skills } from "../data";
import Title from "./Title";

const Skills = () => {
  return (
    <section className="skills container">
      <Title title="tech stack" />
      <div className="skills__grid grid-3-cols">
        {skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return (
            <article key={id}>
              <span className="skills__icon">{icon}</span>
              <h5 className="mb-xs">{title}</h5>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
