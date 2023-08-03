import React from "react";
import LinkTree from "../images/LinkTreeApp.png";
import Futuro from "../images/projectFuturo21.png";
import Encrypt from "../images/projectEncAlura.png";
import "../styles/carousel.css";

function Carousel() {
  return (
    <section className="carousel-section">
      <h3 className="carousel-title text-center">Algunos de mis proyectos</h3>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={LinkTree}
              className="carousel-image d-block w-100 h-100"
              alt="Generador de passwords"
            />
            <div className="carousel-caption d-md-block">
              <h5>Link Tree app</h5>
              <p className="caption-description">
                Aplicación para recopilar links de redes sociales
              </p>
              <a
                href="https://github.com/JoseValdebenitoG/my-linktree"
                className="carousel-caption-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://my-linktree-app.web.app/"
                className="carousel-caption-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-window"></i>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Futuro}
              className="carousel-image d-block w-100 h-100"
              alt="Página abogados"
            />
            <div className="carousel-caption d-md-block">
              <h5>Sitio de servicios</h5>
              <p className="caption-description">
                Sitio web para un estudio de abogados
              </p>
              <a
                href="https://futuro21.up.railway.app/"
                className="carousel-caption-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-window"></i>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Encrypt}
              className="carousel-image d-block w-100 h-100"
              alt="Encriptador de texto de alura"
            />
            <div className="carousel-caption d-md-block">
              <h5>Encriptador de texto</h5>
              <p className="caption-description">
                Aplicacion para encriptar texto, realizado en Oracle ONE - Alura
              </p>
              <a
                href="https://github.com/JoseValdebenitoG/jvtextencrypt"
                className="carousel-caption-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://josevaldebenitog.github.io/jvtextencrypt/"
                className="carousel-caption-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-window"></i>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="all-proyect-wrap">
        <a
          href="portafolio"
          className="all-proyect-btn"
          rel="noopener noreferrer"
        >
          Todos los proyectos
          <i className="arrow-icon bi bi-arrow-right-circle-fill"></i>
        </a>
      </div>
    </section>
  );
}

export default Carousel;
