import React from "react";
import Avatar from "../images/logoDev.png";
import "../styles/about.css";

function About() {
  return (
    <section className="about">
      <div className="about-wrapper">
        <picture className="avatar-wrapper">
          <img
            src={Avatar}
            className="about-avatar"
            alt="foto de José Valdebenito"
          />
          <h5 className="about-subtitle text-center">
            Tengo 41 años y Resido en Santiago
          </h5>
        </picture>
        <article className="about-article">
          <h3 className="titles text-center">
            Desarrollo con pasión aplicaciones y sitios web para personas
          </h3>
          <p className="about-text">
            Soy desarrollador front end aplicaciones para mejorar cada vez más.
            <br />
            Un amante de la tecnología!. Desde siempre aprendiendo de forma
            autodidacta acerca de la evolución del hardware y software, con el fin
            de crear software de calidad, y esforzarme a diario para mejorar.
            <br />
            Con mas de ocho años trabajando como
            <b> técnico jurídico</b>, en 2021 decidí comenzar como
            <b> desarrollador web</b>.
            <br />
          En 2023 decido crear como marca personal Black Shirt, para difundir
          mis avances en redes sociales.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
