import React from "react";
import "../styles/skills.css";
import Html from "../images/logos/html5.svg";
import Css from "../images/logos/css3.svg";
import JS from "../images/logos/javascript.svg";
import logoReactJS from "../images/logos/react.svg";
import Python from "../images/logos/python.svg";
import Flask from "../images/logos/flask.svg";
import Mongo from "../images/logos/mongodb.svg";
import MySQL from "../images/logos/mysql.svg";
import Figma from "../images/logos/figma.svg";
import logoVite from "../images/logos/vitejs.svg";

function Skills() {
  return (
    <section className="skills-wrapper">
      <h2 className="titles">Mis Habilidades</h2>
      <p className="skills-text">
        Tengo conocimiento en las principales tecnologías Front-End y también
        algunas Back-End. Como lo son HTML, CSS, frameworks de JavaScript,
        Node.js y React.js, también Python con flask, además de bases de datos
        como Mysql y MongoDB. También manejo herramientas como Figma para el
        diseño de las aplicaciones y paginas web.
      </p>
      <div className="skills-logos">
        <img src={Html} className="skill-logo" alt="logo de html5" width="30" />
        <img src={Css} className="skill-logo" alt="logo de CSS3" width="30" />
        <img
          src={JS}
          className="skill-logo"
          alt="logo de JavaScript"
          width="30"
        />
        <img
          src={logoReactJS}
          className="skill-logo"
          alt="logo de React js"
          width="30"
        />
        <img
          src={Python}
          className="skill-logo"
          alt="logo de Python"
          width="30"
        />
        <img
          src={Flask}
          className="skill-logo"
          alt="logo de Flask"
          width="30"
        />
        <img
          src={Mongo}
          className="skill-logo"
          alt="logo de MongoDB"
          width="30"
        />
        <img
          src={MySQL}
          className="skill-logo"
          alt="logo de MySqlDB"
          width="30"
        />
        <img
          src={Figma}
          className="skill-logo"
          alt="logo de Figma"
          width="20"
        />
        <img
          src={logoVite}
          className="skill-logo"
          alt="logo de vite"
          width="30"
        />
      </div>
    </section>
  );
}

export default Skills;
