import React from "react";
import "./Project.css";
const Project = ({ image, title, theme, link }) => {
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
        <img src={image} alt={title} />
        <div className="project-demo">
          <p className="project-title" style={{ color: theme ? "" : "#fff" }}>
            {title}
          </p>
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
