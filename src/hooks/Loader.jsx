import { useState, useEffect } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 6000;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setProgress(Math.min(Math.round((current / steps) * 100), 100));
      if (current >= steps) {
        clearInterval(timer);
        setFadeOut(true);
        setTimeout(onFinish, 600);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center gap-10 transition-opacity duration-600"
      style={{
        background: "linear-gradient(145deg, #0d0d14 0%, #0f0f1a 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Hexágono animado */}
      <div className="relative flex items-center justify-center">
        {/* Anillo exterior girando */}
        <div
          className="absolute w-40 h-40 rounded-full"
          style={{
            border: "1px solid rgba(99,102,241,0.2)",
            animation: "spinSlow 8s linear infinite",
          }}
        />

        {/* Partículas orbitando */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "#6366f1" : "#8b5cf6",
              animation: `orbit 3s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              transformOrigin: "0 0",
              transform: `rotate(${deg}deg) translateX(70px)`,
              boxShadow:
                i % 2 === 0
                  ? "0 0 8px rgba(99,102,241,0.8)"
                  : "0 0 8px rgba(139,92,246,0.8)",
            }}
          />
        ))}

        {/* Anillo medio pulsando */}
        <div
          className="absolute w-28 h-28 rounded-full"
          style={{
            border: "1px solid rgba(139,92,246,0.3)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />

        {/* Hexágono central */}
        <div
          className="relative w-20 h-20 flex items-center justify-center"
          style={{ animation: "floatY 3s ease-in-out infinite" }}
        >
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon
              points="50,2 93,26 93,74 50,98 7,74 7,26"
              fill="none"
              stroke="url(#hexGrad)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          {/* Ícono </> dentro del hexágono */}
          <span
            className="absolute text-lg font-bold"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(135deg, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            &lt;/&gt;
          </span>
        </div>
      </div>

      {/* Nombre */}
      <div className="flex flex-col items-center gap-1">
        <h1
          className="text-white text-2xl"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Juan Pablo <span style={{ color: "#818cf8" }}>Hurtado</span>
        </h1>
        <p className="text-slate-500 text-xs uppercase tracking-widest">
          Frontend Developer
        </p>
      </div>

      {/* Barra de progreso */}
      <div className="flex flex-col items-center gap-2 w-48">
        <div
          className="w-full h-px rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              boxShadow: "0 0 8px rgba(99,102,241,0.6)",
            }}
          />
        </div>
        <span className="text-xs text-slate-600">{progress}%</span>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit {
          from { transform: rotate(var(--start, 0deg)) translateX(70px) rotate(0deg); }
          to   { transform: rotate(calc(var(--start, 0deg) + 360deg)) translateX(70px) rotate(-360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1);   opacity: 0.4; }
          50%       { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
