import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./routes/home";
import Skills from "./routes/skills";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
