import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Poster from "../img/POSTER HABITACIÓN 011.jpeg";

const TECH_STYLES = {};

const OTHERPROJECTS = [
  {
    id: 1,
    img: Poster,
    videoUrl: null,
    iframeUrl:
      "https://drive.google.com/file/d/1PNjtxS4Dnq8lEXsHP6Byc9AYJ3fT_oq1/preview",
    title: "Habitación 011",
    description:
      "Cortometraje de terror psicológico ambientado en 1985, creado íntegramente con Inteligencia Artificial. Sigue a Ethan, un niño perceptivo que queda varado con su madre en un misterioso hotel de carretera. Lo que comienza como una noche ordinaria se convierte en una experiencia donde la realidad, el sueño y la manipulación se vuelven indistinguibles. La historia explora la fragilidad de la percepción humana y el terror de no poder confiar en lo que ves o en quienes te rodean.",
    techs: [],
    demoUrl: "",
    repoUrl: "",
    hasModal: true,
    collaborators: ["Selene Cortes", "Maria Alejandra Vasquez"],
  },
];

function OtherProjects({
  img,
  title,
  description,
  techs,
  demoUrl,
  repoUrl,
  hasModal,
  collaborators,
  webUrl,
  videoUrl,
  iframeUrl,
}) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  const isTouchDevice = () => window.matchMedia("(hover: none)").matches;
  const closeModal = () => setModalOpen(false);

  return (
    <>
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
        {/* Imagen */}
        <div
          className="relative mx-4 mt-4 rounded-xl overflow-hidden h-40"
          style={{
            background:
              "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
          }}
          onMouseEnter={() => {
            if (!isTouchDevice()) videoRef.current?.play();
          }}
          onMouseLeave={() => {
            if (!isTouchDevice() && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }}
        >
          {videoUrl ? (
            <>
              <video
                ref={videoRef}
                src={videoUrl}
                poster={img}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="none"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,0,0,0.3)" }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isTouchDevice()) setModalOpen(true);
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(99,102,241,0.8)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 4l12 6-12 6V4z" fill="white" />
                  </svg>
                </div>
              </div>
            </>
          ) : img ? (
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

          {techs.length > 0 && (
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
          )}

          <div className="h-px bg-white/5 mb-4" />

          {/* Botones */}
          <div className="flex gap-3">
            {hasModal && (
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                Detalles
              </button>
            )}
            {demoUrl && (
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
            )}
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
      </div>

      {/* Modal — portal */}
      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)" }}
            onClick={closeModal}
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden flex flex-col"
              style={{
                maxWidth: "680px",
                background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
                boxShadow:
                  "0 0 0 1px rgba(99,102,241,0.3), 0 30px 80px rgba(0,0,0,0.8)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                style={{ background: "rgba(99,102,241,0.3)" }}
              >
                ✕
              </button>

              {/* iframe Google Drive */}
              {iframeUrl ? (
                <iframe
                  src={iframeUrl}
                  className="w-full"
                  style={{ height: "45vh", border: "none", background: "#000" }}
                  allow="autoplay"
                  allowFullScreen
                />
              ) : videoUrl ? (
                <video
                  src={videoUrl}
                  className="w-full block"
                  controls
                  autoPlay={!isTouchDevice()}
                  style={{ maxHeight: "45vh", background: "#000" }}
                />
              ) : null}

              {/* Contenido */}
              <div className="p-8 flex flex-col gap-5">
                <h3
                  className="text-white text-xl pr-8"
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

                {techs.length > 0 && (
                  <div>
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
                )}

                {collaborators && collaborators.length > 0 && (
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
                      Colaboradores
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {collaborators.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="h-px bg-white/5" />

                <div className="flex gap-3">
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      Demo
                    </a>
                  )}
                  {webUrl && (
                    <a
                      href={webUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      Ver proyecto
                    </a>
                  )}
                  {repoUrl && (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-slate-300 border border-white/10 hover:border-indigo-500/50 hover:text-white transition-all duration-200"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
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
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export { OTHERPROJECTS };
export default OtherProjects;
