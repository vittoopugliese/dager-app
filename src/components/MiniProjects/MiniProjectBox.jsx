
import { ProjectTechIcons } from './../Projects/ProjectTechIcons';
export const MiniProjectBox = ({project}) => {
  return (
    <div className="project-card" data-aos={project.aos}
      onClick={() => {
        window.open(project.link);
      }}>
      <div className="card-header">
        <h3>{project.title}</h3>
        <i className="openlinkicon fa-solid fa-arrow-up-right-from-square"></i>
      </div>
      <p>{project.description}</p>
      <div className="card-icons">
        <ProjectTechIcons project={project} miniBox={true}/>
      </div>
    </div>
  );
};
