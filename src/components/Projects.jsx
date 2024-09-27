import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { projects } from "../data";
import Title from "./Title";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: projCardRef, inView: projCardVisible } = useInView();
  return (
    <section id="projects" className="projects container">
      <Title title="web creations" />
      <div className="projects__grid grid-3-cols" ref={projCardRef}>
        {projects.map((proj) => {
          const { id, img, url, github, title, text } = proj;

          return (
            <article
              className={
                projCardVisible
                  ? "projects__card animate delayLong"
                  : "projects__card"
              }
              key={id}
            >
              <div className="projects__card-img">
                <img src={img} alt="website project thumbnail" />
              </div>
              <div className="projects__card-info">
                <h4>{title}</h4>
                <p>{text}</p>
                <div className="projects__card-info-icon">
                  <a href={url} target="_blank">
                    <TbWorldWww />
                  </a>
                  <a href={github} target="_blank">
                    <FaGithubSquare />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
