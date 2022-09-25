import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Service from "../components/services/Service";
import Step from "../components/steps/Step";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Step />
      <Service />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
