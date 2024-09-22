import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { projects } from "../data";
import Title from "./Title";

const Projects = () => {
  return (
    <section className="projects container">
      <Title title="web creations" />
      <div className="projects__grid grid-3-cols">
        {projects.map((proj) => {
          const { id, img, url, github, title, text } = proj;

          return (
            <article className="projects__card" key={id}>
              <img src={img} alt="website thumbnail" />
              <div className="projects__card-info">
                <h4>{title}</h4>
                <p>{text}</p>
                <div className="projects__card-info-icon">
                  <a href={url}>
                    <TbWorldWww />
                  </a>
                  <a href={github}>
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
