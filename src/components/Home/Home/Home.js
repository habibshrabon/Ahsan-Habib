import ParticlesBg from "particles-bg";
import React from "react";
import Contact from "../../Contact/Contact";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";

const Home = () => {
  return (
    <div>
      <Hero />
      <Main />
      <Contact />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
};

export default Home;
