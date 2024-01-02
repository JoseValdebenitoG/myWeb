import React from "react";
import "../styles/footer.css";
import logoHorizontal from "../images/JVBlancoHorSinUrl.png";
import Chile from "../images/logos/cl.svg";
import Heart from "../images/logos/heart-fill.svg";

function Footer() {
  return (
    <footer className="footer-wrapper d-flex flex-column align-items-center justify-content-center flex-wrap">
      <h4 className="footer-title text-center p-4">
        También puedes seguirme en mis redes sociales.
      </h4>
      <img
        src={logoHorizontal}
        alt="logo horizontal de Black Shirt"
        className="footer-logo mx-auto d-block"
      />
      <section className="social-icons d-flex flex-wrap align-items-center justify-content-center">
        <a
          href="https://twitter.com/JValdebenitoG"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter-x"></i>
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
      <div className="copyright">
        <p>
          <i className="copy bi bi-c-circle"></i>
          2023 | Creado con <img src={Heart} width="15" /> por Jose Valdebenito
        </p>
      </div>
    </footer>
  );
}

export default Footer;
