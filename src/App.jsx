import React from "react";
import "./App.css";

function App() {
  return (
    <div className="home-container">
      {/* Hero / Encabezado principal */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Centro de Mercado, Logística y Tecnología de la Información</h1>
          <p>
            Impulsamos la innovación, la eficiencia y la conectividad para
            fortalecer el desarrollo empresarial y tecnológico.
          </p>
          <button className="btn-primary">Conócenos</button>
        </div>
      </header>

      {/* Secciones principales */}
      <main className="main-content">
        <section className="info-section">
          <div className="info-card">
            <h2>Logística y Distribución</h2>
            <p>
              Creamos estrategias eficientes para optimizar la cadena de
              suministro, asegurando rapidez, trazabilidad y sostenibilidad en
              cada proceso.
            </p>
            <button className="btn-secondary">Ver más</button>
          </div>

          <div className="info-card">
            <h2>Mercado y Comercio</h2>
            <p>
              Potenciamos la digitalización del comercio mediante análisis de
              datos, estrategias de marketing y plataformas tecnológicas
              innovadoras.
            </p>
            <button className="btn-secondary">Ver más</button>
          </div>

          <div className="info-card">
            <h2>Tecnología de la Información</h2>
            <p>
              Promovemos soluciones tecnológicas en software, ciberseguridad y
              redes inteligentes que impulsan la transformación digital.
            </p>
            <button className="btn-secondary">Ver más</button>
          </div>
        </section>

        {/* Sección de contacto o llamada a la acción */}
        <section className="cta-section">
          <h2>¿Quieres saber más sobre nuestros programas?</h2>
          <p>
            Descubre cómo formamos profesionales capaces de liderar el futuro de
            los negocios y la tecnología.
          </p>
          <button className="btn-primary">Contáctanos</button>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="home-footer">
        <p>
          © 2025 Centro de Mercado, Logística y TI — Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
