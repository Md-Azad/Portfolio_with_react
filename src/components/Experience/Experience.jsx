import { TypeAnimation } from "react-type-animation";

const Experience = () => {
  return (
    <div className="text-[#4795A8] md:flex flex-row-reverse  justify-center items-center md:mt-16">
      <div
        data-aos="fade-up-right"
        className="w-full md:w-[48%] flex flex-row justify-evenly items-center "
      >
        
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[500, "Experience", 1000]}
          speed={50}
          style={{ fontSize: "3em", color: "#4795A8" }}
          repeat={Infinity}
        />
      </div>
      <div className=" md:w-[2px] md:h-[300px] md:bg-red-500"></div>

      <div className="w-full md:w-[44%] text-2xl  ml-12">
        <div data-aos="fade-up-left" className="w-[80%]">
          <h1 className="text-3xl mb-1">Frontend Developer</h1>
          <h2>armics IT services</h2>
          <p>01-01-2023 to 31-12-2023</p>

          <p className="my-4">Responsibilities:</p>

          <ul>
            <li>
              -&gt; Developed frontend websites according to stockholder&apos;s
              requirements.{" "}
            </li>
            <li>
              -&gt; Worked on optimizing website&apos;s performance and page
              speed{" "}
            </li>
            <li>
              -&gt; Following an agile environment with daily stand-ups and
              biweekly sprints.
            </li>
          </ul>
          <h3 className="mt-4 text-[#4795A8] font-semibold">
            Technologies-&gt; React <span className="text-gray-300">|</span>{" "}
            JavaScript <span className="text-gray-300">|</span> Tailwind CSS{" "}
            <span className="text-gray-300">|</span> Git{" "}
            <span className="text-gray-300">|</span> GitHub.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Experience;
