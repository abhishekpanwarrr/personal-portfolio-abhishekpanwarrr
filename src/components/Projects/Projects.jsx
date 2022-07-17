import React from "react";
import Project from "../Project/Project";
import personal from "../../assets/react.png";
import netflix from "../../assets/netflix.png";
import task from "../../assets/task.png";
import vragency from "../../assets/vragency.png";
import filterMovie from "../../assets/movie-filter-apps.netlify.app_.png";
import "./Projects.css";
const Projects = ({ theme }) => {
  const data = [
    {
      id: 1,
      image: personal,
      title: "Personal Theme",
      link: "https://react-website-1.netlify.app/",
    },
    {
      id: 2,
      image: netflix,
      title: "Netflix Clone App",
      link: "https://abhishek-netflix-clonee.netlify.app/",
    },
    {
      id: 3,
      image: task,
      title: "Task Manager App",
      link: "https://todos-app-react-firebase.netlify.app/",
    },
    {
      id: 4,
      image: vragency,
      title: "VR Agency App",
      link: "https://tailwind-react-website.vercel.app/",
    },
    {
      id: 5,
      image: filterMovie,
      title: "Movie Filter App",
      link: "https://movie-filter-apps.netlify.app/",
    },
  ];
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
