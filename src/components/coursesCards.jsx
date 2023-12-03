import React from "react";
import CoursesCard from "./coursesCard";
import Oracle from "../images/courses/CertificadoAlura.png";
import UdemyPy from "../images/courses/udemy-python.png";
import UdemyJS from "../images/courses/udemy-javascript.png";
import Claro from "../images/courses/claro-madicap.png";
import GoogleApp from "../images/courses/certificadoGoogleApps.png";
import Aiep from "../images/courses/CertificadoAiep.png";

const ccards = [
  {
    id: 1,
    title: "Google Mobile",
    image: GoogleApp,
    text: "Curso de introducción al desarrollo de App para móviles, tanto en lenguajes nativos y multiplataforma.",
  },
  {
    id: 2,
    title: "Oracle ONE",
    image: Oracle,
    text: "Bootcamp de desarrollo web, aprendí tecnologías frontend como HTML5, CSS3, JavaScript y backend con Java.",
  },
  {
    id: 3,
    title: "JavaScript",
    image: UdemyJS,
    text: "Curso de Udemy, en el cual aprendí las bases de JavaScript, tanto frontend como backend, agregando conocimientos en base de datos MongoDB y Node.js.",
  },
  {
    id: 4,
    title: "Python",
    image: UdemyPy,
    text: "Curso de Udemy, en el cual aprendí desarrollo web con Python y su framework Flask, ademas del uso de bases de datos relaciones con MySql.",
  },
  {
    id: 5,
    title: "Java-MySql",
    image: Claro,
    text: "Bootcamp en el cual aprendí desarrollo de aplicaciones de escritorio con Java y bases de datos MySql.",
  },
  {
    id: 6,
    title: "Técnico Jurídico",
    image: Aiep,
    text: "Carrera técnica, con conocimientos en el area legal.",
  },
];

function CoursesCards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {ccards.map((ccard) => (
          <div className="col-md-4" key={ccard.id}>
            <CoursesCard
              title={ccard.title}
              image={ccard.image}
              text={ccard.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesCards;
