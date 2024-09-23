import { useInView } from "react-intersection-observer";
const Title = ({ title }) => {
  const { ref: titleRef, inView: titleVisible } = useInView();
  return (
    <div
      className={titleVisible ? "title animate delayNav" : ""}
      ref={titleRef}
    >
      <h2 className="heading-secondary mb-sm">{title}</h2>
      <div className="title__underline mb-md">&nbsp;</div>
    </div>
  );
};

export default Title;
