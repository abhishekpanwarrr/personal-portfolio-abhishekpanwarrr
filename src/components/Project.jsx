import React from "react";
import "./project.css";
const Project = ({ image, title, theme, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="project-container" style={{ color: theme ? "" : "#fff" }}>
        <div
          className="foto"
          style={{
            background: theme ? "" : "#6d6d6d",
            color: theme ? "" : "#fff",
          }}
        >
          <img src={image} alt={title} />
          <p className="project-title" style={{ color: theme ? "" : "#fff" }}>
            {title}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Project;
