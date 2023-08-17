import React from "react";
import ProjectCard from "../components/ProjectCard";
import linkTree from "../images/projects/LinkTreeApp.png";
import futuro from "../images/projects/projectFuturo21.png";
import encriptador from "../images/projects/projectEncAlura.png"
import rickandmorty from "../images/projects/Rick&mortyweb.png"

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
    text: 'Sitio web de Estudio Jurídico para promocionar sus servicios',
    repo: "",
    url: "",
  },
  {
    id: 3,
    title: "Encriptador",
    image: encriptador,
    text: "Aplicación realizada en el curso de Oracle ONE - Alura, encripta texto para mensajes secretos",
    repo: "",
    url: "",
  },
  {
    id: 4,
    title: "Rick & Morty Web",
    image: rickandmorty,
    text: "Aplicación realizada con para practicar React haciendo llamados a la API pública de Rick and Morty",
    repo: "",
    url: "",
  },
];

function ProjectCards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {projectCards.map((card) => (
          <div className="col-md-4 col-lg-3" key={card.id}>
            <ProjectCard
              title={card.title}
              image={card.image}
              text={card.text}
              repo={card.repo}
              url={card.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
