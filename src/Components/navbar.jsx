import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("FirstView");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["FirstView", "AboutMe", "skills", "proyects"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `text-sm font-semibold transition duration-300 ${
      activeSection === id
        ? "text-indigo-300 border-b border-indigo-400 pb-0.5"
        : "text-slate-400 hover:text-indigo-300"
    }`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        background: scrolled ? "rgba(13,13,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="hidden sm:flex gap-6">
          <a
            href="#FirstView"
            className={linkClass(
              "FirstView",
              " text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300",
            )}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Inicio
          </a>
          <a
            href="#AboutMe"
            className={linkClass(
              "AboutMe",
              "text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300",
            )}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Sobre mí
          </a>
          <a
            href="#skills"
            className={linkClass(
              "skills",
              "text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300",
            )}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Mis Skills
          </a>
          <a
            href="#proyects"
            className={linkClass(
              "proyects",
              "text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300",
            )}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Mis Proyectos
          </a>
        </div>
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className="block w-6 h-0.5 bg-slate-400 transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 bg-slate-400 transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-slate-400 transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </nav>
      <a
        href="#FirstView"
        className="text-sm font-bold text-indigo-400 tracking-widest uppercase"
        style={{ fontFamily: "'Syne', sans-serif" }}
      ></a>
      <div
        className="sm:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "300px" : "0px" }}
      >
        <div className="flex flex-col px-6 pb-6 gap-4">
          <a
            href="#FirstView"
            className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#AboutMe"
            className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Sobre mí
          </a>
          <a
            href="#skills"
            className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Mis Skills
          </a>
          <a
            href="#proyects"
            className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Mis Proyectos
          </a>
        </div>
      </div>
    </header>
  );
}
