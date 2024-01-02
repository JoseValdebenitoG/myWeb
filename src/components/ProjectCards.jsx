import React from "react";
import ProjectCard from "../components/ProjectCard";
import linkTree from "../images/projects/LinkTreeApp.png";
import futuro from "../images/projects/projectFuturo21.png";
import encriptador from "../images/projects/projectEncAlura.png";
import rickandmorty from "../images/projects/Rick&mortyweb.png";

const projectCards = [
  {
    id: 1,
    title: "My Link Tree",
    image: linkTree,
    text: "Aplicación para reunir links de redes sociales, usando firebase.",
    repo: "https://github.com/JoseValdebenitoG/my-linktree",
    url: "https://my-linktree-app.web.app/",
  },
  {
    id: 2,
    title: "Futuro 21",
    image: futuro,
    text: "Sitio web de Estudio Jurídico para promocionar sus servicios",
    repo: "",
    url: "https://futuro21.up.railway.app",
  },
  {
    id: 3,
    title: "Encriptador",
    image: encriptador,
    text: "Aplicación realizada en el curso de Oracle ONE - Alura, encripta texto para mensajes secretos",
    repo: "https://github.com/JoseValdebenitoG/jvtextencrypt",
    url: "https://josevaldebenitog.github.io/jvtextencrypt/",
  },
  {
    id: 4,
    title: "Rick & Morty Web",
    image: rickandmorty,
    text: "Aplicación realizada con para practicar React haciendo llamados a la API pública de Rick and Morty",
    repo: "https://github.com/JoseValdebenitoG/rick-and-morty-react",
    url: "https://rick-and-morty-react.up.railway.app",
  },
];

function ProjectCards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {projectCards.map((pcard) => (
          <div className="col-md-6" key={pcard.id}>
            <ProjectCard
              title={pcard.title}
              image={pcard.image}
              text={pcard.text}
              repo={pcard.repo}
              url={pcard.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
