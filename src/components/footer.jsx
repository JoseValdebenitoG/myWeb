import React from "react";
import "../styles/footer.css";
import logoHorizontal from "../images/logoBSDhoriz.png";

function Footer() {
  return (
    <footer className="footer-wrapper d-flex flex-column align-items-center justify-content-center flex-wrap">
      <h4 className="footer-title text-center p-4">
        También puedes seguirme en mis redes sociales como Black Shirt Dev.
      </h4>
      <img
        src={logoHorizontal}
        alt="logo horizontal de Black Shirt"
        className="footer-logo mx-auto d-block"
      />
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
          href="https://www.instagram.com/blackshirtdev/"
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
          <i className="bi bi-c-circle"></i>
          2023 | Creado con ♥️ por Jose Valdebenito
        </p>
      </div>
    </footer>
  );
}

export default Footer;
