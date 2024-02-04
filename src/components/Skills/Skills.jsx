import Marquee from "react-fast-marquee";
//
import { getAllSkills } from "../../data/skillsData";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = getAllSkills();

  return (
    <div className="md:min-h-[500px] mt-12">
      <div className="text-center text-3xl text-[#4795A8]  ">
        <h1 className="mb-12 text-6xl">Skills</h1>

        <div className="md:grid grid-cols-5 gap-12 mb-12">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill}></SkillCard>
          ))}
        </div>
      </div>

      <Marquee pauseOnHover='true' className="text-[#7b9ca4]">
        {skills.map((skill) => (
          <h1 key={skill.id} className="mx-12 text-2xl">
            {skill.title}
          </h1>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
