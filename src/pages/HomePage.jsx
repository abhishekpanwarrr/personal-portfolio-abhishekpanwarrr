import React, { useState } from "react";
const About = React.lazy(() => import("../components/About"));
const Footer = React.lazy(() => import("../components/Footer"));
const Header = React.lazy(() => import("../components/Header/Header"));
const Projects = React.lazy(() => import("../components/Projects"));
const Skills = React.lazy(() => import("../components/Skills"));
const HomePage = () => {
  const [theme, setTheme] = useState(false);

  const themeToggler = () => {
    setTheme((theme) => !theme);
  };
  return (
    <>
      <Header theme={theme} setTheme={themeToggler} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default HomePage;
