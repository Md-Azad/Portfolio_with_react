import Aos from "aos";

import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className=" text-[#4795A8] md:flex  justify-center items-center mb-8">
        <div
          data-aos="fade-up-right"
          className="w-full md:w-1/2 flex flex-row-reverse justify-evenly items-center "
        >
          <div className=" md:w-[2px] h-[300px] md:bg-red-500"></div>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[500, "About Me", 1000]}
            speed={50}
            style={{ fontSize: "3em", color: "#4795A8" }}
            repeat={Infinity}
          />
        </div>

        <div className="w-full md:w-1/2 text-2xl flex items-center relative ml-12 ">
          <div data-aos="fade-up-left" className="w-[80%]">
            <p className="text-2xl ">
              I&apos;m a passionate MERN (MongoDB, Express.js, React.js,
              Node.js) stack developer with 1 year of experience. I specialize
              in crafting top-notch web applications that blend cutting-edge
              technology with seamless user experiences. From front-end magic
              with React to robust server-side solutions with Node.js and
              Express.js. I&apos;ve cultivated my skills to build dynamic and
              responsive web applications. Driven by a love for problem-solving
              and innovation, I specialize in leveraging the power of the MERN
              stack to create seamless, scalable, and user-centric solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
