import React from "react";

function Hero() {
  return (
    <section className="hero d-flex">
      <div className="hero-wrap text-center flex-column">
        <div className="hero-info-wrap p-3">
          <h1 className="hero-title">José Valdebenito</h1>
          <h3 className="hero-subtitle">Soy desarrollador</h3>
          <a className="hero-btn" href="contacto">
            Contáctame!
          </a>
        </div>
        <div className="social-icons-wrapper">
          <section className="social-icons d-flex flex-wrap align-items-center justify-content-center m-4">
            <a
              href="https://twitter.com/JValdebenitoG"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/digival.cl/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://github.com/JoseValdebenitoG"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jvaldebenitog/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Hero;
