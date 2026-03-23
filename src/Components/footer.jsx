function footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex items-center justify-center flex-col lg:justify-between lg:flex-row gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © Juan Pablo Hurtado 2026, Todos los derechos reservados.
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-3">
            <a
              href="https://github.com/JuanPhurtado18"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full flex justify-center items-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(99,102,241,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12C0.5 17.08 3.87 21.34 8.44 22.9C9.05 23.01 9.27 22.65 9.27 22.34C9.27 22.06 9.26 21.24 9.25 20.3C6 20.97 5.28 18.76 5.28 18.76C4.73 17.36 3.94 17 3.94 17C2.84 16.25 4.03 16.26 4.03 16.26C5.24 16.34 5.88 17.5 5.88 17.5C6.96 19.33 8.73 18.8 9.42 18.49C9.53 17.7 9.84 17.16 10.18 16.85C7.49 16.55 4.66 15.52 4.66 10.92C4.66 9.61 5.13 8.54 5.9 7.69C5.77 7.39 5.36 6.19 6.02 4.55C6.02 4.55 7.03 4.24 9.24 5.73C10.2 5.46 11.2 5.33 12.2 5.33C13.2 5.33 14.2 5.46 15.16 5.73C17.37 4.24 18.38 4.55 18.38 4.55C19.04 6.19 18.63 7.39 18.5 7.69C19.27 8.54 19.74 9.61 19.74 10.92C19.74 15.53 16.91 16.55 14.21 16.85C14.66 17.24 15.06 18.02 15.06 19.2C15.06 20.87 15.05 21.96 15.05 22.34C15.05 22.65 15.27 23.02 15.89 22.9C20.45 21.34 23.82 17.08 23.82 12C23.82 5.73 18.59 0.5 12 0.5Z"
                  fill="#a5b4fc"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/juan-pablo-hurtado-agudelo/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full flex justify-center items-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(99,102,241,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.45 20.45H16.9V14.85C16.9 13.45 16.87 11.65 14.92 11.65C12.94 11.65 12.65 13.15 12.65 14.75V20.45H9.1V9H12.5V10.6H12.55C13.05 9.7 14.25 8.75 15.95 8.75C19.55 8.75 20.45 11.05 20.45 14.05V20.45ZM5.34 7.43C4.2 7.43 3.25 6.48 3.25 5.34C3.25 4.2 4.2 3.25 5.34 3.25C6.48 3.25 7.43 4.2 7.43 5.34C7.43 6.48 6.48 7.43 5.34 7.43ZM7.12 20.45H3.56V9H7.12V20.45Z"
                  fill="#a5b4fc"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
