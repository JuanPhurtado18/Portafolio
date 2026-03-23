import JuanPhoto from "../img/Project3.png"; // cambia por el nombre real de tu foto

export default function About() {
  const skills = [
    { name: "HTML5",      color: "bg-orange-500/20 text-orange-300 border border-orange-500/30" },
    { name: "CSS3",       color: "bg-sky-500/20 text-sky-300 border border-sky-500/30" },
    { name: "JavaScript", color: "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30" },
    { name: "React.js",   color: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30" },
    { name: "Bootstrap",  color: "bg-violet-600/20 text-violet-300 border border-violet-600/30" },
    { name: "Node.js",    color: "bg-green-400/20 text-green-300 border border-green-400/30" },
    { name: "Express",    color: "bg-slate-400/20 text-slate-200 border border-slate-400/30" },
    { name: "MySQL",      color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
    { name: "MongoDB",    color: "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30" },
    { name: "Git",        color: "bg-red-500/20 text-red-300 border border-red-500/30" },
  ];

  return (
    <section
      className="rounded-2xl overflow-hidden p-8 flex gap-10 items-center"
      style={{
        background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.5)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Lado izquierdo: información ── */}
      <div className="flex-1 flex flex-col gap-5">

        {/* Nombre y rol */}
        <div>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-1">
            Sobre mí
          </p>
          <h1
            className="text-white text-3xl leading-tight mb-1"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Juan Pablo Hurtado
          </h1>
          <p className="text-indigo-300/80 text-sm font-medium">
            Desarrollador Frontend · Ingeniería Multimedia
          </p>
        </div>

        {/* Divisor */}
        <div className="h-px bg-white/5" />

        {/* Perfil profesional */}
        <p className="text-slate-400 text-sm leading-relaxed">
          Desarrollador Frontend con formación en ingeniería multimedia y experiencia construyendo
          aplicaciones web modernas con <span className="text-indigo-300">JavaScript</span>,{" "}
          <span className="text-indigo-300">React</span> y{" "}
          <span className="text-indigo-300">APIs REST</span>. Me enfoco en escribir código
          mantenible, crear interfaces funcionales y aportar rápidamente en equipos de desarrollo
          colaborativos.
        </p>

        {/* Info rápida */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 115.5 5 1.5 1.5 0 017 6.5z" fill="#818cf8"/>
            </svg>
            Cali, Colombia
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 3.5A1.5 1.5 0 013.5 2h7A1.5 1.5 0 0112 3.5v7A1.5 1.5 0 0110.5 12h-7A1.5 1.5 0 012 10.5v-7zm1.5 0v.75l3.5 2.5 3.5-2.5V3.5h-7zm0 2.25V10.5h7V5.75L7 8.25 3.5 5.75z" fill="#818cf8"/>
            </svg>
            Juanpablohurtado45@gmail.com
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="12" height="12" rx="2" stroke="#818cf8" strokeWidth="1.4"/>
              <path d="M4 6v4M4 4v.5M7 10V7c0-1 .5-1.5 1.5-1.5S10 6 10 7v3M7 7h3" stroke="#818cf8" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <a href="https://www.linkedin.com/in/juan-pablo-hurtado" target="_blank" rel="noreferrer"
              className="hover:text-indigo-300 transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C3.686 1 1 3.686 1 7c0 2.655 1.722 4.907 4.11 5.702.3.055.41-.13.41-.29v-1.015c-1.67.363-2.02-.806-2.02-.806-.273-.693-.666-.878-.666-.878-.545-.372.04-.365.04-.365.602.043.919.618.919.618.535.917 1.404.652 1.745.498.054-.387.21-.652.38-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.152-.268-.762.058-1.587 0 0 .504-.161 1.65.615A5.75 5.75 0 017 4.862c.51.002 1.023.069 1.502.202 1.145-.776 1.648-.615 1.648-.615.327.825.121 1.435.06 1.587.385.42.617.955.617 1.61 0 2.305-1.403 2.812-2.74 2.96.216.186.408.551.408 1.11v1.647c0 .161.108.348.413.289C11.28 11.905 13 9.654 13 7c0-3.314-2.686-6-6-6z" fill="#818cf8"/>
            </svg>
            <a href="https://github.com/JuanPhurtado18" target="_blank" rel="noreferrer"
              className="hover:text-indigo-300 transition-colors">
              github.com/JuanPhurtado18
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-white/5" />

        {/* Skills */}
        <div>
          <span className="text-xs text-slate-500 uppercase tracking-widest mb-3 block">
            Competencias técnicas
          </span>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s.name} className={`text-xs px-2.5 py-1 rounded-full font-medium ${s.color}`}>
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Idiomas */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-xs text-slate-400">Español — Nativo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400/50" />
            <span className="text-xs text-slate-400">Inglés — B2</span>
          </div>
        </div>
      </div>

      {/* ── Lado derecho: foto ── */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4">
        <div
          className="relative w-56 h-64 rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 0 1px rgba(99,102,241,0.3), 0 20px 40px rgba(99,102,241,0.15)",
          }}
        >
          {/* Fondo decorativo por si la foto no carga */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)" }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <img
            src={JuanPhoto}
            alt="Juan Pablo Hurtado"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Glow inferior */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16"
            style={{ background: "linear-gradient(to top, #16213e, transparent)" }}
          />
        </div>

        {/* Educación */}
        <div
          className="w-56 rounded-xl p-3 text-center"
          style={{
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-1">Educación</p>
          <p className="text-white text-xs font-semibold leading-snug"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Ingeniería Multimedia
          </p>
          <p className="text-slate-400 text-xs mt-0.5">Univ. Autónoma de Occidente</p>
          <p className="text-indigo-300/60 text-xs mt-0.5">Graduación oct. 2026</p>
        </div>
      </div>
    </section>
  );
}