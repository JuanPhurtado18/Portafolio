import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Home from "./layouts/Home";
import Footer from "./Components/footer";
import Projects from "./Components/proyects";
import { PROJECTS } from "./Components/proyects";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <div
        className="grid grid-cols-3 gap-6 px-10 py-12"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {PROJECTS.map((project) => (
          <Projects
            key={project.id}
            img={project.img}
            title={project.title}
            description={project.description}
            techs={project.techs}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
