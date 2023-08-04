import React from "react";
import "../styles/skills.css";

function Skills() {
  return (
    <section className="skills-wrapper text-center">
      <h2 className="skills-title">Mis Habilidades</h2>
      <p className="skills-text">
        Tengo conocimiento en las principales tecnologías Front-End y también
        algunas Back-End. Como lo son HTML, CSS, frameworks de JavaScript,
        Node.js y Reactjs, también Python con flask, además de bases de datos
        como Mysql y MongoDB. También manejo herramientas como Figma para el
        diseño de las aplicaciones y paginas web.
      </p>
      <span>
        <i className="bi bi-html5"></i>
      </span>
    </section>
  );
}

export default Skills;
