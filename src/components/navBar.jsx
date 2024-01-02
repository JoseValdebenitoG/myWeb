import React from "react";
import "../styles/navBar.css";
import logoJV from "../images/logoJVblck.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="offcanvasDarkNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img src={logoJV} width={60} />
        </a>
        <div className="offcanvas offcanvas-start" id="navbarNav">
          <div className="offcanvas-header justify-content-between">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              José Valdebenito
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <ul className="navbar-nav justify-content-center text-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="habilidades">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portafolio">
                Portafolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
