import { useState, useEffect } from "react";
import Img from "../img/ImagenWelcome.png";

const ROLES = ["Frontend Developer", "React Developer"];

function Home() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div
      className="flex items-center justify-between h-screen px-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Texto izquierdo */}
      <div className="flex flex-col gap-3">
        <p
          className="text-indigo-400 text-lg uppercase tracking-widest"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Hola!
        </p>
        <h1
          className="text-5xl "
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800,color: "#818cf8", minHeight: "2rem" }}
        >
          Soy Juan Pablo Hurtado
        </h1>

        {/* Typewriter */}
        <p className="text-2xl font-medium" style={{ color: "#818cf8", minHeight: "2rem" }}>
          {displayed}
          <span
            className="inline-block w-0.5 h-6 ml-1 align-middle bg-indigo-400"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </p>
      </div>

      {/* Imagen derecha */}
      <div>
        <img className="h-80" src={Img} alt="developer" />
      </div>

      {/* Cursor blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Home;