import { Element } from "react-scroll";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      <HeroSection />
      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="skill">
        <Skills />
      </Element>
      <Element name="contact">
        <div className="flex flex-col md:flex-row justify-between items-center py-12">
          <ContactMe />
          <Footer />
        </div>
      </Element>

      {/* <Projects /> */}
    </div>
  );
}

export default App;
