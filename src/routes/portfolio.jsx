import React from "react";
import "../styles/porfolio.css";

function Portfolio() {
  return (
    <section className="portfolio-wrapper d-flex flex-column justify-content-center align-items-center">
      <h2 className="titles">Portafolio</h2>
      <p className="portfolio-text">
        Estos son los proyectos en los que he trabajado usando las tecnologías
        que voy aprendiendo.
      </p>
      <div className="project-card-wrapper"></div>
    </section>
  );
}

export default Portfolio;
