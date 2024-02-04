import { getImgUrl } from "../../utils/getImgUrl";

const ProjectCard = ({project}) => {
    console.log(getImgUrl(project.cover))
  return (
    <div className="card w-96  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={getImgUrl(project.cover)}
          alt={project.title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions gap-12">
          <button className="btn bg-[#0a1d22] text-[#4795A8]">Preview</button>
          <button className="btn bg-[#0a1d22] text-[#4795A8]">{"</>"} Code</button>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
