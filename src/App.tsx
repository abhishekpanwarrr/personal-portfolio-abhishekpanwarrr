import React, { Suspense } from "react";
import "./App.css";

const Hero = React.lazy(() => import("./components/hero/Hero"));
const About = React.lazy(() => import("./components/about/About"));
const Portfolio = React.lazy(() => import("./components/portfolio/Portfolio"));
const Experience = React.lazy(
  () => import("./components/experience/Experience")
);
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Skills = React.lazy(() => import("./components/skills/Skills"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full absolute inset-0 z-40 flex items-center justify-center bg-[#34343A]">
          <span className="loader"></span>
        </div>
      }
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </Suspense>
  );
}

export default App;
