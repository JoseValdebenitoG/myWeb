import React from "react";
import Avatar from "../images/logoDev.png";
import "../styles/about.css";

function About() {
  return (
    <section className="about d-flex flex-column align-items-center justify-content-center ">
      <img
        src={Avatar}
        className="about-avatar"
        alt="foto de José Valdebenito"
      />
      <h3 className="about-title text-center">
        Desarrollo con pasión aplicaciones y sitios web para personas
      </h3>
      <h5 className="about-subtitle text-center">
        Tengo 41 años y Resido en Santiago
      </h5>
      <p className="about-text">
        Soy desarrollador autodidacta y desarrollo aplicaciones para mejorar
        cada vez más.
        <br />
        Soy un amante de la tecnología!. Desde siempre aprendiendo de forma
        autodidacta acerca de la evolución del hardware y software, pasando de
        ser usuario a querer crear software de calidad, y esforzarme a diario
        para mejorar. Mis editores de texto favoritos son: NeoVim, VSCode.
        Pasando de trabajar en el area legal, como técnico juridico a
        desarrollador web.
        <br />
        En 2023 decido crear como marca personal Black Shirt, para difundir mis
        avances en redes sociales.
      </p>
    </section>
  );
}

export default About;
