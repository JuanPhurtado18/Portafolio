import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
} from "react-icons/di";

import {
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiPostman,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const SKILLS = [
  {
    name: "HTML5",
    Icon: DiHtml5,
    color: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
    iconColor: "#f97316",
  },
  {
    name: "CSS3",
    Icon: DiCss3,
    color: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
    iconColor: "#38bdf8",
  },
  {
    name: "JavaScript",
    Icon: DiJavascript1,
    color: "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30",
    iconColor: "#facc15",
  },
  {
    name: "React.js",
    Icon: DiReact,
    color: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30",
    iconColor: "#22d3ee",
  },
  {
    name: "Node.js",
    Icon: DiNodejs,
    color: "bg-green-400/20 text-green-300 border border-green-400/30",
    iconColor: "#4ade80",
  },
  {
    name: "Express",
    Icon: SiExpress,
    color: "bg-slate-400/20 text-slate-200 border border-slate-400/30",
    iconColor: "#cbd5e1",
  },
  {
    name: "MongoDB",
    Icon: DiMongodb,
    color: "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30",
    iconColor: "#34d399",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    iconColor: "#60a5fa",
  },
  {
    name: "Bootstrap",
    Icon: DiBootstrap,
    color: "bg-violet-600/20 text-violet-300 border border-violet-600/30",
    iconColor: "#a78bfa",
  },
  {
    name: "Git",
    Icon: DiGit,
    color: "bg-red-500/20 text-red-300 border border-red-500/30",
    iconColor: "#f87171",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "bg-slate-500/20 text-slate-300 border border-slate-500/30",
    iconColor: "#94a3b8",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "bg-slate-400/20 text-slate-200 border border-slate-400/30",
    iconColor: "#e2e8f0",
  },
  {
    name: "Vite",
    Icon: SiVite,
    color: "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30",
    iconColor: "#e879f9",
  },
  {
    name: "Postman",
    Icon: SiPostman,
    color: "bg-orange-600/20 text-orange-300 border border-orange-600/30",
    iconColor: "#fb923c",
  },
];

export default function Skills() {
  return (
    <section
      className="px-6 sm:px-12 lg:px-20 py-16 lg:py-20 flex flex-col gap-10 lg:gap-12"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <h2
        className="text-center text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-widest"
        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
      >
        Mis <span style={{ color: "#818cf8" }}>habilidades</span>
      </h2>

      <div
        className="rounded-2xl p-6 sm:p-8 lg:p-10"
        style={{
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.5)",
        }}
      >
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {SKILLS.map(({ name, Icon, color, iconColor }) => (
            <span
              key={name}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 ${color}`}
            >
              <Icon size={16} color={iconColor} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
