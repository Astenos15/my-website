import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaSquareGithub, FaSquareFacebook, FaEnvelope } from "react-icons/fa6";

import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";

export const links = [
  { id: nanoid(), href: "#", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const socialLinks = [
  {
    id: nanoid(),
    href: "https://www.facebook.com/BakitMahalAngBigas",
    icon: <FaSquareFacebook />,
  },
  {
    id: nanoid(),
    href: "https://github.com/Astenos15/",
    icon: <FaSquareGithub />,
  },
  { id: nanoid(), href: "mailto:wisdomseeker1114@gmail.com", icon: <FaEnvelope /> },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="skills__icon" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="skills__icon" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="skills__icon" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: "https://julie-hansen.netlify.app",
    github: "https://github.com/Astenos15/",
    title: "first project",
    text: "Real estate website that shows listings and contact form for users who wants to communicate with the agent if needed.",
  },
  {
    id: nanoid(),
    img: project2,
    url: "https://bakers-brew-temporary.netlify.app/",
    github: "https://github.com/Astenos15/",
    title: "second project",
    text: "Marketing website of a seller of cookies and coffee.It displays all the products that the seller offers to it's customers.",
  },
  {
    id: nanoid(),
    img: project3,
    url: "https://simple-color-generator.netlify.app",
    github: "https://github.com/Astenos15/",
    title: "third project",
    text: "A simple tints and shades generator that can help the developer choose color to be used when designing  projects.",
  },
];
