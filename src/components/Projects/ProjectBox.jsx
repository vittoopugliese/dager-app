import React from "react";
import {ProjectTechIcons} from "./ProjectTechIcons";
import {useMedia} from "./../../hooks/useMedia";

export const ProjectBox = ({project}) => {
  const {isMobile} = useMedia();

  return (
    <div className="project-box" data-aos='fade-up'
    onClick={() => {
      window.open(project.link);
    }}>
      <div className="project-image-container">
        <img src={project.image} alt="project-image" draggable={false} />
      </div>

      <div className="project-info">
        {!isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <h3>{project.title}</h3>
            <ProjectTechIcons project={project} />
          </div>
        ) : (
          <div>
            <h3>{project.title}</h3>
          </div>
        )}

        <p>{project.description}</p>

        {isMobile && <ProjectTechIcons project={project} />}
        {!isMobile && <hr />}


          
      </div>
    </div>
  );
};
