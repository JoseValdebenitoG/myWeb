import React from "react";
import "../styles/footer.css";
import logoHorizontal from "../images/logoBSDhoriz.png";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <h3>Tambien Puedes seguirme en mis redes sociales</h3>
      <img src={logoHorizontal} alt="logo horizontal de Black Shirt" />
    </footer>
  );
}

export default Footer;
