import { useState } from "react";

function DarkMode() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${darkmode ? "bg-gray-900" : "bg-white"}`}>
      <h1 className={`text-3xl font-bold mb-4 ${darkmode ? "text-white" : "text-gray-900"}`}>
        Modo {darkmode ? "Oscuro" : "Claro"}
      </h1>
      <button
        onClick={() => setDarkmode(!darkmode)}
        className={`px-4 py-2 rounded font-medium ${darkmode ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
      >
        Cambiar a modo {darkmode ? "claro" : "oscuro"}
      </button>
    </div>
  );
}

export default DarkMode;