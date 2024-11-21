import React from "react";

export const ProjectTechIcons = ({project, miniBox}) => {
  return (
    <div className="project-techno-icons">
      {project.tech.map((t, i) => {
        return (
          <img
            src={`./tech-logos/${t}.png`}
            loading="lazy"
            draggable={false}
            alt={t}
            key={t + i}
            style={{
              borderRadius: "100%",
              position: "relative",
              fontSize: t == "angular" ? "1.4em" : "1em",
              bottom: t == "angular" ? "1px" : "0px",
              width: "1.94em"
            }}
            className={t}
          />
        );
      })}
    </div>
  );
};
