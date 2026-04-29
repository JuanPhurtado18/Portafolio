// About.jsx
import JuanPhoto from "../img/JuanPhoto.jpg";

export default function About() {
  return (
    <section
      className="px-20 py-20 flex flex-col gap-12"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Título */}
      <h2
        className="text-center text-4xl text-white uppercase tracking-widest"
        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
      >
        Déjame <span style={{ color: "#818cf8" }}>presentarme</span>
      </h2>

      {/* Contenido */}
      <div
        className="rounded-2xl p-10 flex gap-16 items-center"
        style={{
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Texto izquierda */}
        <div className="flex-1 flex flex-col gap-5 text-slate-400 text-base leading-relaxed">
          <p>
            Soy un{" "}
            <span className="text-indigo-300 font-medium">
              Desarrollador Full Stack
            </span>{" "}
            con formación en{" "}
            <span className="text-indigo-300 font-medium">
              Ingeniería Multimedia
            </span>{" "}
            y experiencia construyendo aplicaciones web modernas de extremo a
            extremo. He desarrollado soluciones completas desde la capa de datos
            hasta la interfaz, aplicando buenas prácticas de arquitectura y
            escalabilidad. Me enfoco en crear interfaces dinámicas y bien
            estructuradas, así como en diseñar APIs y sistemas que permitan una
            integración eficiente entre frontend y backend. Tengo experiencia
            trabajando con estado global, consumo de servicios y construcción de
            aplicaciones con múltiples capas de interacción.
          </p>

          <p>
            Mis áreas de interés incluyen el desarrollo de{" "}
            <span className="text-indigo-300 font-medium">
              interfaces de usuario
            </span>
            ,{" "}
            <span className="text-indigo-300 font-medium">
              componentes reutilizables
            </span>{" "}
            y la gestión eficiente del estado en aplicaciones escalables.
          </p>
          <p>
            Siempre que puedo, construyo proyectos con{" "}
            <span className="text-indigo-300 font-medium">React.js</span> y
            frameworks modernos como{" "}
            <span className="text-indigo-300 font-medium">Next.js</span> y
            herramientas como{" "}
            <span className="text-indigo-300 font-medium">Vite</span>.
          </p>
        </div>

        {/* Foto derecha */}
        <div className="flex items-center justify-center">
          <div
            className="w-56 h-56 rounded-full overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 3px rgba(99,102,241,0.4), 0 20px 40px rgba(99,102,241,0.2)",
            }}
          >
            <img
              src={JuanPhoto}
              alt="Juan Pablo Hurtado"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
