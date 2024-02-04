import { Element } from "react-scroll";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      <HeroSection />
      <Element name="about">
        <About />
      </Element>
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
