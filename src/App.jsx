import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Skills from './sections/Skills';


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Contact />
     
    </div>
  );
};

export default App;
