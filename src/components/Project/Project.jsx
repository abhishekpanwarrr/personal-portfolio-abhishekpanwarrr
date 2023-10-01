import React from "react";
import "./Project.css";
const Project = ({ image, title, theme, link, github }) => {
  return (
    //
    <div style={{ color: theme ? "" : "#fff" }} className="project-container">
      <div
        className="foto"
        style={{
          background: theme ? "" : "#6d6d6d",
          color: theme ? "" : "#fff",
        }}
      >
        <p data-cy="project-title" className="project-title" style={{ color: theme ? "" : "#fff" }}>
          {title}
        </p>
        <img src={image} alt={title} />
        <div className="project-demo">
          <a
          data-cy="github-link"
            href={github}
            target="_blank"
            rel="noreferrer"
            style={{ background: theme ? "#000" : "" }}
          >
            Github Link
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ background: theme ? "#000" : "" }}
          >
            Demo Link
          </a>
        </div>
      </div>
    </div>
    //
  );
};

export default Project;
