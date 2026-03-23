import { useState } from "react";
import LinkeInImg from "../img/Project1.png";
import ProjectImg from "../img/Project2.png";
import appProject from "../img/Project3.png";

const TECH_STYLES = {
  HTML: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  CSS: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
  Nextjs: "bg-slate-400/20 text-slate-200 border border-slate-400/30",
  React: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30",
  Zustand: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  MapboxGLJS: "bg-blue-600/20 text-blue-300 border border-blue-600/30",
  SweetAlert2: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
  Bootstrap: "bg-violet-600/20 text-violet-300 border border-violet-600/30",
  Vite: "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30",
  ReactRouterDOM: "bg-red-500/20 text-red-300 border border-red-500/30",
};

const PROJECTS = [
  {
    id: 1,
    img: LinkeInImg,
    title: "LinkedIn UI Clone",
    description:
      "Clon de la interfaz visual de LinkedIn, enfocado en la maquetación y replicación de una interfaz real de una red social profesional.",
    techs: ["HTML", "CSS"],
    demoUrl: "https://linkend-copy.vercel.app/",
    repoUrl: "https://github.com/JuanPhurtado18/LinkendCopy",
  },
  {
    id: 2,
    img: ProjectImg,
    title: "Dashboard de Gestión de Proyectos",
    description:
      "Dashboard interactivo de gestión de proyectos que permite visualizar, filtrar y ubicar proyectos en un mapa en tiempo real.",
    techs: ["React", "Nextjs", "Zustand", "MapboxGLJS", "SweetAlert2"],
    demoUrl: "https://gestor-proyectos-amber.vercel.app/",
    repoUrl: "https://github.com/JuanPhurtado18/GestorProyectos",
  },
  {
    id: 3,
    img: appProject,
    title: "API Ecommerce App",
    description:
      "Este proyecto simula el flujo básico de un ecommerce, permitiendo a los usuarios registrarse, iniciar sesión y acceder a un listado de productos obtenidos desde una API externa.",
    techs: ["React", "Vite", "Bootstrap", "SweetAlert2", "ReactRouterDOM"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

function Projects({ img, title, description, techs, demoUrl, repoUrl }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col"
      style={{
        background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(99,102,241,0.6), 0 25px 60px rgba(99,102,241,0.2)"
          : "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.5)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Imagen del proyecto */}
      <div
        className="relative mx-4 mt-4 rounded-xl overflow-hidden h-40"
        style={{
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
        }}
      >
        {img ? (
          <img
            src={img}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, #818cf8 0%, transparent 70%)",
                filter: "blur(12px)",
              }}
            />
          </>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-indigo-300/50 text-xs font-medium uppercase tracking-widest"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.2em" }}
          ></span>
        </div>
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 10L10 2M10 2H4M10 2V8"
              stroke="#a5b4fc"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Cuerpo de la card */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        {/* Título */}
        <h2
          className="text-white text-lg mb-1.5"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          {title}
        </h2>

        {/* Descripción */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tecnologías utilizadas */}
        <div className="mb-4">
          <span className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
            Tecnologías utilizadas
          </span>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${TECH_STYLES[tech] ?? "bg-slate-700 text-slate-300"}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-white/5 mb-4" />

        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={demoUrl}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            target="_blank"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.5" />
              <path
                d="M5 7l2 2 2-3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Demo
          </a>
          <a
            href={repoUrl}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-slate-300 border border-white/10 hover:border-indigo-500/50 hover:text-white transition-all duration-200"
            target="_blank"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1C3.686 1 1 3.686 1 7c0 2.655 1.722 4.907 4.11 5.702.3.055.41-.13.41-.29v-1.015c-1.67.363-2.02-.806-2.02-.806-.273-.693-.666-.878-.666-.878-.545-.372.04-.365.04-.365.602.043.919.618.919.618.535.917 1.404.652 1.745.498.054-.387.21-.652.38-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.152-.268-.762.058-1.587 0 0 .504-.161 1.65.615A5.75 5.75 0 017 4.862c.51.002 1.023.069 1.502.202 1.145-.776 1.648-.615 1.648-.615.327.825.121 1.435.06 1.587.385.42.617.955.617 1.61 0 2.305-1.403 2.812-2.74 2.96.216.186.408.551.408 1.11v1.647c0 .161.108.348.413.289C11.28 11.905 13 9.654 13 7c0-3.314-2.686-6-6-6z"
                fill="currentColor"
              />
            </svg>
            Repositorio
          </a>
        </div>
      </div>
    </div>
  );
}

export { PROJECTS };
export default Projects;
