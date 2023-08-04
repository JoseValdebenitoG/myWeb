import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./routes/home";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import SkillsTraining from "./routes/skillsTraining";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habilidades" element={<SkillsTraining />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
