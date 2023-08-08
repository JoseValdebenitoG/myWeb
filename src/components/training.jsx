import React from "react";
import Cards from "./coursesCards";
import "../styles/skills.css";

function Training() {
  return (
    <section className="training-wrapper">
      <h2 className="training-title">Mis Cursos</h2>
      <Cards />
    </section>
  );
}
//TODO: Create cards

export default Training;
