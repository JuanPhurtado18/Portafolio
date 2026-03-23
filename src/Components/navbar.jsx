import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,13,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl gap-3.5 justify-end p-6 lg:px-8"
      >
        <a
          href="#FirstView"
          className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Inicio
        </a>
        <a
          href="#AboutMe"
          className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Sobre mí
        </a>
        <a
          href="#skills"
          className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Mis Skills
        </a>
        <a
          href="#proyects"
          className="text-sm font-semibold text-slate-400 hover:text-indigo-300 transition duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Mis Proyectos
        </a>
      </nav>
    </header>
  );
}
