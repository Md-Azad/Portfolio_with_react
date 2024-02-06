import { getProjectImgUrl } from "../../utils/getImgUrl";

const ProjectCard = ({ project }) => {

  return (
    <div className="card  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={getProjectImgUrl(project.cover)}
          alt={project.title}
          className="rounded-xl h-48 w-96 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">{project.title}</h2>
        <p className="text-left">{project.description}</p>
      </div>
      <div className="w-1/2 md:w-full mx-auto text-center">
        <a href={project.live} target="_blank" rel="noreferrer">
          <button className="btn bg-[#0a1d22] text-[#4795A8]">Live View</button>
        </a>
        <a href={project.live} target="_blank" rel="noreferrer">
          <button className="btn bg-[#0a1d22] text-[#4795A8] my-2 md:mx-1">
            {"</>"} Frontend
          </button>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <button className="btn bg-[#0a1d22] text-[#4795A8]">
            {"</>"} Backend
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
