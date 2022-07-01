import React, { useState } from "react";
const Navbar = React.lazy(() => import("../components/Navbar/Navbar"));
const About = React.lazy(() => import("../components/About/About"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const Header = React.lazy(() => import("../components/Header/Header"));
const Projects = React.lazy(() => import("../components/Projects/Projects"));
const Skills = React.lazy(() => import("../components/Skills/Skills"));
const HomePage = () => {
  const [theme, setTheme] = useState(false);

  const themeToggler = () => {
    setTheme((theme) => !theme);
  };
  return (
    <>
      <Navbar theme={theme} setTheme={themeToggler} />
      <Header theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default HomePage;
