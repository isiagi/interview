import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Step from "./components/steps/Step";
import Service from "./components/services/Service";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Step />
      <Service />
      <About />
      <Contact />
    </div>
  );
}

export default App;
