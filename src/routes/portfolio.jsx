import React from "react";
import ProjectCards from "../components/ProjectCards";
import "../styles/porfolio.css";

function Portfolio() {
  return (
    <section className="portfolio-wrapper d-flex flex-column justify-content-center align-items-center">
      <h2 className="titles">Portafolio</h2>
      <p className="portfolio-text">
        Estos son los proyectos en los que he trabajado usando las tecnologías
        que voy aprendiendo.
      </p>
      <div className="project-card-wrap">
        <ProjectCards />
      </div>
    </section>
  );
}

export default Portfolio;
