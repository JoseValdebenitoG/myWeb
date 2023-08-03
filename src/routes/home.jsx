import React from "react";
import "../styles/home.css";
import Hero from "../components/hero";
import Carousel from "../components/carousel";
import About from "../components/about";

function Home() {
  return (
    <section>
      <Hero />
      <Carousel />
      <About />
    </section>
  );
}

export default Home;
