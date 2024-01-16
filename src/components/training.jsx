import React from "react";
import CoursesCards from "./coursesCards";
import "../styles/skills.css";

function Training() {
  return (
    <section className="training-wrapper">
      <h2 className="titles">Mis Cursos</h2>
      <CoursesCards />
    </section>
  );
}

export default Training;
