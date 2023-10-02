import React from "react";
const Navbar = React.lazy(() => import("../components/Navbar/Navbar"));
const About = React.lazy(() => import("../components/About/About"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const Header = React.lazy(() => import("../components/Header/Header"));
const Projects = React.lazy(() => import("../components/Projects/Projects"));
const Skills = React.lazy(() => import("../components/Skills/Skills"));
const Accordion = React.lazy(() => import("../components/Accordion/AccordionDiv"));
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <Accordion />
    </>
  );
};

export default HomePage;
