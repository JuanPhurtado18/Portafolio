import { useState } from "react";

export default function Example() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl gap-3.5 justify-end p-6 lg:px-8 "
      >
        <a
          href="#"
          className="text-sm/6 font-semibold  hover:text-blue-500 transition duration-300 text-gray-900 dark:text-white"
        >
          Inicio
        </a>
        <a
          href="#"
          className="text-sm/6 font-semibold hover:text-blue-500 transition duration-300 text-gray-900 dark:text-white"
        >
          sobre mi
        </a>
        <a
          href="#"
          className="text-sm/6 font-semibold   hover:text-blue-500 transition duration-300 text-gray-900 dark:text-white"
        >
          Mis skills
        </a>
        <a
          href="#"
          className="text-sm/6 font-semibold  hover:text-blue-500 transition duration-300 text-gray-900 dark:text-white"
        >
          Mis Proyectos
        </a>
      </nav>
    </header>
  );
}
