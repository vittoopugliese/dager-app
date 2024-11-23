import React from "react";

export const ProjectBox = ({project}) => {

  return (
    <div className="project-box" data-aos="fade-up" onClick={() => {window.open(project.link);}}>
      <div className="project-image-container">
        <img src={project.image} alt="project-image" draggable={false} />
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};
