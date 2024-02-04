import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../assets/Azad.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./HeroSection.css";


const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse  lg:flex-row-reverse gap-32">
        
          <div className="md:hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src={image} className="mr-4 md:max-w-sm rounded-lg shadow-2xl" />
          </div>

          <div
            className=" w-full md:w-1/2"
            data-aos="fade-up-right"
            data-aos-once="false"
          >
            <h1 className="md:text-5xl font-bold text-[#4795A8]">Md Azad Hossain</h1>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "A Web Developer",
                1000,
                "A Web Designer",
                1000,
                "A Frontend Develper",
                1000,
                "A Backend Develper",
                500,
              ]}
              speed={50}
              style={{ fontSize: "2em", color: "#4795A8" }}
              repeat={Infinity}
            />
            <p className="py-6 mr-8 text-[#4795A8]">
              A Frontend Developer specializing in scalable Client-side
              applications with React.js. Proficient in Next.js for seamless web
              development. In Addition, I know Node.js and Express.js to give
              the taste of Backend.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/Md-Azad"
                target="_blank"
                rel="noreferrer"
                className="btn bg-black text-[#4795A8]"
              >
                GitHub <FaGithub />
              </a>
              <a
                href="https://github.com/Md-Azad"
                target="_blank"
                rel="noreferrer"
                className="btn bg-black text-[#4795A8]"
              >
                LinkedIn <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
