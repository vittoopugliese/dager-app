import React from "react";
import {ProjectTechIcons} from "./ProjectTechIcons";
import {useMedia} from "./../../hooks/useMedia";

export const ProjectBox = ({project}) => {
  const {isMobile} = useMedia();

  return (
    <div className="project-box" data-aos="fade-up" onClick={() => {
        window.open(project.link);
      }}>
      <div className="project-image-container">
        <img src={project.image} alt="project-image" draggable={false} />
      </div>

      <div className="project-info">
        {!isMobile ? (
            <h3>{project.title}</h3>
        ) : (
            <h3>{project.title}</h3>
        )}

        <p>{project.description}</p>

        {!isMobile && <hr />}
      </div>
    </div>
  );
};
