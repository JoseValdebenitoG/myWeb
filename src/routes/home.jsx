import React from "react";
import "../styles/home.css";
import Hero from "../components/hero";
import Carousel from "../components/carousel";

function Home() {
  return (
    <section>
      <Hero />
      <Carousel />
    </section>
  );
}

export default Home;
