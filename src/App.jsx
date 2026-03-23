import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Home from "./layouts/Home";
import Footer from "./Components/footer";
import Projects from "./Components/proyects";
import { PROJECTS } from "./Components/proyects";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Background from "./Components/BackGround";

function App() {
  return (
    <>
      <Background />
      <Navbar />

      {/* Inicio */}
      <section id="FirstView">
        <Home />
      </section>

      {/* Sobre mí */}
      <section id="AboutMe">
        <About />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Proyectos */}
      <section id="proyects" className="px-20 py-20">
        <h2
          className="text-center text-4xl text-white uppercase tracking-widest mb-12"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Mis <span style={{ color: "#818cf8" }}>proyectos</span>
        </h2>
        <div
          className="grid grid-cols-3 gap-6"
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
      </section>

      <Footer />
    </>
  );
}

export default App;
