import { useState } from "react";
import LinkeInImg from "../img/Project1.png";
import ProjectImg from "../img/Project2.png";
import appProject from "../img/Project3.png";
import Ensam from "../img/Ensam.png";
import NeuroLearn from "../img/NeuroLearn.png";
import SkyView from "../img/SkyView.png";

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
  Unity: "bg-slate-400/10 text-slate-200 border border-slate-400/20",
  CSharp: "bg-slate-400/20 text-slate-200 border border-slate-400/30",
  Python: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
  FastApi: "bg-green-400/20 text-green-300 border border-green-400/30",
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
    demoUrl: "https://api-ecomerce-iota.vercel.app/",
    repoUrl: "https://github.com/JuanPhurtado18/ApiEcomerce",
  },
  {
    id: 4,
    img: Ensam,
    title: "Emsam",
    description:
      "Videojuego desarrollado en Unity. Proyecto colaborativo que incluye diseño de niveles, programación de mecánicas de juego, sistema de puntuación y efectos visualares.",
    techs: ["Unity", "C#"],
    demoUrl: "",
    repoUrl: "https://github.com/JuanPhurtado18/Ensam",
    hasModal: true,
    collaborators: ["Valeria Bowers", "Manuel Cortes", "Natalia Hernandez"],
    webUrl: "https://web-vd.vercel.app/",
  },
  {
    id: 5,
    img: SkyView,
    title: "SkyView",
    description:
      "Sistema web basado en Inteligencia Artificial para la segmentación automática del cielo y el cálculo del Sky View Factor (SVF) en entornos urbanos utilizando YOLOv8-Seg.",
    techs: ["Python", "FastApi"],
    demoUrl: "",
    repoUrl: "https://github.com/JuanPhurtado18/SkyView",
  },
  {
    id: 6,
    img: NeuroLearn,
    title: "Neurolearn",
    description:
      "Aplicación de realidad virtual terapéutica diseñada para ayudar a estudiantes universitarios en el manejo de emociones como estrés, ansiedad y enojo. Incluye múltiples actividades interactivas, entornos inmersivos de relajación y técnicas de mindfulness adaptadas al contexto académico universitario.",
    techs: ["Unity", "C#"],
    demoUrl: "",
    repoUrl: "https://github.com/JuanPhurtado18/NeuroLearn",
    hasModal: true,
    collaborators: ["Valeria Bowes","Manuel Cortes", "Dalin Grisales", "Natalia Hernadez", "Camilo Irragorri"],
  },
];

function Projects({
  img,
  title,
  description,
  techs,
  demoUrl,
  repoUrl,
  hasModal,
  collaborators,
  webUrl,
}) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

      {/* Cuerpo */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        <h2
          className="text-white text-lg mb-1.5"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          {title}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tecnologías */}
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

        <div className="h-px bg-white/5 mb-4" />

        {/* Botones */}
        <div className="flex gap-3">
          {hasModal ? (
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              Detalles
            </button>
          ) : demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              Demo
            </a>
          ) : null}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-slate-300 border border-white/10 hover:border-indigo-500/50 hover:text-white transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C3.686 1 1 3.686 1 7c0 2.655 1.722 4.907 4.11 5.702.3.055.41-.13.41-.29v-1.015c-1.67.363-2.02-.806-2.02-.806-.273-.693-.666-.878-.666-.878-.545-.372.04-.365.04-.365.602.043.919.618.919.618.535.917 1.404.652 1.745.498.054-.387.21-.652.38-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.152-.268-.762.058-1.587 0 0 .504-.161 1.65.615A5.75 5.75 0 017 4.862c.51.002 1.023.069 1.502.202 1.145-.776 1.648-.615 1.648-.615.327.825.121 1.435.06 1.587.385.42.617.955.617 1.61 0 2.305-1.403 2.812-2.74 2.96.216.186.408.551.408 1.11v1.647c0 .161.108.348.413.289C11.28 11.905 13 9.654 13 7c0-3.314-2.686-6-6-6z"
                  fill="currentColor"
                />
              </svg>
              Repositorio
            </a>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl p-8 flex flex-col gap-5"
            style={{
              background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
              boxShadow:
                "0 0 0 1px rgba(99,102,241,0.3), 0 25px 60px rgba(0,0,0,0.6)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h3
              className="text-white text-xl"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              {title}
            </h3>

            <div className="h-px bg-white/5" />

            <div>
              <span className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
                Descripción
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            <div>
              <span className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
                Colaboradores
              </span>
              <div className="flex flex-wrap gap-2">
                {collaborators?.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {webUrl && (
              <a
                href={webUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                Ver proyecto
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { PROJECTS };
export default Projects;
