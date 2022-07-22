import React, { useContext } from "react";
import Project from "../Project/Project";
import { ThemeContext } from "../../context/ThemeContext";
import "./Projects.css";
import { data } from "../../assets/data";

const Projects = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div
      className="projects"
      style={{ background: theme ? "" : "#494949", color: theme ? "" : "#fff" }}
    >
      <h1 style={{ color: theme ? "" : "#fff" }}>Projects</h1>
      <div className="projects-container">
        {data.map((item) => (
          <Project
            theme={theme}
            key={item.id}
            image={item.image}
            title={item.title}
            link={item.link}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
